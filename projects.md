---
layout: default
title: Projects
description: "ML, NLP, and backend projects by Berfin Celik: LLM fine-tuning, ASR pipelines, deepfake detection, and more."
permalink: /projects/
---

<div class="page-header">
  <span class="page-label">Work</span>
  <h1>Projects</h1>
  <p style="color:var(--text-muted);margin-top:.5rem;font-size:1rem;">
    Things I've built.
  </p>
</div>

<div class="card-grid">
  {% assign all_projects = site.projects | sort: "order" %}
  {% for project in all_projects %}
    <div class="card">

      {% if project.label %}
        <span class="card-lang">{{ project.label }}</span>
      {% endif %}

      <h3><a href="{{ project.github }}" target="_blank" rel="noopener">{{ project.title }}</a></h3>

      {% if project.description %}
        <p class="card-desc">{{ project.description }}</p>
      {% endif %}

      <div class="card-footer">
        <a href="{{ project.github }}" target="_blank" rel="noopener" class="card-link">Code ↗</a>
        {% if project.demo %}
          <a href="{{ project.demo }}" target="_blank" rel="noopener" class="card-demo">Demo ↗</a>
        {% endif %}
      </div>

    </div>
  {% endfor %}
</div>
