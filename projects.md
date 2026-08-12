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

<div class="card-grid">
  {% for project in site.projects %}
    <div class="card">

      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:.5rem;">
        {% if project.label %}
          <span class="card-label">{{ project.label }}</span>
        {% elsif project.tags.size > 0 %}
          <span class="card-label">{{ project.tags | first }}</span>
        {% endif %}
      </div>

      <h3><a href="{{ project.github }}" target="_blank" rel="noopener">{{ project.title }}</a></h3>

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
        {% if project.demo %}
          <a href="{{ project.demo }}" target="_blank" rel="noopener"
             class="btn btn-primary" style="padding:.3rem .7rem;font-size:.75rem;flex-shrink:0;">
            Demo ↗
          </a>
        {% endif %}
      </div>
    </div>
  {% endfor %}
</div>
