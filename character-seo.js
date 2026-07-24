(function () {
  var heroTitle = document.querySelector('.hero h1');
  if (!heroTitle) return;

  var name = heroTitle.textContent.trim();
  if (!name) return;

  document.title = name + ' — Eggy Wiki Characters';

  var tagline = document.querySelector('.hero .tagline');
  var meta = document.querySelector('meta[name="description"]');
  if (meta && tagline) {
    meta.content = name + ' — ' + tagline.textContent.trim();
  }
})();
