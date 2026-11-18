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
    const items = (SITE.quick || []).map((q) => {
      const inner = `<span class="quick__ring">${icon(q.icon)}</span><span class="quick__name">${esc(q.name)}</span>`;
      if (q.href) return `<li><a class="quick__item" href="${esc(q.href)}">${inner}</a></li>`;
      const hit = find(q.to);
      return hit ? `<li>${linkTo(hit.d, hit.m, 'quick__item', inner)}</li>` : '';
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
      <li class="org__branch org__branch--${i % 2 ? 'r' : 'l'}">
        <div class="org__box">
          <h3 class="org__boxname"><a href="#/${d.id}">${esc(d.name)}</a></h3>
          <ul class="org__chips">${d.menus.map((m) => menuLi(d, m, 'org__chip')).join('')}</ul>
        </div>
      </li>`).join('');

    const units = main.map((d) => `
      <li class="org__unit">
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
          <div class="org" style="--n:${main.length}">
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
    if (k === 'pending') return `<li class="door door--pending"><div class="door__row">${text}<span class="door__go">준비 중</span></div></li>`;
    if (k === 'ext') return `<li class="door"><a class="door__row" href="${esc(m.url)}"${NEW_TAB}>${text}<span class="door__go">바로 열기${EXT}</span></a></li>`;
    return `<li class="door"><a class="door__row" href="${menuHref(d, m)}">${text}<span class="door__go">들어가기</span></a></li>`;
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
        <li class="spot">
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
        <section class="goods" aria-labelledby="goods-${i}">
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
          <ul class="tracks">${cfg.groups.map((g) => `<li>${esc(g.name)}</li>`).join('')}</ul>
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

  /* 신규교육부 > 자동차: 신차와 중고 비교, 조건(구분, 연령대, 연봉)으로 거르는 추천 목록 */
  const car = {
    apply: null,

    render(cfg) {
      const seg = (name, label, opts) => `
        <fieldset class="seg">
          <legend>${label}</legend>
          <div class="seg__opts">${['전체', ...opts].map((o, i) => `<input type="radio" name="${name}" id="${name}-${i}" value="${i ? esc(o) : ''}"${i ? '' : ' checked'}><label for="${name}-${i}">${esc(o)}</label>`).join('')}</div>
        </fieldset>`;
      const kcar = (q) => `https://www.kcar.com/bc/search/IntgSearchList?searchWord=${encodeURIComponent(q)}`;
      const encar = ([maker, model]) => `https://www.encar.com/dc/dc_carsearchlist.do?carType=kor&searchType=model&TG.R=A#!${encodeURIComponent(JSON.stringify({ action: `(And.Hidden.N._.(C.CarType.Y._.(C.Manufacturer.${maker}._.ModelGroup.${model}.)))`, toggle: {}, layer: '', sort: 'ModifiedDate', page: 1, limit: 20 }))}`;
      const stars = (n) => `<span class="stars" role="img" aria-label="별점 5점 만점에 ${n}점"><span aria-hidden="true">☆☆☆☆☆</span><span class="stars__on" aria-hidden="true" style="--rate:${(n / 5).toFixed(2)}">★★★★★</span></span><span class="stars__num" aria-hidden="true">${n.toFixed(1)}</span>`;
      return `
        <section aria-labelledby="vs-h">
          <h2 id="vs-h">신차와 중고, 무엇이 다른가</h2>
          <div class="versus">${cfg.vs.map((v) => `<div><h3>${esc(v.name)}</h3>${bullets(v.points)}</div>`).join('')}</div>
        </section>
        <section aria-labelledby="picks-h">
          <div class="picks__head">
            <h2 id="picks-h">조건에 맞는 차</h2>
            <p class="picks__count" role="status" data-count></p>
          </div>
          <form class="filters" data-filters>
            ${seg('kind', '구분', ['신차', '중고'])}
            ${seg('age', '연령대', cfg.ages)}
            ${seg('pay', '연봉', cfg.pays)}
          </form>
          <ul class="picks">${cfg.picks.map((p, i) => `
            <li class="pick" data-pick="${i}">
              <div>
                <h3 class="pick__name">${esc(p.name)}</h3>
                <p class="pick__stars">${stars(p.stars)}</p>
                <dl class="pick__meta">
                  <div><dt>구분</dt><dd>${esc(p.kind)}</dd></div>
                  <div><dt>연령대</dt><dd>${esc(p.ages.join(', '))}</dd></div>
                  <div><dt>연봉</dt><dd>${esc(p.pays.join(', '))}</dd></div>
                </dl>
              </div>
              <div>
                <p class="pick__why">${esc(p.why)}</p>
                <dl class="pick__pc">
                  <div><dt>장점</dt><dd>${bullets(p.pros)}</dd></div>
                  <div><dt>단점</dt><dd>${bullets(p.cons)}</dd></div>
                </dl>
              </div>
              <div class="pick__links">
                <a class="btn btn--quiet" href="${esc(kcar(p.kcar))}"${NEW_TAB}><span class="visually-hidden">${esc(p.name)} </span>케이카 시세${EXT}</a>
                <a class="btn btn--quiet" href="${esc(encar(p.encar))}"${NEW_TAB}><span class="visually-hidden">${esc(p.name)} </span>SK엔카 시세${EXT}</a>
              </div>
            </li>`).join('')}</ul>
          <div class="picks__empty" data-empty hidden>
            <p>이 조건에 맞는 차가 아직 없습니다. 조건을 하나 풀어 보세요.</p>
            <button class="btn btn--quiet" type="button" data-clear>조건 모두 풀기</button>
          </div>
          <p class="fineprint">${esc(cfg.starsNote || '')}</p>
        </section>`;
    },

    bind(root, cfg, { params, path }) {
      const form = $('[data-filters]', root);
      const rows = $$('[data-pick]', root);
      const count = $('[data-count]', root);
      const empty = $('[data-empty]', root);
      const KEYS = ['kind', 'age', 'pay'];

      const run = () => {
        const f = Object.fromEntries(KEYS.map((k) => [k, form.elements[k].value]));
        let n = 0;
        rows.forEach((el) => {
          const p = cfg.picks[el.dataset.pick];
          const ok = (!f.kind || p.kind === f.kind) && (!f.age || p.ages.includes(f.age)) && (!f.pay || p.pays.includes(f.pay));
          el.hidden = !ok;
          if (ok) n += 1;
        });
        count.textContent = `${cfg.picks.length}대 중 ${n}대`;
        empty.hidden = n > 0;
        return f;
      };
      /* 고른 조건은 주소에 남겨서 그대로 공유하거나 되돌아올 수 있게 한다 */
      const remember = (f) => {
        const q = new URLSearchParams(Object.entries(f).filter(([, v]) => v)).toString();
        history.replaceState(null, '', `#/${path}${q ? `?${q}` : ''}`);
      };
      const set = (p) => {
        KEYS.forEach((k) => {
          const radios = [...form.elements[k]];
          (radios.find((r) => r.value === (p.get(k) || '')) || radios[0]).checked = true;
        });
        return run();
      };

      form.addEventListener('submit', (e) => e.preventDefault());
      form.addEventListener('change', () => remember(run()));
      $('[data-clear]', root).addEventListener('click', () => remember(set(new URLSearchParams())));
      car.apply = set;
      set(params);
    },
  };

  /* 신규교육부 > 이사 및 발령: 이전비 신청 방법 */
  const moving = {
    render(cfg) {
      return `
        <ul class="facts">${cfg.facts.map((f) => `<li><b class="facts__figure">${esc(f.figure)}</b><span class="facts__text">${esc(f.text)}</span></li>`).join('')}</ul>
        <div class="guide">
          <section aria-labelledby="mv-steps">
            <h2 id="mv-steps">이전비 신청 방법</h2>
            <ol class="steps">${cfg.steps.map((s) => `<li><h3>${esc(s.name)}</h3><p>${esc(s.text)}</p></li>`).join('')}</ol>
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
