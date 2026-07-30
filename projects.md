---
layout: default
title: Projects
permalink: /projects/
---

<div class="page-header">
  <span class="page-label">Work</span>
  <h1>Projects</h1>
  <p style="color:var(--text-muted);margin-top:.5rem;font-size:1rem;">
    Things I've built, researched, or shipped — from MSc dissertation to production APIs.
  </p>
</div>

<!-- ── Filter bar ───────────────────────────────────────────── -->
<div class="filter-bar" role="group" aria-label="Filter by technology">
  <button class="filter-btn active" data-filter="all">All</button>
  {% assign all_tags = "" | split: "" %}
  {% for project in site.projects %}
    {% for tag in project.tags %}
      {% unless all_tags contains tag %}
        {% assign all_tags = all_tags | push: tag %}
      {% endunless %}
    {% endfor %}
  {% endfor %}
  {% assign sorted_tags = all_tags | sort %}
  {% for tag in sorted_tags %}
    <button class="filter-btn" data-filter="{{ tag | slugify }}">{{ tag }}</button>
  {% endfor %}
</div>

<!-- ── Project grid ─────────────────────────────────────────── -->
<p class="filter-count" aria-live="polite"></p>

<div class="card-grid" id="project-grid">
  {% assign sorted_projects = site.projects | sort: "date" | reverse %}
  {% for project in sorted_projects %}
    {% assign tag_slugs = "" | split: "" %}
    {% for tag in project.tags %}
      {% assign tag_slugs = tag_slugs | push: tag | join: " " %}
    {% endfor %}
    <div class="card project-card"
         data-tags="{{ project.tags | join: ' ' | downcase }}"
         data-slugs="{% for tag in project.tags %}{{ tag | slugify }} {% endfor %}">

      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:.5rem;">
        {% if project.label %}
          <span class="card-label">{{ project.label }}</span>
        {% elsif project.tags.size > 0 %}
          <span class="card-label">{{ project.tags | first }}</span>
        {% endif %}
        {% if project.status %}
          <span class="project-status project-status--{{ project.status | slugify }}">
            {{ project.status }}
          </span>
        {% endif %}
      </div>

      <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>

      {% if project.description %}
        <p class="card-desc">{{ project.description }}</p>
      {% endif %}

      <div class="card-footer">
        <div class="post-tags">
          {% for tag in project.tags limit: 4 %}
            <span class="tag">{{ tag }}</span>
          {% endfor %}
          {% if project.tags.size > 4 %}
            <span class="tag" style="color:var(--text-faint);">+{{ project.tags.size | minus: 4 }}</span>
          {% endif %}
        </div>
        <div style="display:flex;gap:.4rem;flex-shrink:0;">
          {% if project.github %}
            <a href="{{ project.github }}" target="_blank" rel="noopener"
               class="btn btn-ghost" style="padding:.3rem .7rem;font-size:.75rem;">
              GitHub →
            </a>
          {% endif %}
          {% if project.demo %}
            <a href="{{ project.demo }}" target="_blank" rel="noopener"
               class="btn btn-primary" style="padding:.3rem .7rem;font-size:.75rem;">
              Demo ↗
            </a>
          {% endif %}
        </div>
      </div>
    </div>
  {% endfor %}
</div>

<p class="empty-state" id="no-results" style="display:none;">
  No projects match that filter. <button class="link-btn" onclick="resetFilter()">Clear filter</button>
</p>

<!-- ── Filter script ────────────────────────────────────────── -->
<script>
(function () {
  var btns  = document.querySelectorAll('.filter-btn');
  var cards = document.querySelectorAll('.project-card');
  var count = document.querySelector('.filter-count');
  var empty = document.getElementById('no-results');

  function updateCount(visible) {
    count.textContent = visible === cards.length
      ? ''
      : visible + ' of ' + cards.length + ' projects';
  }

  function filterCards(filter) {
    var visible = 0;
    cards.forEach(function (card) {
      var slugs = card.dataset.slugs || '';
      var show = filter === 'all' || slugs.indexOf(filter) !== -1;
      card.style.display = show ? '' : 'none';
      if (show) visible++;
    });
    empty.style.display = visible === 0 ? '' : 'none';
    updateCount(visible);
  }

  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      btns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      filterCards(btn.dataset.filter);
    });
  });

  updateCount(cards.length);
})();

function resetFilter() {
  document.querySelector('[data-filter="all"]').click();
}
</script>
