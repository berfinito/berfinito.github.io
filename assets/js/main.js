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

  /* count-up for metrics bar */
  function countUp(el, target, isFloat, duration) {
    duration = duration || 900;
    var startTime = null;
    var numEl = el.querySelector('.metric-num') || el;
    var suffix = numEl.innerHTML.replace(/[\d.]+/, '').trim();

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = eased * target;
      var display = isFloat ? current.toFixed(1) : Math.round(current).toLocaleString();
      numEl.innerHTML = display + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  var metricsObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        var items = e.target.querySelectorAll('.metric-item');
        items.forEach(function (item, i) {
          var numEl = item.querySelector('.metric-num');
          if (!numEl) return;
          var target = parseFloat(numEl.getAttribute('data-target'));
          if (isNaN(target)) return;
          var isFloat = target % 1 !== 0;
          var delay = i * 100;
          setTimeout(function () { countUp(item, target, isFloat); }, delay);
        });
        metricsObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });

  var metricsBar = document.querySelector('.metrics-bar');
  if (metricsBar) metricsObserver.observe(metricsBar);

})();
