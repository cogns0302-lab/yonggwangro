/* 교사개조 용광로: 화면을 그리는 코드. 내용은 data.js 에서만 고칩니다. */
(() => {
  'use strict';

  const SITE = window.SITE;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const hero = $('#hero');
  const main = $('#main');
  const gnb = $('#gnb');
  const sheet = $('#sheet');

  const EXT = '<svg class="ext" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M6.5 2.5h-4v11h11v-4M9.5 2.5h4v4M13.5 2.5 7 9" fill="none" stroke="currentColor" stroke-width="1.75"/></svg><span class="visually-hidden"> 새 창으로 열림</span>';
  const EXT_IN = '⁠' + EXT;
  const NEW_TAB = ' target="_blank" rel="noopener noreferrer"';

  /* 메뉴의 상태: 바깥 주소(ext), 사이트 안 페이지(page), 준비 중(pending) */
  const kind = (m) => (m.url ? 'ext' : m.page && PAGES[m.page] ? 'page' : 'pending');
  const menuHref = (d, m) => (m.url ? m.url : `#/${d.id}/${m.id}`);

  /* 이름을 붉은 타일로 한 자씩 쓴다. 읽어 주는 글자는 따로 둔다 */
  const tiles = (text) => [...String(text).normalize('NFC')].filter((ch) => ch.trim()).map((ch) => `<span class="tile">${esc(ch)}</span>`).join('');
  const plate = (text) => `<span class="visually-hidden">${esc(text)}</span><span class="plate" aria-hidden="true">${tiles(text)}</span>`;

  function menuItem(d, m, cls) {
    const k = kind(m);
    if (k === 'pending') return `<span class="${cls} is-pending">${esc(m.name)}<span class="visually-hidden"> (준비 중)</span></span>`;
    if (k === 'ext') return `<a class="${cls}" href="${esc(m.url)}"${NEW_TAB}>${esc(m.name)}${EXT}</a>`;
    return `<a class="${cls}" href="${menuHref(d, m)}">${esc(m.name)}</a>`;
  }

  const MARK = '<svg class="mark" aria-hidden="true" focusable="false"><use href="#furnace"/></svg>';

  /* '부서/메뉴' 로 메뉴를 찾는다 */
  const find = (to) => {
    const [dId, mId] = String(to).split('/');
    const d = SITE.depts.find((x) => x.id === dId);
    const m = d && d.menus.find((x) => x.id === mId);
    return d && m ? { d, m } : null;
  };

  /* 메뉴 하나를 링크로. 바깥 주소면 새 창, 준비 중이면 링크 없이 */
  const linkTo = (d, m, cls, inner) => {
    const k = kind(m);
    if (k === 'pending') return `<span class="${cls} is-pending">${inner}<span class="visually-hidden"> (준비 중)</span></span>`;
    if (k === 'ext') return `<a class="${cls}" href="${esc(m.url)}"${NEW_TAB}>${inner}${EXT}</a>`;
    return `<a class="${cls}" href="${menuHref(d, m)}">${inner}</a>`;
  };

  /* 칸이 없으면 건너뛴다. 옛 index.html 과 새 app.js 가 섞여도 화면 전체가 멈추지 않게 */
  const fill = (sel, html) => { const el = $(sel); if (el) el.innerHTML = html; };

  /* ───── 움직임: 화면에 들어오면 나타나고, 숫자는 0부터 올라간다. 움직임 줄이기 설정이면 바로 보인다 ───── */
  const REDUCE = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function countUp(el) {
    const text = el.textContent;
    const m = text.match(/\d[\d,]*(\.\d+)?/);
    if (!m || REDUCE()) return;
    const target = parseFloat(m[0].replace(/,/g, ''));
    const dec = m[1] ? m[1].length - 1 : 0;
    const fmt = (v) => (m[0].includes(',') ? v.toLocaleString('ko-KR', { minimumFractionDigits: dec, maximumFractionDigits: dec }) : v.toFixed(dec));
    const t0 = performance.now();
    const step = (t) => {
      const p = Math.min(1, (t - t0) / 900);
      el.textContent = p < 1 ? text.replace(m[0], fmt(target * (1 - (1 - p) ** 3))) : text;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  let watcher = null;
  function motion(root = document) {
    const els = $$('[data-reveal]:not(.is-in)', root);
    const reveal = (el) => {
      el.classList.add('is-in');
      $$('[data-count]', el).filter((c) => c.closest('[data-reveal]') === el).forEach(countUp);
    };
    if (REDUCE() || !('IntersectionObserver' in window)) { els.forEach((el) => el.classList.add('is-in')); return; }
    if (!watcher) {
      watcher = new IntersectionObserver((entries) => entries.forEach((en) => {
        if (en.isIntersecting) { watcher.unobserve(en.target); reveal(en.target); }
      }), { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
    }
    els.forEach((el) => watcher.observe(el));
  }

  /* ───── 머리, 전체 메뉴, 바닥글 ───── */

  function renderChrome() {
    gnb.style.setProperty('--cols', SITE.depts.length);
    fill('#gnb-list', SITE.depts.map((d) => `
      <li class="gnb__item">
        <a class="gnb__link" href="#/${d.id}" data-dept="${d.id}">${esc(d.name)}</a>
        <ul class="gnb__sub">${d.menus.map((m) => `<li>${menuItem(d, m, 'gnb__sublink')}</li>`).join('')}</ul>
      </li>`).join(''));

    fill('#sheet-list', SITE.depts.map((d) => `
      <li class="sheet__dept">
        <a class="sheet__name" href="#/${d.id}">${esc(d.name)}</a>
        <ul class="sheet__menus">${d.menus.map((m) => `<li>${menuItem(d, m, 'sheet__menu')}</li>`).join('')}</ul>
      </li>`).join(''));

    fill('#foot-depts', SITE.depts.map((d) => `<li><a href="#/${d.id}">${esc(d.name)}</a></li>`).join(''));

    /* 첫 화면 오른쪽: 다른 주소에 있는 부서 웹앱 */
    fill('#apps-list', SITE.depts.flatMap((d) => d.menus.filter((m) => kind(m) === 'ext').map((m) => `
      <li><a class="apps__link" href="${esc(m.url)}"${NEW_TAB}><span class="apps__name">${esc(m.name)}${EXT}</span><span class="apps__dept">${esc(d.name)}</span></a></li>`)).join(''));

    $$('[data-find]').forEach((box, i) => renderFind(box, i));
  }

  /* ───── 메뉴 찾기: 부서, 메뉴 이름, 설명에서 찾는다 ───── */

  const INDEX = SITE.depts.flatMap((d) => d.menus.map((m) => ({ d, m, text: `${d.name} ${m.name} ${m.desc || ''}`.toLowerCase().replace(/\s+/g, '') })));

  function renderFind(box, i) {
    const id = `find-${i}`;
    box.innerHTML = `
      <form class="find" role="search" action="#" data-find-form>
        <label class="visually-hidden" for="${id}">메뉴 찾기</label>
        <input class="find__input" id="${id}" type="search" placeholder="메뉴를 찾아보세요. 예: 자동차, 노량진" autocomplete="off" aria-controls="${id}-list" aria-describedby="${id}-count">
        <button class="find__go" type="submit"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" stroke-width="2.25"/><path d="M15.5 15.5 21 21" stroke="currentColor" stroke-width="2.25"/></svg><span class="visually-hidden">찾기</span></button>
        <div class="find__pop" hidden>
          <p class="find__count" id="${id}-count" role="status"></p>
          <ul class="find__list" id="${id}-list"></ul>
        </div>
      </form>`;

    const form = $('[data-find-form]', box);
    const input = $('.find__input', box);
    const pop = $('.find__pop', box);
    const list = $('.find__list', box);
    const count = $('.find__count', box);

    const update = () => {
      const q = input.value.toLowerCase().replace(/\s+/g, '');
      if (!q) { pop.hidden = true; count.textContent = ''; return; }
      const hits = INDEX.filter((x) => x.text.includes(q)).slice(0, 8);
      count.textContent = hits.length ? `${hits.length}개 찾음` : '맞는 메뉴가 없습니다.';
      list.innerHTML = hits.map(({ d, m }) => `<li>${linkTo(d, m, 'find__hit', `<span class="find__dept">${esc(d.name)}</span><span class="find__name">${esc(m.name)}</span>`)}</li>`).join('');
      pop.hidden = false;
    };
    input.addEventListener('input', update);
    input.addEventListener('focus', update);
    input.addEventListener('keydown', (e) => { if (e.key === 'Escape') { input.value = ''; update(); } });
    /* 엔터: 첫 번째로 찾은 열린 메뉴로 간다 */
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const a = $('a.find__hit', list);
      if (a) a.click();
    });
    form.addEventListener('focusout', (e) => { if (!form.contains(e.relatedTarget)) pop.hidden = true; });
    list.addEventListener('click', (e) => { if (e.target.closest('a')) { input.value = ''; pop.hidden = true; } });
  }

  /* 넓은 화면: 부서에 마우스를 올리거나 키보드로 들어오면 전체 메뉴가 한 번에 펼쳐진다 */
  function bindNav() {
    const bg = $('#gnb-bg');
    const open = () => {
      bg.style.height = `${Math.max(0, ...$$('.gnb__sub', gnb).map((s) => s.offsetHeight))}px`;
      gnb.classList.add('is-open');
    };
    const close = () => gnb.classList.remove('is-open');
    /* 마우스로 누른 링크에 남은 초점 때문에 메뉴가 열려 있지 않도록, 키보드로 들어온 초점만 메뉴를 연다 */
    let byKeyboard = false;
    document.addEventListener('keydown', (e) => { if (e.key === 'Tab') byKeyboard = true; }, true);
    document.addEventListener('pointerdown', () => { byKeyboard = false; }, true);
    gnb.addEventListener('pointerenter', (e) => { if (e.pointerType !== 'touch') open(); });
    gnb.addEventListener('pointerleave', close);
    gnb.addEventListener('focusin', () => { if (byKeyboard) open(); });
    gnb.addEventListener('focusout', (e) => { if (!gnb.contains(e.relatedTarget)) close(); });
    gnb.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
    gnb.addEventListener('click', (e) => { if (e.target.closest('a')) close(); });
  }

  /* 전체메뉴 단추(좁은 화면은 머리 오른쪽, 넓은 화면은 부서 줄 오른쪽)가 전체 메뉴를 연다 */
  function bindSheet() {
    const openSheet = () => {
      if (typeof sheet.showModal === 'function') sheet.showModal();
      else sheet.setAttribute('open', '');
    };
    $('#menu-btn').addEventListener('click', openSheet);
    $('#all-btn').addEventListener('click', openSheet);
    const close = () => {
      if (typeof sheet.close === 'function') sheet.close();
      else sheet.removeAttribute('open');
    };
    $('#sheet-close').addEventListener('click', close);
    sheet.addEventListener('click', (e) => { if (e.target.closest('a')) close(); });
  }

  /* 로고: 이미 첫 화면이면 맨 위로 올린다 */
  function bindBrand() {
    $('.top .brand').addEventListener('click', () => {
      if (!hero.hidden) window.scrollTo({ top: 0 });
    });
  }

  /* ───── 첫 화면 ───── */

  /* 자주 찾는 메뉴의 그림 (24 x 24 선 그림) */
  const ICONS = {
    org: '<rect x="9" y="2.5" width="6" height="5"/><rect x="2.5" y="16.5" width="5" height="5"/><rect x="9.5" y="16.5" width="5" height="5"/><rect x="16.5" y="16.5" width="5" height="5"/><path d="M12 7.5v9M5 16.5V12h14v4.5"/>',
    coin: '<rect x="4.5" y="2.5" width="15" height="19"/><path d="M8 6.5h8v3.5H8zM8 14h1.5M11.25 14h1.5M14.5 14h1.5M8 17.5h1.5M11.25 17.5h1.5M14.5 17.5h1.5"/>',
    pin: '<path d="M12 21.5s-7-6.3-7-11.8a7 7 0 0 1 14 0c0 5.5-7 11.8-7 11.8z"/><circle cx="12" cy="9.5" r="2.5"/>',
    board: '<rect x="2.5" y="3.5" width="19" height="12.5"/><path d="M8 21.5l4-5.5 4 5.5M6.5 8h7M6.5 11.5h4.5"/>',
    pen: '<path d="M16 3.5l4.5 4.5L8.5 20H4v-4.5z"/><path d="M13.5 6l4.5 4.5"/>',
    car: '<path d="M2.5 16.5v-4.5l2.5-5.5h14l2.5 5.5v4.5z"/><path d="M2.5 12h19"/><circle cx="7" cy="17.5" r="2"/><circle cx="17" cy="17.5" r="2"/>',
    box: '<path d="M1.5 5.5h12.5v11H1.5zM14 9h4.5l4 4v3.5H14"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>',
    case: '<rect x="2.5" y="7" width="19" height="13.5"/><path d="M8.5 7V3.5h7V7M2.5 12.5h19"/>',
  };
  const icon = (name) => `<svg class="quick__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${ICONS[name] || ICONS.org}</svg>`;

  /* 자주 찾는 메뉴: 동그라미 아이콘 한 줄 */
  function quick() {
    const items = (SITE.quick || []).map((q, i) => {
      const inner = `<span class="quick__ring">${icon(q.icon)}</span><span class="quick__name">${esc(q.name)}</span>`;
      const li = `<li data-reveal style="--i:${i}">`;
      if (q.href) return `${li}<a class="quick__item" href="${esc(q.href)}">${inner}</a></li>`;
      const hit = find(q.to);
      return hit ? `${li}${linkTo(hit.d, hit.m, 'quick__item', inner)}</li>` : '';
    }).join('');
    return `
      <section class="quick" aria-labelledby="quick-h">
        <div class="container">
          <div class="quick__box">
            <h2 class="quick__title" id="quick-h">자주 찾는 메뉴</h2>
            <ul class="quick__list">${items}</ul>
          </div>
        </div>
      </section>`;
  }

  /* 조직도: 맨 위 용광로, 줄기 양옆 작은 부서, 맨 아래 큰 부서 카드 */
  function org() {
    const byId = (id) => SITE.depts.find((d) => d.id === id);
    const cfg = SITE.org || {};
    const side = (cfg.side || []).map(byId).filter(Boolean);
    const placed = new Set(side.map((d) => d.id));
    const main = [...(cfg.main || []).map(byId).filter(Boolean), ...SITE.depts.filter((d) => !placed.has(d.id) && !(cfg.main || []).includes(d.id))];

    const menuLi = (d, m, cls) => `<li>${linkTo(d, m, cls, esc(m.name))}</li>`;

    const branches = side.map((d, i) => `
      <li class="org__branch org__branch--${i % 2 ? 'r' : 'l'}" data-reveal style="--i:${i + 2}">
        <div class="org__box">
          <h3 class="org__boxname"><a href="#/${d.id}">${esc(d.name)}</a></h3>
          <ul class="org__chips">${d.menus.map((m) => menuLi(d, m, 'org__chip')).join('')}</ul>
        </div>
      </li>`).join('');

    const units = main.map((d, i) => `
      <li class="org__unit" data-reveal style="--i:${i + 6}">
        <h3 class="org__head"><a href="#/${d.id}">${esc(d.name)}</a></h3>
        <div class="org__body">
          <p class="org__desc">${esc(d.desc)}</p>
          <ul class="org__list">${d.menus.map((m) => menuLi(d, m, 'org__item')).join('')}</ul>
        </div>
      </li>`).join('');

    return `
      <section class="orgs" id="org" aria-labelledby="org-h">
        <div class="container">
          <div class="sec-head">
            <h2 id="org-h">조직도</h2>
            <p class="sec-head__note">부서 이름을 누르면 부서 홈으로, 메뉴를 누르면 바로 열립니다. 흐린 메뉴는 준비 중입니다.</p>
          </div>
          <div class="org" data-reveal style="--n:${main.length}">
            <div class="org__top">
              <div class="org__root">${MARK}<span class="org__rootname">${esc(cfg.top || SITE.name)}</span></div>
            </div>
            <ul class="org__side">${branches}</ul>
            <ul class="org__main">${units}</ul>
          </div>
        </div>
      </section>`;
  }

  function viewHome() {
    return quick() + org();
  }

  /* ───── 부서 페이지 ───── */

  const crumbs = (items) => `<nav aria-label="현재 위치"><ol class="crumbs">${items.map((it) => `<li>${it.href ? `<a href="${it.href}">${esc(it.name)}</a>` : `<span aria-current="page">${esc(it.name)}</span>`}</li>`).join('')}</ol></nav>`;

  function door(d, m) {
    const k = kind(m);
    const text = `<h2 class="door__name">${esc(m.name)}</h2><p class="door__desc">${esc(m.desc || '')}</p>`;
    if (k === 'pending') return `<li class="door door--pending" data-reveal><div class="door__row">${text}<span class="door__go">준비 중</span></div></li>`;
    if (k === 'ext') return `<li class="door" data-reveal><a class="door__row" href="${esc(m.url)}"${NEW_TAB}>${text}<span class="door__go">바로 열기${EXT}</span></a></li>`;
    return `<li class="door" data-reveal><a class="door__row" href="${menuHref(d, m)}">${text}<span class="door__go">들어가기</span></a></li>`;
  }

  /* 부서 페이지와 메뉴 페이지의 틀: 위 회색 띠(위치, 제목), 왼쪽 부서 메뉴, 오른쪽 본문 */
  function lnb(d, current) {
    const items = d.menus.map((m) => {
      const k = kind(m);
      if (k === 'pending') return `<li><span class="lnb__item is-pending">${esc(m.name)}<span class="visually-hidden"> (준비 중)</span></span></li>`;
      if (k === 'ext') return `<li><a class="lnb__item" href="${esc(m.url)}"${NEW_TAB}>${esc(m.name)}${EXT}</a></li>`;
      return `<li><a class="lnb__item" href="${menuHref(d, m)}"${current && m.id === current.id ? ' aria-current="page"' : ''}>${esc(m.name)}</a></li>`;
    }).join('');
    return `
      <nav class="lnb" aria-label="${esc(d.name)} 메뉴">
        <a class="lnb__head" href="#/${d.id}"${current ? '' : ' aria-current="page"'}>${esc(d.name)}<span class="lnb__home">부서 홈</span></a>
        <ul class="lnb__list">${items}</ul>
      </nav>`;
  }

  function frame(d, { trail, title, lede, body, current = null, data = false }) {
    return `
      <article class="page">
        <header class="band">
          <div class="container band__in">
            ${crumbs(trail)}
            <h1 class="page__title" id="page-h" tabindex="-1">${title}</h1>
            ${lede ? `<p class="page__lede">${esc(lede)}</p>` : ''}
          </div>
        </header>
        <div class="container sub">
          ${lnb(d, current)}
          <div class="sub__body"${data ? ' data-page' : ''}>${body}</div>
        </div>
      </article>`;
  }

  function viewDept(d) {
    const shut = d.menus.every((m) => kind(m) === 'pending');
    return frame(d, {
      trail: [{ name: '홈', href: '#/' }, { name: d.name }],
      title: plate(d.name),
      lede: d.desc,
      body: `
        <ul class="doors">${d.menus.map((m) => door(d, m)).join('')}</ul>
        ${shut ? '<div class="doors__empty"><p>이 부서는 아직 문을 열지 않았습니다. 조직도에서 열려 있는 곳부터 둘러보세요.</p><a class="btn" href="#org">조직도 보기</a></div>' : ''}`,
    });
  }

  /* ───── 메뉴 페이지 ───── */

  function viewPage(d, m) {
    const cfg = SITE.pages[m.page] || {};
    return frame(d, {
      trail: [{ name: '홈', href: '#/' }, { name: d.name, href: `#/${d.id}` }, { name: m.name }],
      title: esc(m.name),
      lede: cfg.lede || m.desc || '',
      body: PAGES[m.page].render(cfg),
      current: m,
      data: true,
    });
  }

  /* 임용부 > 1년 공부비용: 세 가지 길, 다섯 항목. 넣는 대로 1년 합계를 비교한다 */
  const cost = {
    render(cfg) {
      const per = (r) => `${r.per === 'month' ? '월' : '연'} ${cfg.unit}`;
      const head = cfg.paths.map((p) => `<th scope="col">${esc(p.name)}<small>${esc(p.note || '')}</small></th>`).join('');
      const body = cfg.rows.map((r) => `
        <tr>
          <th scope="row">${esc(r.name)}<small>${esc(per(r))}${r.note ? `, ${esc(r.note)}` : ''}</small></th>
          ${cfg.paths.map((p) => `<td><input class="cost__input" type="text" inputmode="decimal" autocomplete="off" name="${r.id}.${p.id}" aria-label="${esc(`${p.name} ${r.name}, ${per(r)}`)}"></td>`).join('')}
        </tr>`).join('');
      const foot = cfg.paths.map((p) => `<td><output class="cost__sum" data-sum="${p.id}">0</output></td>`).join('');
      const bars = cfg.paths.map((p) => `
        <li>
          <div class="bar__head"><span class="bar__name">${esc(p.name)}</span><span class="bar__total"><span data-total="${p.id}">0</span>${esc(cfg.unit)}</span></div>
          <div class="bar__track"><div class="bar__fill" data-fill="${p.id}"></div></div>
          <p class="bar__month">월 평균 <span data-month="${p.id}">0</span>${esc(cfg.unit)}</p>
        </li>`).join('');
      return `
        <div class="cost">
          <div>
            <table class="cost__table">
              <caption class="visually-hidden">${esc(cfg.paths.map((p) => p.name).join(', '))}의 1년 공부비용 비교표</caption>
              <thead><tr><th scope="col">항목</th>${head}</tr></thead>
              <tbody>${body}</tbody>
              <tfoot><tr><th scope="row">1년 합계<small>${esc(cfg.unit)}</small></th>${foot}</tr></tfoot>
            </table>
            <div class="cost__tools">
              <p class="cost__hint">넣은 값은 이 기기에만 저장됩니다.</p>
              <button class="btn btn--quiet" type="button" data-cost-reset>모두 지우기</button>
            </div>
            ${cfg.refs && cfg.refs.length ? `
            <section class="refs" aria-labelledby="refs-h">
              <h2 id="refs-h">칸을 채울 때 참고할 시세</h2>
              <ul class="refs__list">${cfg.refs.map((r) => `
                <li class="refs__item">
                  <span class="refs__row">${esc(r.row)}</span>
                  <span class="refs__figure">${esc(r.figure)}</span>
                  <span class="refs__text">${esc(r.text)} <a href="${esc(r.url)}"${NEW_TAB}>${esc(r.src)}${EXT_IN}</a></span>
                </li>`).join('')}</ul>
              <p class="refs__note">${esc([cfg.refsNote, cfg.checked].filter(Boolean).join(' '))}</p>
            </section>` : ''}
          </div>
          <section class="cost__result" aria-labelledby="cost-h">
            <h2 id="cost-h">1년이면 얼마</h2>
            <ul class="bars">${bars}</ul>
            <p class="cost__say" role="status" data-cost-say></p>
          </section>
        </div>`;
    },

    bind(root, cfg) {
      const KEY = 'yonggwangro.cost.v1';
      const inputs = $$('.cost__input', root);
      const say = $('[data-cost-say]', root);
      const reset = $('[data-cost-reset]', root);
      let undo = null;

      const read = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } };
      const write = (v) => { try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) { /* 저장이 막힌 브라우저에서는 계산만 한다 */ } };
      const values = () => Object.fromEntries(inputs.filter((i) => i.value !== '').map((i) => [i.name, i.value]));
      const num = (s) => { const n = parseFloat(s); return Number.isFinite(n) && n > 0 ? n : 0; };
      const fmt = (n) => (Math.round(n * 10) / 10).toLocaleString('ko-KR');

      const start = { ...(cfg.defaults || {}), ...read() };
      inputs.forEach((i) => { if (start[i.name] != null) i.value = start[i.name]; });

      const update = () => {
        const totals = cfg.paths.map((p) => cfg.rows.reduce((sum, r) => sum + num($(`[name="${r.id}.${p.id}"]`, root).value) * (r.per === 'month' ? 12 : 1), 0));
        const max = Math.max(...totals);
        cfg.paths.forEach((p, i) => {
          $(`[data-sum="${p.id}"]`, root).textContent = fmt(totals[i]);
          $(`[data-total="${p.id}"]`, root).textContent = fmt(totals[i]);
          $(`[data-month="${p.id}"]`, root).textContent = fmt(totals[i] / 12);
          $(`[data-fill="${p.id}"]`, root).style.setProperty('--v', max ? (totals[i] / max).toFixed(4) : '0');
        });

        const filled = cfg.paths.map((p, i) => ({ name: p.name, total: totals[i] })).filter((x) => x.total > 0);
        if (filled.length < 2) {
          say.textContent = '두 가지 길 이상 채우면 1년 비용 차이를 알려 드립니다.';
        } else {
          const lo = filled.reduce((a, b) => (b.total < a.total ? b : a));
          const hi = filled.reduce((a, b) => (b.total > a.total ? b : a));
          say.textContent = lo.total === hi.total
            ? '채운 길의 1년 비용이 같습니다.'
            : `가장 적게 드는 길은 ${lo.name}, 가장 많이 드는 길은 ${hi.name}입니다. 1년에 ${fmt(hi.total - lo.total)}${cfg.unit} 차이가 납니다.`;
        }
        reset.disabled = !undo && inputs.every((i) => i.value === '');
      };

      root.addEventListener('input', (e) => {
        if (!e.target.matches('.cost__input')) return;
        const clean = e.target.value.replace(/[^\d.]/g, '').replace(/(\..*)\./g, '$1');
        if (clean !== e.target.value) e.target.value = clean;
        if (undo) { undo = null; reset.textContent = '모두 지우기'; }
        write(values());
        update();
      });

      /* 지우기는 한 번 되돌릴 수 있다 */
      reset.addEventListener('click', () => {
        if (undo) {
          inputs.forEach((i) => { i.value = undo[i.name] != null ? undo[i.name] : ''; });
          undo = null;
          reset.textContent = '모두 지우기';
        } else {
          undo = values();
          inputs.forEach((i) => { i.value = ''; });
          reset.textContent = '지운 값 되돌리기';
        }
        write(values());
        update();
      });

      update();
    },
  };

  /* 임용부 > 노량진: 항목마다 네이버 지도 검색으로 연결한다 */
  const noryangjin = {
    render(cfg) {
      const naver = (q) => `https://map.naver.com/p/search/${encodeURIComponent(q)}`;
      return `<ul class="spots">${cfg.spots.map((s) => `
        <li class="spot" data-reveal>
          <h2 class="spot__name">${esc(s.name)}</h2>
          <div class="spot__links">${s.links.map((l) => (l.naver
            ? `<a class="btn btn--quiet" href="${esc(naver(l.naver))}"${NEW_TAB}>${esc(l.label)}${EXT}</a>`
            : `<a class="btn btn--quiet" href="#/${esc(l.page)}">${esc(l.label)}</a>`)).join('')}</div>
          ${s.list && s.list.length ? `<ul class="spot__list">${s.list.map((it) => `<li><b>${esc(it.name)}</b>${it.note ? `<span>${esc(it.note)}</span>` : ''}</li>`).join('')}${s.source ? `<li class="spot__src"><a href="${esc(s.source.url)}"${NEW_TAB}>${esc(s.source.name)}${EXT_IN}</a></li>` : ''}</ul>` : ''}
        </li>`).join('')}</ul>`;
    },
  };

  const bullets = (arr) => `<ul class="list">${arr.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>`;

  /* 임용부 > 공부아이템: 종류별로 고른 물건과 네이버 검색 연결 */
  const items = {
    render(cfg) {
      const find = (q) => `https://search.naver.com/search.naver?query=${encodeURIComponent(q)}`;
      return cfg.groups.map((g, i) => `
        <section class="goods" aria-labelledby="goods-${i}" data-reveal>
          <div>
            <h2 id="goods-${i}">${esc(g.name)}</h2>
            ${g.note ? `<p class="goods__note">${esc(g.note)}</p>` : ''}
          </div>
          <ul class="goods__list">${g.goods.map((it) => `
            <li class="goods__item">
              <h3 class="goods__name">${esc(it.name)}</h3>
              <p class="goods__why">${esc(it.why)}</p>
              <a class="goods__go" href="${esc(find(it.q))}"${NEW_TAB}><span class="visually-hidden">${esc(it.name)} </span>네이버에서 찾아보기${EXT}</a>
            </li>`).join('')}</ul>
        </section>`).join('');
    },
  };

  /* 임용부 > 강사비교: 네 갈래(중등은 교과별), 고르는 기준, 학원 공식 사이트 */
  const instructors = {
    render(cfg) {
      const rows = cfg.rows || [];
      const roster = rows.length ? `
        <table class="roster">
          <caption class="visually-hidden">강사 비교표</caption>
          <thead><tr><th scope="col">갈래</th><th scope="col">강사</th><th scope="col">소속</th><th scope="col">강의 특징</th></tr></thead>
          <tbody>${rows.map((r) => `
            <tr>
              <td>${esc([r.group, r.subject].filter(Boolean).join(', '))}</td>
              <th scope="row">${r.url ? `<a href="${esc(r.url)}"${NEW_TAB}>${esc(r.name)}${EXT}</a>` : esc(r.name)}</th>
              <td>${esc(r.org || '')}</td>
              <td>${esc(r.note || '')}</td>
            </tr>`).join('')}</tbody>
        </table>` : '';
      const subjects = cfg.groups.filter((g) => g.subjects && g.subjects.length);
      return `
        <section aria-labelledby="ins-a">
          <h2 id="ins-a">네 갈래로 나눠 비교합니다</h2>
          <ul class="tracks">${cfg.groups.map((g, i) => `<li data-reveal style="--i:${i}">${esc(g.name)}</li>`).join('')}</ul>
          ${subjects.map((g) => `<p class="tracks__sub"><b>${esc(g.name)} 교과</b> ${esc(g.subjects.join(', '))}</p>`).join('')}
          ${roster}
        </section>
        <section aria-labelledby="ins-b">
          <h2 id="ins-b">강사를 고를 때 볼 것</h2>
          <dl class="points">${cfg.criteria.map((c) => `<div><dt>${esc(c.name)}</dt><dd>${esc(c.text)}</dd></div>`).join('')}</dl>
        </section>
        <section aria-labelledby="ins-c">
          <h2 id="ins-c">학원 공식 사이트</h2>
          <ul class="sites">${cfg.sites.map((s) => `<li><a class="btn btn--quiet" href="${esc(s.url)}"${NEW_TAB}>${esc(s.name)}${EXT}</a></li>`).join('')}</ul>
          <p class="fineprint">${esc(cfg.checked || '')}</p>
        </section>`;
    },
  };

  /* 신규교육부 > 자동차: 신차, 중고차(국산, 수입, 구입 팁, 구입 방법, 사기 예방). 자료는 cars.js */
  const CARS = window.CARS || { used: [], fresh: [], guides: {} };
  const num = (n) => Math.round(n).toLocaleString('ko-KR');
  const views = (v) => (v >= 1e8 ? `${(v / 1e8).toFixed(1)}억회` : `${num(v / 1e4)}만회`);
  const stars = (n) => `<span class="stars" role="img" aria-label="별점 5점 만점에 ${n}점"><span aria-hidden="true">☆☆☆☆☆</span><span class="stars__on" aria-hidden="true" style="--rate:${(n / 5).toFixed(2)}">★★★★★</span></span><span class="stars__num" aria-hidden="true">${n.toFixed(1)}</span>`;

  /* 중고차 사이트 주소 */
  const SITES = {
    encar: ({ t, mk, g, m }) => {
      const models = m.length === 1 ? `Model.${m[0]}.` : `(Or.${m.map((x) => `Model.${x}.`).join('_.')})`;
      const action = `(And.Hidden.N._.(C.CarType.${t}._.(C.Manufacturer.${mk}._.(C.ModelGroup.${g}._.${models}))))`;
      return `https://www.encar.com/dc/dc_carsearchlist.do?carType=${t === 'Y' ? 'kor' : 'for'}#!${encodeURIComponent(JSON.stringify({ action, toggle: {}, layer: '', sort: 'ModifiedDate', page: 1, limit: 20 }))}`;
    },
    kb: ({ mk, cl, car }) => `https://www.kbchachacha.com/public/search/main.kbc#!?page=1&makerCode=${mk}&classCode=${cl}&carCode=${car.join(',')}`,
    kcar: (q) => `https://www.kcar.com/bc/search/IntgSearchList?searchWord=${encodeURIComponent(q)}`,
    hey: ([b, g, m]) => `https://www.heydealer.com/market/cars?brand=${b}&model-group=${g}${m ? `&model=${m}` : ''}`,
    hc: (q) => `https://certified.hyundai.com/p/search/vehicle?srchType=srchWord&searchWord=${encodeURIComponent(q)}`,
  };

  /* 조건: 연봉은 차값이 연봉의 절반을 넘지 않는 선, 금액대는 중고차 사이트 가격 필터의 1천만원 단위 */
  const PAYS = [
    { name: '3천만원대', cap: 1750 }, { name: '4천만원대', cap: 2250 }, { name: '5천만원대', cap: 2750 }, { name: '6천만원 이상', cap: Infinity },
  ];
  const BANDS = [
    { name: '1천만원 이하', lo: 0, hi: 1000 }, { name: '1천~2천만원', lo: 1000, hi: 2000 }, { name: '2천~3천만원', lo: 2000, hi: 3000 },
    { name: '3천~4천만원', lo: 3000, hi: 4000 }, { name: '4천만원 이상', lo: 4000, hi: Infinity },
  ];
  const SORTS = { views: '조회순', pop: '인기순', price: '금액순' };
  const TABS = { kr: '국산차', im: '수입차', tips: '구입 팁', how: '구입 방법', scam: '사기 예방' };

  const play = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M8 5.5v13l10.5-6.5z"/></svg>';
  const vids = (list) => `<ul class="vids">${list.map((v) => `
    <li class="vid" data-reveal>
      <button class="vid__play" type="button" data-yt="${esc(v.id)}" data-title="${esc(v.t)}">
        <img src="https://i.ytimg.com/vi/${esc(v.id)}/mqdefault.jpg" alt="" loading="lazy" decoding="async" width="320" height="180">
        <span class="vid__icon">${play}</span>
        <span class="visually-hidden">${esc(v.t)} 영상 재생</span>
      </button>
      <p class="vid__title">${esc(v.t)}</p>
      <p class="vid__meta"><span>${esc(v.ch)}</span><span class="num">조회수 ${views(v.v)}</span><a href="https://www.youtube.com/watch?v=${esc(v.id)}"${NEW_TAB}>유튜브${EXT}</a></p>
    </li>`).join('')}</ul>`;

  const photo = (p, alt) => (p ? `
    <figure class="car__photo">
      <img src="${esc(p.src)}" alt="${esc(alt)}" loading="lazy" decoding="async" width="720" height="420">
      <figcaption><a href="${esc(p.page)}"${NEW_TAB}>사진 ${esc(p.by)}, ${esc(p.lic)}${p.edit ? `, ${esc(p.edit)}` : ''}${EXT}</a></figcaption>
    </figure>` : '');

  const pc = (pros, cons) => `
    <dl class="pick__pc">
      <div><dt>장점</dt><dd>${bullets(pros)}</dd></div>
      <div><dt>단점</dt><dd>${bullets(cons)}</dd></div>
    </dl>`;

  /* 신차 값의 몇 % 가 남았나: 도넛 */
  const ring = (pct) => `
    <figure class="ring" style="--p:${Math.min(100, pct)}">
      <div class="ring__dial">
        <svg viewBox="0 0 40 40" aria-hidden="true" focusable="false"><circle class="ring__bg" cx="20" cy="20" r="16"/><circle class="ring__fg" cx="20" cy="20" r="16" pathLength="100"/></svg>
        <b class="num" data-count>${pct}%</b>
      </div>
      <figcaption>신차 값 대비</figcaption>
    </figure>`;

  function usedCard(u, k) {
    const n = u.stat.encar + u.stat.kb;
    const pct = u.price.new ? Math.round((u.price.p50 / u.price.new) * 100) : 0;
    const L = u.links;
    const links = [
      ['엔카', SITES.encar(L.encar)], ['KB차차차', SITES.kb(L.kb)], ['케이카', SITES.kcar(L.kcar)], ['헤이딜러', SITES.hey(L.hey)],
      ...(L.hc ? [['현대 인증중고차', SITES.hc(L.hc)]] : []),
    ];
    return `
      <li class="car" data-key="${esc(u.key)}" data-reveal>
        ${photo(u.photo, `${u.name} ${u.gen}`)}
        <div class="car__body">
          <p class="car__kicker">${esc(u.size)} · ${esc(u.years)}</p>
          <h3 class="car__name">${esc(u.name)} <span class="car__gen">${esc(u.gen.replace(/^\S+\s/, ''))}</span></h3>
          <div class="car__rate"><p class="pick__stars">${stars(u.stars)}</p><p class="car__why">${esc(u.why)}</p></div>
          <p class="car__feature">${esc(u.feature)}</p>
          <div class="price" style="--lo:${(u.price.p25 / k.scale).toFixed(3)};--mid:${(u.price.p50 / k.scale).toFixed(3)};--hi:${(u.price.p75 / k.scale).toFixed(3)}">
            <p class="price__head"><span>시세 중앙값</span><b><span class="num" data-count>${num(u.price.p50)}</span>만원</b></p>
            <div class="price__track" aria-hidden="true"><span class="price__range"></span><span class="price__mid"></span></div>
            <p class="price__foot num">매물 절반이 ${num(u.price.p25)}~${num(u.price.p75)}만원 · ${u.yr[0]}~${u.yr[1]}년식 · 주행 ${num(u.km / 10000)}만km 안팎</p>
          </div>
          <div class="car__stats">
            <dl class="meters">
              <div><dt>조회</dt><dd><span class="meter" style="--v:${(u.stat.vpd / k.maxV).toFixed(3)}"></span><span class="num">하루 ${u.stat.vpd.toFixed(1)}회</span></dd></div>
              <div><dt>인기</dt><dd><span class="meter" style="--v:${(u.stat.pop / 100).toFixed(3)}"></span><span class="num">${u.stat.pop}점</span></dd></div>
              <div><dt>매물</dt><dd><span class="meter" style="--v:${(n / k.maxN).toFixed(3)}"></span><span class="num">${num(n)}대</span></dd></div>
            </dl>
            ${pct ? ring(pct) : ''}
          </div>
        </div>
        <ul class="car__links">${links.map(([name, url]) => `<li><a class="btn btn--quiet" href="${esc(url)}"${NEW_TAB}><span class="visually-hidden">${esc(u.name)} ${esc(u.gen)} </span>${name} 매물${EXT}</a></li>`).join('')}</ul>
        <details class="car__more">
          <summary>장단점과 리뷰 영상 ${u.videos.length}편</summary>
          ${pc(u.pros, u.cons)}
          ${vids(u.videos)}
        </details>
      </li>`;
  }

  function newCard(c) {
    return `
      <li class="car car--new" data-key="${esc(c.id)}" data-reveal>
        ${photo(c.photo, `${c.name} ${c.gen}`)}
        <div class="car__body">
          <p class="car__kicker">${esc(c.size)} · 신차</p>
          <h3 class="car__name">${esc(c.name)} <span class="car__gen">${esc(c.gen)}</span></h3>
          <div class="car__rate"><p class="pick__stars">${stars(c.stars)}</p><p class="car__why">${esc(c.why)}</p></div>
          <p class="car__feature">${esc(c.desc)}</p>
          <p class="price__head price__head--new"><span>시작 가격</span><b><span class="num" data-count>${num(c.price)}</span>만원부터</b></p>
        </div>
        <ul class="car__links"><li><a class="btn" href="${esc(c.buy)}"${NEW_TAB}><span class="visually-hidden">${esc(c.name)} </span>공식 홈페이지에서 보기${EXT}</a></li></ul>
        <details class="car__more" open>
          <summary>장단점과 리뷰 영상 ${c.videos.length}편</summary>
          ${pc(c.pros, c.cons)}
          ${vids(c.videos)}
        </details>
      </li>`;
  }

  /* 차령별로 신차 값의 몇 % 가 남는가: 엔카 표본 44세대로 그린 감가 곡선 */
  function depreciation() {
    const pts = CARS.used.filter((u) => u.price.new).map((u) => ({
      age: Math.max(0.3, 2026.9 - (u.yr[0] + u.yr[1]) / 2), r: Math.min(110, (u.price.p50 / u.price.new) * 100), kr: u.origin === '국내', name: `${u.name} ${u.gen}`,
    }));
    if (!pts.length) return '';
    /* r = 100 · e^(-k·age) 를 최소제곱으로 맞춘다 */
    const fit = (arr) => { const s = arr.reduce((a, p) => [a[0] + p.age * Math.log(p.r / 100), a[1] + p.age * p.age], [0, 0]); return -s[0] / s[1]; };
    const kKr = fit(pts.filter((p) => p.kr));
    const kIm = fit(pts.filter((p) => !p.kr));
    const X = (a) => 48 + (a / 14) * 532;
    const Y = (r) => 268 - (r / 110) * 248;
    const curve = (k) => Array.from({ length: 29 }, (_, i) => i / 2).map((a, i) => `${i ? 'L' : 'M'}${X(a).toFixed(1)} ${Y(100 * Math.exp(-k * a)).toFixed(1)}`).join(' ');
    const at = (k, a) => Math.round(100 * Math.exp(-k * a));
    const grid = [0, 25, 50, 75, 100].map((r) => `<line x1="48" x2="580" y1="${Y(r)}" y2="${Y(r)}"/><text x="40" y="${Y(r) + 4}" text-anchor="end">${r}%</text>`).join('');
    const xs = [0, 2, 4, 6, 8, 10, 12, 14].map((a) => `<text x="${X(a)}" y="290" text-anchor="middle">${a}년</text>`).join('');
    const dots = pts.map((p, i) => `<circle class="dep__dot dep__dot--${p.kr ? 'kr' : 'im'}" cx="${X(p.age).toFixed(1)}" cy="${Y(p.r).toFixed(1)}" r="5" style="--i:${i}"><title>${esc(p.name)}: ${Math.round(p.r)}%</title></circle>`).join('');
    return `
      <figure class="dep" data-reveal aria-labelledby="dep-cap">
        <div class="dep__key">
          <p class="dep__big"><b class="num" data-count>${at(kKr, 3)}%</b><span>국산차 3년 뒤 남는 값</span></p>
          <p class="dep__big dep__big--im"><b class="num" data-count>${at(kIm, 3)}%</b><span>수입차 3년 뒤 남는 값</span></p>
        </div>
        <svg class="dep__chart" viewBox="0 0 600 300" role="img" aria-label="차령에 따른 신차 값 대비 중고 시세. 국산차는 3년 뒤 ${at(kKr, 3)}%, 5년 뒤 ${at(kKr, 5)}%, 수입차는 3년 뒤 ${at(kIm, 3)}%, 5년 뒤 ${at(kIm, 5)}%가 남습니다.">
          <g class="dep__grid">${grid}${xs}</g>
          <path class="dep__line dep__line--kr" d="${curve(kKr)}" pathLength="1"/>
          <path class="dep__line dep__line--im" d="${curve(kIm)}" pathLength="1"/>
          ${dots}
        </svg>
        <figcaption id="dep-cap"><span class="dep__legend dep__legend--kr">국산차</span><span class="dep__legend dep__legend--im">수입차</span> 점 하나가 세대 하나입니다. 엔카 매물 ${num(CARS.used.length * 100)}대 표본의 시세 중앙값을 신차 당시 출고가로 나눴습니다. ${esc(CARS.checked || '')} 기준.</figcaption>
      </figure>`;
  }

  /* 목록 화면: 조건, 정렬, 차 카드 */
  function listView(s) {
    const isNew = s.kind === 'new';
    const seg = (name, label, opts, value, all = true) => `
      <fieldset class="seg">
        <legend>${label}</legend>
        <div class="seg__opts">${(all ? [['', '전체'], ...opts] : opts).map(([v, t], i) => `<input type="radio" name="${name}" id="${name}-${i}" value="${esc(v)}"${String(v) === String(value) ? ' checked' : ''}><label for="${name}-${i}">${esc(t)}</label>`).join('')}</div>
      </fieldset>`;
    const sortHelp = isNew
      ? [['조회순', '공신력 있는 자동차 유튜버 리뷰 영상의 조회수 합계'], ['인기순', '용광로 별점, 같으면 조회수'], ['금액순', '제조사 홈페이지 시작 가격']]
      : [['조회순', '엔카 매물 1대가 하루에 받는 조회수의 중앙값'], ['인기순', '매물 수(엔카와 KB차차차) 50%와 매물 1대당 찜 수 50%를 합친 100점 만점 점수'], ['금액순', '엔카 매물 100대 표본의 시세 중앙값']];
    return `
      <form class="filters" data-filters>
        ${seg('age', '연령대', SITE.pages.car.ages.map((a) => [a, a]), s.age)}
        ${seg('pay', '연봉', PAYS.map((p) => [p.name, p.name]), s.pay)}
        ${seg('band', '금액대', BANDS.map((b) => [b.name, b.name]), s.band)}
        <div class="sortbar">
          ${seg('sort', '정렬', Object.entries(SORTS), s.sort, false)}
          ${seg('dir', '순서', [['desc', '내림차순'], ['asc', '오름차순']], s.dir, false)}
        </div>
      </form>
      <details class="method">
        <summary>정렬 기준은 이렇게 정했습니다</summary>
        <ul class="method__list">${sortHelp.map(([a, b]) => `<li><b>${a}</b><span>${b}</span></li>`).join('')}</ul>
        <p class="fineprint">연봉 조건은 차값이 연봉의 절반을 넘지 않는 차만 보여 줍니다. 금액대는 중고차 사이트들이 쓰는 1천만원 단위 가격 구간입니다.</p>
      </details>
      <div class="picks__head"><p class="picks__count" role="status" data-count-line></p></div>
      <ul class="cars" data-cars></ul>
      <div class="picks__empty" data-empty hidden>
        <p>이 조건에 맞는 차가 아직 없습니다. 조건을 하나 풀어 보세요.</p>
        <button class="btn btn--quiet" type="button" data-clear>조건 모두 풀기</button>
      </div>`;
  }

  /* 안내 화면: 구입 팁, 구입 방법, 사기 예방 */
  const GICON = {
    won: '<circle cx="12" cy="12" r="9"/><path d="M7 8l2.5 8L12 9l2.5 7L17 8M6 11.5h12"/>',
    doc: '<path d="M6 2.5h8l4 4v15H6z"/><path d="M14 2.5v4h4M9 11h6M9 14.5h6M9 18h4"/>',
    shield: '<path d="M12 2.5l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10v-6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
    gauge: '<path d="M3.5 16a8.5 8.5 0 1 1 17 0"/><path d="M12 16l4-5"/><circle cx="12" cy="16" r="1.2"/>',
    wrench: '<path d="M14.5 3.5a5 5 0 0 0-5.8 6.8L3 16l2.5 2.5 5.7-5.7a5 5 0 0 0 6.8-5.8l-3 3-2.5-.5-.5-2.5z"/>',
    ok: '<rect x="3.5" y="3.5" width="17" height="17"/><path d="M8 12l3 3 5-6"/>',
    warn: '<path d="M12 3l9.5 17h-19z"/><path d="M12 10v4.5M12 17.5v.5"/>',
  };
  const gicon = (k) => `<svg class="gicon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${GICON[k] || GICON.ok}</svg>`;

  function guideView(tab) {
    const g = CARS.guides[tab];
    if (!g) return '';
    const head = `<div class="gd__head" data-reveal><h3 class="gd__title">${esc(g.name)}</h3><p class="gd__lede">${esc(g.lede)}</p></div>`;
    const video = `<section class="gd__vids" aria-labelledby="gv-${tab}"><h3 id="gv-${tab}">함께 보면 좋은 영상</h3><p class="fineprint">조회수 10만회가 넘는 영상만 골랐습니다. 조회수는 ${esc(CARS.checked || '')} 기준.</p>${vids(g.videos)}</section>`;
    if (tab === 'tips') {
      const icons = ['won', 'doc', 'shield', 'gauge', 'wrench', 'ok'];
      return `${head}
        <ol class="tips">${g.items.map(([t, d], i) => `<li class="tip" data-reveal style="--i:${i}">${gicon(icons[i])}<h4>${esc(t)}</h4><p>${esc(d)}</p></li>`).join('')}</ol>
        <section class="tax" data-reveal aria-labelledby="tax-h">
          <h3 id="tax-h">차값을 넣으면 취득세가 보입니다</h3>
          <form class="tax__form" data-tax>
            <label class="tax__field"><span>차값(만원)</span><input class="cost__input" type="text" inputmode="numeric" name="price" value="1500" autocomplete="off"></label>
            <label class="tax__check"><input type="checkbox" name="light"> 경차(1,000cc 미만)</label>
          </form>
          <div class="tax__bar" aria-hidden="true"><span class="tax__car"></span><span class="tax__tax"></span></div>
          <p class="tax__say" role="status" data-tax-say></p>
          <p class="fineprint">비영업용 승용차 기준입니다. 차값과 시가표준액 가운데 높은 값에 매기고, 지역별 공채 매입비와 이전 대행비는 따로 듭니다.</p>
        </section>
        ${video}`;
    }
    if (tab === 'how') {
      return `${head}
        <ol class="flow">${g.steps.map(([t, d], i) => `<li class="flow__step" data-reveal style="--i:${i}"><span class="flow__no num">${i + 1}</span><div><h4>${esc(t)}</h4><p>${esc(d)}</p></div></li>`).join('')}</ol>
        ${video}`;
    }
    return `${head}
      <ul class="scams">${g.items.map(([t, d], i) => `<li class="scam" data-reveal style="--i:${i}">${gicon('warn')}<h4>${esc(t)}</h4><p>${esc(d)}</p></li>`).join('')}</ul>
      <section class="help" data-reveal aria-labelledby="help-h">
        <h3 id="help-h">당했다면 바로 연락할 곳</h3>
        <ul class="help__list">${(g.help || []).map(([n, t, d]) => `<li><a href="tel:${esc(t)}"><b class="num">${esc(t)}</b><span>${esc(n)}</span></a><p>${esc(d)}</p></li>`).join('')}</ul>
      </section>
      ${video}`;
  }

  const car = {
    apply: null,

    render(cfg) {
      return `
        <section aria-labelledby="vs-h">
          <h2 id="vs-h">신차와 중고, 무엇이 다른가</h2>
          <div class="versus">${cfg.vs.map((v) => `<div data-reveal><h3>${esc(v.name)}</h3>${bullets(v.points)}</div>`).join('')}</div>
          ${depreciation()}
        </section>
        <section class="zone" aria-labelledby="zone-h">
          <h2 id="zone-h">조건에 맞는 차</h2>
          <nav class="kinds" aria-label="신차와 중고차" data-kinds></nav>
          <nav class="usednav" aria-label="중고차 메뉴" data-usednav></nav>
          <div class="zone__view" data-view></div>
        </section>
        <section class="sources" aria-labelledby="car-src">
          <h2 id="car-src">자료와 기준</h2>
          <ul>
            <li>시세, 조회수, 찜 수: <a href="https://www.encar.com/"${NEW_TAB}>엔카${EXT_IN}</a> 세대별 매물 100대 표본. 매물 수: 엔카와 <a href="https://www.kbchachacha.com/"${NEW_TAB}>KB차차차${EXT_IN}</a></li>
            <li>신차 가격: 현대자동차, 기아, 테슬라 공식 홈페이지 시작 가격</li>
            <li>사진: 위키미디어 공용의 자유 라이선스 사진에서 배경을 지우고, 모든 차가 왼쪽 앞을 보게 일부는 좌우를 뒤집었습니다. 사진 아래에 찍은 사람과 라이선스를 적었습니다.</li>
            <li>영상: 조회수 10만회 이상. 신차는 오토뷰, 김한용의 MOCAR, 우파푸른하늘 리뷰를 먼저 골랐습니다.</li>
          </ul>
          <p class="fineprint">${esc(CARS.checked || '')} 확인. ${esc(cfg.starsNote || '')}</p>
        </section>`;
    },

    bind(root, cfg, { params, path }) {
      const kinds = $('[data-kinds]', root);
      const usednav = $('[data-usednav]', root);
      const view = $('[data-view]', root);
      let s = {};
      let shownView = '';

      const href = (o) => {
        const q = new URLSearchParams(Object.entries({ ...o }).filter(([, v]) => v)).toString();
        return `#/${path}${q ? `?${q}` : ''}`;
      };
      const remember = () => {
        const keep = s.kind === 'new' ? { kind: 'new', age: s.age, pay: s.pay, band: s.band, sort: s.sort, dir: s.dir } : { kind: 'used', tab: s.tab, age: s.age, pay: s.pay, band: s.band, sort: s.sort, dir: s.dir };
        if (s.kind === 'used' && !['kr', 'im'].includes(s.tab)) ['age', 'pay', 'band', 'sort', 'dir'].forEach((k) => delete keep[k]);
        history.replaceState(null, '', href(keep));
      };

      /* 주소의 ?조건 을 읽는다. 예전 주소(kind=신차, 중고)도 받는다 */
      const read = (p) => {
        const kind = { 신차: 'new', 중고: 'used' }[p.get('kind')] || (['new', 'used'].includes(p.get('kind')) ? p.get('kind') : 'used');
        const tab = TABS[p.get('tab')] ? p.get('tab') : 'kr';
        const pick = (k, list) => (list.includes(p.get(k)) ? p.get(k) : '');
        return {
          kind, tab,
          age: pick('age', cfg.ages), pay: pick('pay', PAYS.map((x) => x.name)), band: pick('band', BANDS.map((x) => x.name)),
          sort: SORTS[p.get('sort')] ? p.get('sort') : (kind === 'new' ? 'price' : 'pop'),
          dir: ['asc', 'desc'].includes(p.get('dir')) ? p.get('dir') : (kind === 'new' && !SORTS[p.get('sort')] ? 'asc' : 'desc'),
        };
      };

      const items = () => (s.kind === 'new' ? CARS.fresh : CARS.used.filter((u) => u.origin === (s.tab === 'im' ? '해외' : '국내')));
      const priceOf = (c) => (s.kind === 'new' ? c.price : c.price.p50);
      const keyOf = (c) => (s.kind === 'new' ? c.id : c.key);
      const metric = (c) => {
        if (s.sort === 'price') return priceOf(c);
        if (s.kind === 'new') return s.sort === 'views' ? c.views : c.stars * 1e9 + c.views;
        return s.sort === 'views' ? c.stat.vpd : c.stat.pop;
      };

      const drawNav = () => {
        kinds.innerHTML = [['new', '신차'], ['used', '중고차']].map(([k, t]) => `<a class="kind" href="${href({ kind: k })}"${s.kind === k ? ' aria-current="page"' : ''}>${t}<span class="kind__n num">${k === 'new' ? CARS.fresh.length : CARS.used.length}</span></a>`).join('');
        usednav.hidden = s.kind !== 'used';
        usednav.innerHTML = s.kind === 'used' ? `<ul>${Object.entries(TABS).map(([k, t]) => `<li><a class="usednav__item${['kr', 'im'].includes(k) ? '' : ' usednav__item--guide'}" href="${href({ kind: 'used', tab: k })}"${s.tab === k ? ' aria-current="page"' : ''}>${t}</a></li>`).join('')}</ul>` : '';
      };

      /* 목록 그리기: 처음 한 번 카드를 만들고, 조건이 바뀌면 숨기고 순서만 바꾼다(움직임 포함) */
      const drawList = (animate) => {
        const list = $('[data-cars]', view);
        const all = items();
        const cards = new Map($$('[data-key]', list).map((el) => [el.dataset.key, el]));
        const before = animate ? new Map([...cards].map(([k, el]) => [k, el.hidden ? null : el.getBoundingClientRect().top])) : null;
        const pay = PAYS.find((p) => p.name === s.pay);
        const band = BANDS.find((b) => b.name === s.band);
        const ok = (c) => (!s.age || c.ages.includes(s.age)) && (!pay || priceOf(c) <= pay.cap) && (!band || (priceOf(c) >= band.lo && priceOf(c) < band.hi));
        const sorted = [...all].sort((a, b) => (metric(a) - metric(b)) * (s.dir === 'asc' ? 1 : -1));
        let n = 0;
        sorted.forEach((c) => {
          const el = cards.get(keyOf(c));
          const show = ok(c);
          el.hidden = !show;
          if (show) n += 1;
          list.appendChild(el);
        });
        $('[data-count-line]', view).textContent = `${all.length}${s.kind === 'new' ? '종' : '개 세대'} 가운데 ${n}개 · ${SORTS[s.sort]} ${s.dir === 'asc' ? '오름차순' : '내림차순'}`;
        $('[data-empty]', view).hidden = n > 0;
        if (before && !REDUCE()) {
          cards.forEach((el, k) => {
            if (el.hidden) return;
            const was = before.get(k);
            const now = el.getBoundingClientRect().top;
            if (was == null) el.animate([{ opacity: 0, transform: 'translateY(24px)' }, { opacity: 1, transform: 'none' }], { duration: 360, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' });
            else if (Math.abs(was - now) > 1) el.animate([{ transform: `translateY(${was - now}px)` }, { transform: 'none' }], { duration: 520, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' });
          });
        }
      };

      const drawView = () => {
        const key = s.kind === 'new' ? 'new' : s.tab;
        if (key !== shownView) {
          const isList = s.kind === 'new' || ['kr', 'im'].includes(s.tab);
          view.innerHTML = isList ? listView(s) : guideView(s.tab);
          shownView = key;
          if (isList) {
            const all = items();
            const k = s.kind === 'new' ? {} : {
              scale: Math.max(...all.map((u) => u.price.p75)) * 1.04,
              maxV: Math.max(...all.map((u) => u.stat.vpd)),
              maxN: Math.max(...all.map((u) => u.stat.encar + u.stat.kb)),
            };
            $('[data-cars]', view).innerHTML = all.map((c) => (s.kind === 'new' ? newCard(c) : usedCard(c, k))).join('');
            const form = $('[data-filters]', view);
            form.addEventListener('submit', (e) => e.preventDefault());
            form.addEventListener('change', () => {
              ['age', 'pay', 'band', 'sort', 'dir'].forEach((f) => { s[f] = form.elements[f].value; });
              remember();
              drawList(true);
            });
            $('[data-clear]', view).addEventListener('click', () => {
              s.age = ''; s.pay = ''; s.band = '';
              ['age', 'pay', 'band'].forEach((f) => { form.elements[f][0].checked = true; });
              remember();
              drawList(true);
            });
            drawList(false);
          } else if (s.tab === 'tips') bindTax(view);
          motion(view);
        } else if ($('[data-filters]', view)) {
          const form = $('[data-filters]', view);
          ['age', 'pay', 'band', 'sort', 'dir'].forEach((f) => {
            const radios = [...form.elements[f]];
            (radios.find((r) => r.value === s[f]) || radios[0]).checked = true;
          });
          drawList(true);
        }
      };

      const draw = (p) => {
        s = read(p);
        drawNav();
        drawView();
        return s;
      };

      /* 영상: 누르면 그 자리에서 재생한다(유튜브 쿠키 없는 주소) */
      root.addEventListener('click', (e) => {
        const b = e.target.closest('[data-yt]');
        if (!b) return;
        const frame = document.createElement('iframe');
        frame.className = 'vid__frame';
        frame.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(b.dataset.yt)}?autoplay=1&rel=0`;
        frame.title = b.dataset.title || '유튜브 영상';
        frame.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
        frame.allowFullscreen = true;
        b.replaceWith(frame);
        frame.focus();
      });

      car.apply = draw;
      draw(params);
    },
  };

  /* 구입 팁: 취득세 계산(비영업용 승용 7%, 경차 4%에서 75만원까지 감면) */
  function bindTax(root) {
    const form = $('[data-tax]', root);
    if (!form) return;
    const say = $('[data-tax-say]', root);
    const bar = $('.tax__bar', root);
    const update = () => {
      const clean = form.elements.price.value.replace(/[^\d]/g, '');
      if (clean !== form.elements.price.value) form.elements.price.value = clean;
      const price = Number(clean) || 0;
      const light = form.elements.light.checked;
      const tax = light ? Math.max(0, price * 0.04 - 75) : price * 0.07;
      const total = price + tax;
      bar.style.setProperty('--car', total ? (price / total).toFixed(4) : '1');
      say.textContent = price
        ? `차값 ${num(price)}만원이면 취득세는 ${num(tax)}만원, 합계 ${num(total)}만원입니다.${light && !tax ? ' 경차 감면으로 취득세를 내지 않습니다.' : ''}`
        : '차값을 넣어 주세요.';
    };
    form.addEventListener('input', update);
    form.addEventListener('submit', (e) => e.preventDefault());
    update();
  }

  /* 신규교육부 > 이사 및 발령: 이전비 신청 방법 */
  const moving = {
    render(cfg) {
      return `
        <ul class="facts">${cfg.facts.map((f, i) => `<li data-reveal style="--i:${i}"><b class="facts__figure" data-count>${esc(f.figure)}</b><span class="facts__text">${esc(f.text)}</span></li>`).join('')}</ul>
        <div class="guide">
          <section aria-labelledby="mv-steps">
            <h2 id="mv-steps">이전비 신청 방법</h2>
            <ol class="steps">${cfg.steps.map((s, i) => `<li data-reveal style="--i:${i}"><h3>${esc(s.name)}</h3><p>${esc(s.text)}</p></li>`).join('')}</ol>
            <p class="guide__note">${esc(cfg.note || '')}</p>
          </section>
          <div class="guide__side">
            <section aria-labelledby="mv-papers"><h2 id="mv-papers">준비 서류</h2>${bullets(cfg.papers)}</section>
            <section aria-labelledby="mv-yes"><h2 id="mv-yes">받을 수 있는 경우</h2>${bullets(cfg.yes)}</section>
            <section aria-labelledby="mv-no"><h2 id="mv-no">받을 수 없는 경우</h2>${bullets(cfg.no)}</section>
          </div>
        </div>
        <section class="sources" aria-labelledby="mv-src">
          <h2 id="mv-src">근거</h2>
          <ul>${cfg.sources.map((s) => `<li><a href="${esc(s.url)}"${NEW_TAB}>${esc(s.name)}${EXT_IN}</a></li>`).join('')}</ul>
          <p class="fineprint">${esc(cfg.checked || '')}</p>
        </section>`;
    },
  };

  /* data.js 의 page 이름과 짝을 이룬다 */
  const PAGES = { cost, noryangjin, items, instructors, car, moving };

  function viewLost() {
    return `
      <div class="container lost">
        <h1 id="page-h" tabindex="-1">이 주소에는 문이 없습니다</h1>
        <p>주소가 바뀌었거나 아직 만들지 않은 곳입니다.</p>
        <a class="btn" href="#/">첫 화면으로 가기</a>
      </div>`;
  }

  /* ───── 주소(#/부서/메뉴)에 맞춰 화면을 바꾼다 ───── */

  let shown = null;
  let first = true;

  function show(key, html, { home = false, title = '', deptId = null, exact = false, bind = null } = {}) {
    if (key !== shown) {
      hero.hidden = !home;
      while (main.lastElementChild && main.lastElementChild !== hero) main.lastElementChild.remove();
      main.insertAdjacentHTML('beforeend', html());
      if (bind) bind();
      motion(main);
      shown = key;
    }
    document.title = title ? `${title} | ${SITE.name}` : SITE.name;
    $$('.gnb__link', gnb).forEach((a) => {
      if (a.dataset.dept === deptId) a.setAttribute('aria-current', exact ? 'page' : 'true');
      else a.removeAttribute('aria-current');
    });
  }

  function route() {
    const hash = location.hash;
    const changedFrom = shown;
    let jump = null;

    if (!hash.startsWith('#/')) {
      show('home', viewHome, { home: true });
      jump = hash.length > 1 ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
    } else {
      /* 주소 뒤의 ?조건 은 페이지가 쓰는 값(자동차의 구분, 연령대, 연봉)이다 */
      const [where, query = ''] = hash.slice(2).split('?');
      const params = new URLSearchParams(query);
      const [deptId, menuId] = where.split('/').filter(Boolean).map(decodeURIComponent);
      const d = SITE.depts.find((x) => x.id === deptId);
      const m = d && menuId ? d.menus.find((x) => x.id === menuId) : null;
      if (!deptId) show('home', viewHome, { home: true });
      else if (!d) show(`lost:${hash}`, viewLost, { title: '없는 주소' });
      else if (m && kind(m) === 'page') {
        const page = PAGES[m.page];
        const path = `${d.id}/${m.id}`;
        const fresh = shown !== path;
        show(path, () => viewPage(d, m), {
          title: `${m.name} | ${d.name}`,
          deptId: d.id,
          bind: () => { if (page.bind) page.bind($('[data-page]', main), SITE.pages[m.page], { params, path }); },
        });
        if (!fresh && page.apply) page.apply(params);
      } else show(d.id, () => viewDept(d), { title: d.name, deptId: d.id, exact: true });
    }

    if (jump) {
      jump.scrollIntoView();
    } else if (!first && shown !== changedFrom) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      const h = hero.hidden ? $('#page-h', main) : $('#hero-h');
      if (h) h.focus({ preventScroll: true });
    }
    first = false;
  }

  document.documentElement.classList.add('js');
  renderChrome();
  bindNav();
  bindSheet();
  bindBrand();
  window.addEventListener('hashchange', route);
  route();
})();
