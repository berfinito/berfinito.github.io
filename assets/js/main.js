(function () {

  /* enable scroll reveal animations only when JS is running */
  document.body.classList.add('js-loaded');

  /* scroll reveal */
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.card, .timeline-item, .interest-card')
    .forEach(function (el) { revealObserver.observe(el); });

})();
