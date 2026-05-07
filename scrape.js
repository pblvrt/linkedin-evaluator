(async function() {
  console.log('[lna] bookmarklet started');
  try {
  if (!location.hostname.endsWith('linkedin.com') || !location.pathname.startsWith('/in/')) {
    alert('⚠️ Open a LinkedIn profile page first (linkedin.com/in/...) and click the bookmark again.');
    return;
  }

  const toast = (msg, color) => {
    const existing = document.getElementById('__lna_toast');
    if (existing) existing.remove();
    const t = document.createElement('div');
    t.id = '__lna_toast';
    t.textContent = msg;
    Object.assign(t.style, {
      position: 'fixed', bottom: '24px', right: '24px',
      background: color || '#0a66c2', color: '#fff',
      padding: '14px 20px', borderRadius: '10px',
      zIndex: 2147483647, fontFamily: 'system-ui, -apple-system, sans-serif',
      fontSize: '14px', fontWeight: '500',
      boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
      maxWidth: '360px', lineHeight: '1.4'
    });
    document.body.appendChild(t);
    return t;
  };

  const wait = (ms) => new Promise(r => setTimeout(r, ms));
  const t = toast('📊 Capturing profile — scrolling page…');

  const originalScroll = window.scrollY;
  const totalHeight = () => document.body.scrollHeight;

  const steps = 10;
  for (let i = 1; i <= steps; i++) {
    window.scrollTo(0, (totalHeight() / steps) * i);
    await wait(450);
  }
  window.scrollTo(0, 0);
  await wait(400);

  toast('📊 Expanding sections…');

  const expanderRegex = /^(\s*\.\.\.see more|see more|show all|see all( \d+)?( experience| skills| education| posts| recommendations)?|… see more|see all activity)\s*$/i;
  const buttons = Array.from(document.querySelectorAll('button, a span'))
    .filter(el => expanderRegex.test((el.innerText || '').trim()))
    .map(el => el.closest('button') || el.closest('a'))
    .filter(Boolean);
  for (const b of buttons) {
    try { b.click(); await wait(120); } catch (e) {}
  }
  await wait(800);

  const name = (document.querySelector('h1')?.innerText || '').trim();

  const h1 = document.querySelector('h1');
  let headline = '';
  let locationText = '';
  if (h1) {
    const card = h1.closest('section') || h1.parentElement?.parentElement || h1.parentElement;
    const lines = (card?.innerText || '')
      .split('\n').map(s => s.trim()).filter(Boolean);
    const nameIdx = lines.findIndex(l => l === name);
    if (nameIdx >= 0) {
      for (let i = nameIdx + 1; i < Math.min(nameIdx + 4, lines.length); i++) {
        if (lines[i] && lines[i] !== name && lines[i].length > 6 && lines[i].length < 240) {
          headline = lines[i];
          break;
        }
      }
      for (let i = nameIdx + 2; i < Math.min(nameIdx + 8, lines.length); i++) {
        const l = lines[i];
        if (!l || l === headline) continue;
        if (/connection|follower|contact info|·/i.test(l)) continue;
        if (l.length < 80 && /[A-Z]/.test(l[0] || '')) {
          locationText = l;
          break;
        }
      }
    }
  }

  const photoSelectors = [
    'img.pv-top-card-profile-picture__image',
    'img[class*="profile-photo"]',
    'button[aria-label*="profile photo" i] img',
    'img[alt*="profile photo" i]'
  ];
  let photoEl = null;
  for (const sel of photoSelectors) {
    photoEl = document.querySelector(sel);
    if (photoEl) break;
  }

  let bannerEl = null;
  const bannerSelectors = [
    'img.profile-top-card__background-image',
    'img[class*="profile-background"]',
    'img[class*="cover-img"]',
    '.profile-background-image img',
    'div[class*="cover-img"] img'
  ];
  for (const sel of bannerSelectors) {
    bannerEl = document.querySelector(sel);
    if (bannerEl) break;
  }
  let bannerHasCustomImage = !!bannerEl?.src;
  if (bannerEl && bannerEl.src) {
    if (/static|default|empty|placeholder/i.test(bannerEl.src)) bannerHasCustomImage = false;
  }

  const sections = {};
  document.querySelectorAll('section').forEach(s => {
    const h2 = s.querySelector('h2');
    if (!h2) return;
    const sectionName = (h2.innerText || '').trim().split('\n')[0];
    if (!sectionName) return;
    const skip = /^(People you may know|You might like|Who your viewers also viewed|Profile language|Public profile & URL|Promoted|Analytics)$/i;
    if (skip.test(sectionName)) return;
    const text = (s.innerText || '').trim();
    if (text.length > 20) sections[sectionName] = text.slice(0, 8000);
  });

  let recentActivityNote = '';
  try {
    const actUrl = `${location.origin}${location.pathname.replace(/\/?$/, '')}/recent-activity/all/`;
    const r = await fetch(actUrl, { credentials: 'include' });
    if (r.ok) {
      const html = await r.text();
      const match = html.match(/<title>([^<]+)<\/title>/);
      recentActivityNote = `(recent activity URL fetched OK — Claude can ask user to also share /recent-activity/all/ contents if cadence detail is needed: ${actUrl})`;
    }
  } catch (e) {}

  const profile = {
    profileUrl: location.href,
    capturedAt: new Date().toISOString(),
    name,
    displayName: name,
    headline,
    location: locationText,
    photo: {
      present: !!photoEl,
      alt: photoEl?.alt || null,
      note: photoEl ? 'Photo present. Describe quality from alt text and surrounding context — assume reasonable headshot unless alt suggests otherwise.' : 'No profile photo visible.'
    },
    banner: {
      present: bannerHasCustomImage,
      note: bannerHasCustomImage
        ? 'Custom banner present. Describe what it likely shows — score conservatively (3/6) unless context confirms a USP/CTA/authority marker.'
        : 'Default LinkedIn banner (no custom image). Score 0/6.'
    },
    sectionsFoundOnProfile: Object.keys(sections),
    sections,
    recentActivityNote
  };

  const promptText = `Audit my LinkedIn profile using the framework at https://raw.githubusercontent.com/pblvrt/linkedin-evaluator/main/audit.md

Fetch the framework first. Apply the rubric exactly as specified. Profile data captured from my own logged-in LinkedIn session is below — use it instead of trying to fetch the URL yourself (LinkedIn blocks bots).

\`\`\`json
${JSON.stringify(profile, null, 2)}
\`\`\``;

  let copied = false;
  try {
    await navigator.clipboard.writeText(promptText);
    copied = true;
  } catch (e) {
    try {
      const ta = document.createElement('textarea');
      ta.value = promptText;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
      copied = true;
    } catch (e2) {}
  }

  window.scrollTo(0, originalScroll);

  if (copied) {
    toast('✅ Profile captured + prompt copied. Opening Claude — paste with ⌘V.', '#057642');
    await wait(900);
    window.open('https://claude.ai/new', '_blank');
  } else {
    const w = window.open('', '_blank');
    if (w) {
      w.document.write(`<title>Audit prompt</title><pre style="font:14px/1.5 ui-monospace,monospace;white-space:pre-wrap;padding:24px;max-width:900px;margin:0 auto">${promptText.replace(/[<>]/g, c => ({'<':'&lt;','>':'&gt;'}[c]))}</pre>`);
    }
    toast('⚠️ Clipboard blocked. Prompt opened in new tab — copy manually and paste into Claude.', '#b65f00');
  }

  setTimeout(() => document.getElementById('__lna_toast')?.remove(), 5000);
  } catch (err) {
    console.error('[lna] error', err);
    alert('Audit bookmarklet failed: ' + (err && err.message ? err.message : err) + '\n\nOpen DevTools console for full trace.');
  }
})();
