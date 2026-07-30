// Yandex.Metrika — counter 109526773

(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};

m[i].l=1*new Date();

for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}

k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}

)(window,document,'script','https://mc.yandex.ru/metrika/tag.js','ym');

ym(109526773,'init',{clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true});

// Market-Place / MPSU ads for printer-e.vercel.app
// Articles only: horizontal after 1st, 5th, and 9th safe paragraphs; corner sticker
(function () {
  'use strict';
  var MPSU_SCRIPT_SRC = 'https://statika.mpsuadv.ru/scripts/11552.js';

  function isArticlePage() {
    if (!document.body) return false;
    var pageType = document.body.getAttribute('data-page-type');
    if (pageType && pageType !== 'article') return false;
    if (/(^|\s)(home|category|archive)(\s|$)/.test(document.body.className)) return false;
    return !!document.querySelector('article, .pc-article, .article-body, .pb-article-body');
  }

  function getArticleRoot() {
    return document.querySelector('article, .pc-article, .article-body, .pb-article-body');
  }

  function isUnsafeAdParent(node, root) {
    while (node && node !== root && node !== document.body) {
      if (node.matches && node.matches('ol, ul, li, blockquote, table, thead, tbody, tr, td, th, figure, figcaption, aside, details, summary, pre, code')) return true;
      if (node.matches && node.matches('.important, .note, .warning, .alert, .callout, .highlight, .tip, .info, .notice, .attention, .danger, .success, .faq, .steps, .pros-cons, .toc, .contents')) return true;
      if (typeof node.className === 'string' && /(important|note|warning|alert|callout|highlight|tip|info|notice|attention|danger|success|faq|steps|pros-cons|toc|contents)/i.test(node.className)) return true;
      node = node.parentElement;
    }
    return false;
  }

  function getSafeParagraphs(root) {
    if (!root) return [];
    return Array.prototype.filter.call(root.querySelectorAll('p'), function (paragraph) {
      if (!paragraph || !paragraph.parentElement) return false;
      if (isUnsafeAdParent(paragraph.parentElement, root)) return false;
      return paragraph.textContent && paragraph.textContent.replace(/\s+/g, '').length >= 40;
    });
  }

  function loadMpsuScript() {
    if (document.querySelector('script[src="' + MPSU_SCRIPT_SRC + '"]')) return;
    var script = document.createElement('script');
    script.async = true;
    script.src = MPSU_SCRIPT_SRC;
    document.head.appendChild(script);
  }

  function startWidget(widgetId) {
    window.mpsuStart = window.mpsuStart || [];
    window.mpsuStart.push(widgetId);
  }

  function createWidget(widgetId) {
    if (document.getElementById('mp_custom_' + widgetId)) return null;
    var block = document.createElement('div');
    block.id = 'mp_custom_' + widgetId;
    return block;
  }

  function insertAfterParagraph(widgetId, paragraphNumber) {
    var paragraphs = getSafeParagraphs(getArticleRoot());
    if (paragraphs.length < paragraphNumber) return;
    var block = createWidget(widgetId);
    if (!block) return;
    paragraphs[paragraphNumber - 1].insertAdjacentElement('afterend', block);
    startWidget(widgetId);
  }

  function insertFloatingWidget(widgetId) {
    var block = createWidget(widgetId);
    if (!block) return;
    document.body.appendChild(block);
    startWidget(widgetId);
  }

  function initAds() {
    if (!isArticlePage()) return;
    loadMpsuScript();
    // Rotator Static ZBT printer-e.vercel.app горизонтальный 1 №44704
    insertAfterParagraph(44704, 1);
    // Rotator Static ZBT printer-e.vercel.app горизонтальный 2 №44705
    insertAfterParagraph(44705, 5);
    // Rotator Static ZBT printer-e.vercel.app горизонтальный 3 №44707
    insertAfterParagraph(44707, 9);
    // Rotator Recom V printer-e.vercel.app №44709
    insertFloatingWidget(44709);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAds);
  } else {
    initAds();
  }
})();
