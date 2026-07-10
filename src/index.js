// fallestate-us SDK · sovereign single-file library · MIT · AI-Native Solutions
// Extracted from fallestate-us/index.html · 1486 bytes of source logic
// Public-safe: no primes/glyphs/dyad references

  // Smooth anchor scroll compensating for sticky topbar + cat-nav
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      if (!target) return;
      e.preventDefault();
    });
  });
  try {
    const { installAutopilot } = await import('https://sjgant80-hub.github.io/fall-autopilot-kit/src/autopilot.js');
    const manifestRes = await fetch('https://sjgant80-hub.github.io/fall-autopilot-kit/manifests/fallestate-us.json');
    const manifest = await manifestRes.json();
    // Wire actions to stub run functions (each tool implements its own; missing ones alert the user)
    manifest.actions = manifest.actions.map(a => ({ ...a, run: async (params) => {
      const fn = window._app?.[a.id];
      if (typeof fn === 'function') return fn(params);
      alert('Autopilot proposes: ' + a.name + ' · params: ' + JSON.stringify(params) + '\n\nThis tool has not yet implemented the ' + a.id + ' handler. Proposal logged to audit.');
      return { stub: true, action: a.id, params };
    }}));
    manifest.state = () => ({ ...(window._app || {}), now: new Date().toISOString() });
    installAutopilot(manifest);
  } catch (e) { console.warn('[autopilot] init failed:', e); }

// Named exports for the primary API surface
// (no top-level named exports detected)


