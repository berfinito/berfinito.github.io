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
    Things I've built, researched, or shipped.
  </p>
</div>

<div class="card-grid">
  {% assign featured = site.projects | where: "featured", true | sort: "order" %}
  {% for project in featured %}
    <div class="card">

      {% if project.label %}
        <span class="card-lang">{{ project.label }}</span>
      {% elsif project.tags.size > 0 %}
        <span class="card-lang">{{ project.tags | first }}</span>
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

<div class="coursework-section">
  <h2 class="coursework-heading">Earlier &amp; Coursework</h2>
  <ul class="coursework-list">

    <li>
      <a href="https://github.com/berfinito/3-cushion-billard-game" target="_blank" rel="noopener">3-Cushion Billiards Game</a>
      <span class="coursework-meta">Two-player billiards simulation with a physics engine and online multiplayer via a Java client-server architecture.</span>
    </li>

    <li>
      <a href="https://github.com/berfinito/MapApp" target="_blank" rel="noopener">EV Chargepoint Map App</a>
      <span class="coursework-meta">Android app that displays EV chargepoint locations across West Yorkshire on an interactive map, with user auth, admin panel, and CSV data import.</span>
    </li>

    <li>
      <a href="https://github.com/berfinito/Web-Programming-Project" target="_blank" rel="noopener">Web Programming Project</a>
      <span class="coursework-meta">Java Spring Boot MVC application with a database-backed post system, custom validation, and internationalisation support.</span>
    </li>

    <li>
      <a href="https://github.com/berfinito/Travelling-Salesman-Problem" target="_blank" rel="noopener">Travelling Salesman Problem</a>
      <span class="coursework-meta">Java; implements and compares exact and heuristic solvers (greedy, nearest-neighbour, divide-and-conquer) on a 47-city dataset.</span>
    </li>

    <li>
      <a href="https://github.com/berfinito/The-Reader-Writer-Problem" target="_blank" rel="noopener">The Reader-Writer Problem</a>
      <span class="coursework-meta">Java; semaphore-based solution to the concurrent reader-writer problem with deadlock and starvation prevention.</span>
    </li>

    <li>
      <a href="https://github.com/berfinito/Plagiarism-Detector" target="_blank" rel="noopener">Plagiarism Detector</a>
      <span class="coursework-meta">C++; detects document similarity using multiple comparison metrics and fingerprinting techniques.</span>
    </li>

    <li>
      <a href="https://github.com/berfinito/P2P-File-Sharing-Application" target="_blank" rel="noopener">P2P File Sharing Application</a>
      <span class="coursework-meta">Python; peer-to-peer file sharing over LAN with auto-discovery of peers, chunked transfer, and concurrent upload/download.</span>
    </li>

  </ul>
</div>
