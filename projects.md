---
layout: default
title: Projects
description: "ML, NLP, and backend projects by Berfin Celik — LLM fine-tuning, ASR pipelines, deepfake detection, and more."
permalink: /projects/
---

<div class="page-header">
  <span class="page-label">Work</span>
  <h1>Projects</h1>
  <p style="color:var(--text-muted);margin-top:.5rem;font-size:1rem;">
    Things I've built, researched, or shipped.
  </p>
</div>

<div class="card-grid">
  {% assign featured = site.projects | where: "featured", true | sort: "order" %}
  {% for project in featured %}
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

<div class="coursework-section">
  <h2 class="coursework-heading">Earlier &amp; Coursework</h2>
  <ul class="coursework-list">
    <li>
      <a href="https://github.com/berfinito/Travelling-Salesman-Problem" target="_blank" rel="noopener">Travelling Salesman Problem — Heuristic Solvers</a>
      <span class="coursework-meta">Java · Algorithms · exact and heuristic approaches (brute force, nearest neighbour, simulated annealing)</span>
    </li>
    <li>
      <a href="https://github.com/berfinito/The-Reader-Writer-Problem" target="_blank" rel="noopener">The Reader-Writer Problem</a>
      <span class="coursework-meta">Java · Concurrency · semaphore-based synchronisation, deadlock and starvation prevention</span>
    </li>
    <li>
      <a href="https://github.com/berfinito/Plagiarism-Detector" target="_blank" rel="noopener">Plagiarism Detector</a>
      <span class="coursework-meta">Python · NLP · document similarity using multiple metrics and fingerprinting</span>
    </li>
    <li>
      <a href="https://github.com/berfinito/P2P-File-Sharing-Application" target="_blank" rel="noopener">P2P File Sharing Application</a>
      <span class="coursework-meta">Python · Networking · central tracker, chunked file transfer, concurrent peers</span>
    </li>
  </ul>
</div>
