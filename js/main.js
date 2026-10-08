(() => {
  'use strict';

  const MEMBERS = [
    { handle: 'stesta1', name: 'Santiago Testa', linkedin: 'https://www.linkedin.com/in/testa0/', color: '#f26522' },
    { handle: 'Nahuununez', name: 'Nahuel Nuñez', linkedin: 'https://www.linkedin.com/in/nahuununez/', color: '#fbb03b' },
    { handle: 'tahara2130', name: 'Nahuel Tahara', linkedin: 'https://www.linkedin.com/in/tahara21/', color: '#c9ccd3' },
  ];

  const GITHUB_PATH = 'M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z';
  const LINKEDIN_PATH = 'M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z';

  const PROJECTS = [];

  const STACK = [];

  const I18N = {
    en: {
      skip: 'Skip to content',
      navAbout: 'About', navMembers: 'Members', navProjects: 'Projects',
      eyebrow: 'Toucan · our shared workshop',
      heroA1: 'From rough sketch', heroA2: 'to production.',
      heroSub: 'A place to turn our ideas into working software, and take them from a rough sketch all the way to production.',
      ctaProjects: 'See projects',
      intro: "We're a flock of friends who study systems and spend our free time building things nobody asked for (but we definitely use).",
      findTitle: "What you'll find here",
      find: [
        { n: '01', title: 'Personal projects', body: 'Half-finished ideas, finished ideas, and ideas that seemed great at 3 AM.' },
        { n: '02', title: 'Everyday apps', body: 'Tools we build to make our own lives easier.' },
        { n: '03', title: 'Our own server', body: 'Where our services and databases live, and where we deploy and break things in production (on purpose, mostly).' },
      ],
      flock: 'The flock', personalLower: 'personal', jointLower: 'joint', seeProjects: 'Projects',
      projectsTitle: 'What we’ve built', all: 'All', personal: 'Personal', joint: 'Joint', everyone: 'Everyone',
      prod: 'Production', wip: 'In progress', archived: 'Archived',
      screenshot: 'project screenshot',
      projectDesc: 'Short description of what it does and why we built it.',
      empty: 'Nothing here yet. But did you know a toucan’s beak can be up to a third of its body length, and works as a radiator to shed heat?',
      stackEmpty: 'Empty for now. But did you know toucans toss food to each other with their beaks? Teamwork, basically.',
      stackTitle: 'What we build with',
      contactTitle: 'Follow the flock.', contactSub: 'Everything we build lives in the org. Issues, PRs and bad ideas, welcome.',
      orgCta: 'GitHub organization', footer: 'two cans → toucan · built by the flock',
    },
    es: {
      skip: 'Saltar al contenido',
      navAbout: 'Nosotros', navMembers: 'Miembros', navProjects: 'Proyectos',
      eyebrow: 'Toucan · nuestro taller compartido',
      heroA1: 'Del boceto', heroA2: 'a producción.',
      heroSub: 'Un lugar para convertir nuestras ideas en software que funciona, y llevarlas desde un boceto hasta producción.',
      ctaProjects: 'Ver proyectos',
      intro: 'Somos una bandada de amigos que estudian sistemas y usan su tiempo libre para construir cosas que nadie pidió (pero que sí usamos).',
      findTitle: 'Qué vas a encontrar',
      find: [
        { n: '01', title: 'Proyectos personales', body: 'Ideas a medio terminar, ideas terminadas e ideas que parecían geniales a las 3 AM.' },
        { n: '02', title: 'Apps del día a día', body: 'Herramientas que hacemos para hacernos la vida más fácil.' },
        { n: '03', title: 'Nuestro propio servidor', body: 'Donde viven nuestros servicios y bases de datos, y donde deployamos y rompemos cosas en producción (a propósito, casi siempre).' },
      ],
      flock: 'La bandada', personalLower: 'personales', jointLower: 'en conjunto', seeProjects: 'Proyectos',
      projectsTitle: 'Lo que construimos', all: 'Todos', personal: 'Personal', joint: 'Conjunto', everyone: 'Todos',
      prod: 'En producción', wip: 'En progreso', archived: 'Archivado',
      screenshot: 'captura del proyecto',
      projectDesc: 'Descripción corta de qué hace y por qué lo construimos.',
      empty: 'Nada por acá todavía. Pero ¿sabías que el pico de un tucán puede medir hasta un tercio de su cuerpo y funciona como radiador para liberar calor?',
      stackEmpty: 'Vacío por ahora. Pero ¿sabías que los tucanes se pasan comida de pico a pico? Trabajo en equipo, básicamente.',
      stackTitle: 'Con qué construimos',
      contactTitle: 'Seguí a la bandada.', contactSub: 'Todo lo que hacemos vive en la orga. Issues, PRs e ideas malas, bienvenidos.',
      orgCta: 'Organización en GitHub', footer: 'two cans → toucan · hecho por la bandada',
    },
  };

  const state = { lang: 'en', member: 'all', type: 'all', menu: false };

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const avatar = handle => `https://github.com/${encodeURIComponent(handle)}.png?size=120`;
  const colorOf = handle => MEMBERS.find(m => m.handle === handle).color;

  function el(tag, props = {}, ...children) {
    const node = document.createElement(tag);
    for (const [key, value] of Object.entries(props)) {
      if (value == null) continue;
      if (key === 'className') node.className = value;
      else if (key === 'text') node.textContent = value;
      else if (key === 'attrs') Object.entries(value).forEach(([k, v]) => node.setAttribute(k, v));
      else if (key === 'vars') Object.entries(value).forEach(([k, v]) => node.style.setProperty(k, v));
      else if (key.startsWith('on')) node.addEventListener(key.slice(2), value);
      else node[key] = value;
    }
    node.append(...children.filter(Boolean));
    return node;
  }

  function avatarImg(handle, size, className) {
    return el('img', {
      className, src: avatar(handle), alt: '', loading: 'lazy', decoding: 'async',
      attrs: { width: size, height: size },
    });
  }

  const t = () => I18N[state.lang];

  function applyStaticText() {
    document.documentElement.lang = state.lang;
    $$('[data-i18n]').forEach(node => {
      const value = t()[node.dataset.i18n];
      if (typeof value === 'string') node.textContent = value;
    });
    $$('.lang [data-lang]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === state.lang)));

    $('#find-list').replaceChildren(...t().find.map(f =>
      el('li', { className: 'find__item' },
        el('span', { className: 'find__n', text: f.n }),
        el('div', { className: 'find__body' }, el('strong', { text: f.title }), el('span', { text: f.body })))));
  }

  function renderMembers() {
    const countBy = (m, type) => PROJECTS.filter(p => p.type === type && p.who.includes(m.handle)).length;
    $('#members-grid').replaceChildren(...MEMBERS.map(m =>
      el('button', {
        className: 'member', vars: { '--member-color': m.color }, attrs: { type: 'button' },
        onclick: () => { state.member = m.handle; state.type = 'all'; renderProjects(); scrollToProjects(); },
      },
      el('div', { className: 'member__head' },
        avatarImg(m.handle, 64, 'member__avatar'),
        el('div', { className: 'member__id' },
          el('span', { className: 'member__handle', text: '@' + m.handle }),
          el('span', { className: 'member__url', text: 'github.com/' + m.handle }))),
      el('div', { className: 'member__stats' },
        el('span', {}, el('b', { text: String(countBy(m, 'personal')) }), ' ' + t().personalLower),
        el('span', {}, el('b', { text: String(countBy(m, 'joint')) }), ' ' + t().jointLower),
        el('span', { className: 'member__more', text: t().seeProjects + ' →' })))));

    const icon = (label, href, path) => el('a', {
      className: 'contact__icon', href, target: '_blank', rel: 'noopener noreferrer', attrs: { 'aria-label': label },
      innerHTML: `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="${path}"/></svg>`,
    });
    $('#contact-list').replaceChildren(...MEMBERS.map(m =>
      el('div', { className: 'contact__row' },
        avatarImg(m.handle, 36),
        el('strong', { text: m.name }),
        el('span', { className: 'contact__icons' },
          icon(`${m.name} on GitHub`, `https://github.com/${m.handle}`, GITHUB_PATH),
          icon(`${m.name} on LinkedIn`, m.linkedin, LINKEDIN_PATH)))));
  }

  function renderStack() {
    const items = STACK.length
      ? STACK.map(s => el('li', { className: 'stack__item' }, el('strong', { text: s.name }), el('span', { text: s.kind })))
      : [el('li', { className: 'stack__item stack__item--empty', attrs: { 'aria-hidden': 'true' } })];
    $('#stack-grid').replaceChildren(...items);
    $('#stack-empty').hidden = STACK.length > 0;
  }

  function renderProjects() {
    const { member, type } = state;
    const inType = p => type === 'all' || p.type === type;
    const visible = PROJECTS.filter(p => inType(p) && (member === 'all' || p.who.includes(member)));

    $('#type-filter').replaceChildren(...[['all', t().all], ['personal', t().personal], ['joint', t().joint]].map(([key, label]) =>
      el('button', {
        text: label, attrs: { type: 'button', 'aria-pressed': String(type === key) },
        onclick: () => { state.type = key; renderProjects(); },
      })));

    const chips = [
      { key: 'all', label: t().everyone, count: PROJECTS.filter(inType).length },
      ...MEMBERS.map(m => ({
        key: m.handle, label: '@' + m.handle, handle: m.handle,
        count: PROJECTS.filter(p => inType(p) && p.who.includes(m.handle)).length,
      })),
    ];
    $('#member-filter').replaceChildren(...chips.map(c =>
      el('button', {
        className: 'chip', attrs: { type: 'button', 'aria-pressed': String(member === c.key) },
        onclick: () => { state.member = c.key; renderProjects(); },
      },
      c.handle ? avatarImg(c.handle, 26) : el('span', { className: 'chip__all', text: '✱', attrs: { 'aria-hidden': 'true' } }),
      c.label,
      el('span', { className: 'chip__count', text: String(c.count) }))));

    $('#projects-grid').replaceChildren(...visible.map(p =>
      el('article', { className: 'card' },
        el('div', { className: 'card__shot' },
          el('span', { className: 'card__shot-label', text: t().screenshot }),
          el('span', { className: `badge badge--type badge--${p.type}`, text: t()[p.type] }),
          el('span', { className: `badge badge--status status-${p.status}` }, el('i'), t()[p.status])),
        el('div', { className: 'card__body' },
          el('span', { className: 'card__name', text: p.name }),
          el('p', { className: 'card__desc', text: t().projectDesc }),
          el('ul', { className: 'tags' }, ...p.tags.map(tag => el('li', { text: tag }))),
          el('ul', { className: 'people' }, ...p.who.map(h =>
            el('li', { vars: { '--member-color': colorOf(h) } }, avatarImg(h, 20), '@' + h)))))));

    $('#projects-empty').hidden = visible.length > 0;
  }

  function renderAll() {
    applyStaticText();
    renderMembers();
    renderProjects();
  }

  function scrollToProjects() {
    const target = $('#projects');
    const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-offset'), 10) || 70;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
  }

  function setLang(lang) {
    if (!I18N[lang] || lang === state.lang) return;
    state.lang = lang;
    try { localStorage.setItem('lang', lang); } catch (_) {}
    renderAll();
  }

  function setMenu(open) {
    state.menu = open;
    const toggle = $('#menu-toggle');
    $('#menu').hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? '✕' : '☰';
  }

  function bindNav() {
    $$('.lang [data-lang]').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));
    $('#menu-toggle').addEventListener('click', () => setMenu(!state.menu));
    $$('#menu a').forEach(a => a.addEventListener('click', () => setMenu(false)));
    window.matchMedia('(min-width: 760px)').addEventListener('change', e => { if (e.matches) setMenu(false); });
  }

  const FRONDS = {
    left: [
      { top: 12, rot: 18, len: 360, start: 0.02, mobile: { top: 12, rot: 6 } },
      { top: 40, rot: -12, len: 440, start: 0.16 },
      { top: 68, rot: -28, len: 340, start: 0.34, mobile: { top: 58, rot: -14 } },
      { top: 90, rot: -48, len: 300, start: 0.52 },
    ],
    right: [
      { top: 24, rot: 10, len: 400, start: 0.08, mobile: { top: 35, rot: -6 } },
      { top: 54, rot: -6, len: 460, start: 0.26 },
      { top: 82, rot: -34, len: 320, start: 0.44, mobile: { top: 84, rot: -26 } },
    ],
  };
  const SVG_NS = 'http://www.w3.org/2000/svg';
  const frondEls = [];

  function frondPaths(len) {
    const P1 = [len * 0.5, -len * 0.14], P2 = [len, len * 0.26];
    const pt = u => [2 * (1 - u) * u * P1[0] + u * u * P2[0], 2 * (1 - u) * u * P1[1] + u * u * P2[1]];
    const tan = u => {
      const x = 2 * (1 - u) * P1[0] + 2 * u * (P2[0] - P1[0]);
      const y = 2 * (1 - u) * P1[1] + 2 * u * (P2[1] - P1[1]);
      const m = Math.hypot(x, y);
      return [x / m, y / m];
    };
    const f = n => n.toFixed(1);
    const paths = [`M0 0 Q${f(P1[0])} ${f(P1[1])} ${f(P2[0])} ${f(P2[1])}`];
    const N = 24, maxL = len * 0.34;
    for (let i = 0; i < N; i++) {
      const u = 0.07 + (i / (N - 1)) * 0.9;
      const [px, py] = pt(u), [tx, ty] = tan(u);
      const L = maxL * Math.pow(Math.sin(Math.PI * (0.12 + u * 0.85)), 0.7) * (1 - 0.35 * u);
      for (const s of [1, -1]) {
        const a = s * 0.95;
        let dx = tx * Math.cos(a) - ty * Math.sin(a), dy = tx * Math.sin(a) + ty * Math.cos(a);
        dx *= 0.72; dy = dy * 0.72 + 0.32;
        const m = Math.hypot(dx, dy); dx /= m; dy /= m;
        const ex = px + dx * L, ey = py + dy * L, w = L * 0.11;
        const mx = px + dx * L * 0.5, my = py + dy * L * 0.5;
        paths.push(`M${f(px)} ${f(py)} Q${f(mx - dy * w)} ${f(my + dx * w)} ${f(ex)} ${f(ey)} Q${f(mx + dy * w)} ${f(my - dx * w)} ${f(px)} ${f(py)}`);
      }
    }
    return paths;
  }

  function buildFronds() {
    const layer = $('#leaves');
    const side = (list, className) => {
      const wrap = el('div', { className: `leaves__side ${className}` });
      list.forEach(fr => {
        const H = fr.len * 0.7;
        const svg = document.createElementNS(SVG_NS, 'svg');
        svg.setAttribute('class', 'frond');
        svg.setAttribute('viewBox', `-10 ${-H} ${fr.len + 20} ${H * 2}`);
        svg.setAttribute('width', fr.len + 20);
        svg.setAttribute('height', H * 2);
        svg.style.top = fr.top + '%';
        svg.style.transform = `translateY(-50%) rotate(${fr.rot}deg)`;
        const g = document.createElementNS(SVG_NS, 'g');
        g.setAttribute('fill', 'none');
        g.setAttribute('stroke', '#8a8e9c');
        g.setAttribute('stroke-linejoin', 'round');
        g.setAttribute('stroke-linecap', 'round');
        frondPaths(fr.len).forEach((d, j) => {
          const path = document.createElementNS(SVG_NS, 'path');
          path.setAttribute('d', d);
          path.setAttribute('stroke-width', j === 0 ? 2 : 1.2);
          g.appendChild(path);
        });
        svg.appendChild(g);
        wrap.appendChild(svg);
        frondEls.push({ svg, fr });
      });
      return wrap;
    };
    layer.append(side(FRONDS.left, ''), side(FRONDS.right, 'leaves__side--right'));
  }

  let frame = null;
  function layoutFronds() {
    frame = null;
    const narrow = window.innerWidth < 760;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const p = max > 0 ? window.scrollY / max : 0;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    frondEls.forEach(({ svg, fr }) => {
      if (narrow) {
        const m = fr.mobile;
        svg.style.transition = 'none';
        svg.style.display = m ? 'block' : 'none';
        if (!m) return;
        svg.style.top = m.top + '%';
        svg.style.opacity = '0.1';
        svg.style.transform = `translateY(-50%) rotate(${m.rot}deg) scale(.8)`;
        return;
      }
      svg.style.display = 'block';
      svg.style.top = fr.top + '%';
      svg.style.transition = reduced ? 'none' : 'opacity .5s ease-out, transform .9s cubic-bezier(.2,.7,.2,1)';
      const e = Math.max(0, Math.min(1, (p - fr.start) * 7));
      const rot = fr.rot + (1 - e) * -25 + Math.sin(p * 6 + fr.start * 10) * 3;
      svg.style.opacity = (e * 0.22).toFixed(3);
      svg.style.transform = `translateY(calc(-50% - ${(p * 60).toFixed(1)}px)) rotate(${rot.toFixed(2)}deg) scale(${(0.6 + 0.4 * e).toFixed(3)})`;
    });
  }
  const scheduleLayout = () => { if (!frame) frame = requestAnimationFrame(layoutFronds); };

  function setupReveal() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    const targets = $$('#about > *, #members > div > *, #projects > *, #stack > div > *, #contact > div > *');
    const io = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }), { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    targets.forEach(node => {
      const index = Array.prototype.indexOf.call(node.parentNode.children, node);
      node.style.setProperty('--reveal-delay', `${(index * 0.08).toFixed(2)}s`);
      node.classList.add('reveal');
      io.observe(node);
    });
  }

  function init() {
    try {
      const saved = localStorage.getItem('lang');
      if (I18N[saved]) state.lang = saved;
    } catch (_) {}

    buildFronds();
    renderStack();
    renderAll();
    bindNav();
    layoutFronds();
    setupReveal();

    window.addEventListener('scroll', scheduleLayout, { passive: true });
    window.addEventListener('resize', scheduleLayout);
  }

  init();
})();
