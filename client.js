var requireAssets = require('require-assets');

loadStylesheet(requireAssets('./style.css'));

function loadStylesheet(href) {
  if (document.querySelector('link[href=' + JSON.stringify(href) + ']'))
    return;

  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
}
