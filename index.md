---
layout: default
title: Home
---

<section class="hero">

  <p class="hero-prompt">whoami</p>
  <h1>Berfin Celik</h1>

  <dl class="hero-data">
    <div class="hero-data-row">
      <dt>role</dt>
      <dd>ML / AI Engineer</dd>
    </div>
    <div class="hero-data-row">
      <dt>based</dt>
      <dd>Leeds, UK</dd>
    </div>
    <div class="hero-data-row">
      <dt>focus</dt>
      <dd>NLP &nbsp;&middot;&nbsp; LLMs &nbsp;&middot;&nbsp; Production ML</dd>
    </div>
    <div class="hero-data-row">
      <dt>status</dt>
      <dd><span class="hero-status-dot"></span>open to work &mdash; Graduate Route visa</dd>
    </div>
  </dl>

  <div class="hero-social">
    <a href="https://github.com/berfinito"
       target="_blank" rel="noopener"
       class="social-pill" aria-label="GitHub">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483
                 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466
                 -.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832
                 .092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688
                 -.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004
                 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651
                 .64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855
                 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017
                 C22 6.484 17.522 2 12 2z"/>
      </svg>
      github.com/berfinito
    </a>
    <a href="https://linkedin.com/in/berfinito"
       target="_blank" rel="noopener"
       class="social-pill" aria-label="LinkedIn">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853
                 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9
                 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337
                 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782
                 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542
                 C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729
                 C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
      linkedin.com/in/berfinito
    </a>
    <a href="mailto:berfincelik0@outlook.com" class="social-pill" aria-label="Email">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
      berfincelik0@outlook.com
    </a>
  </div>

</section>

<section class="metrics-bar">
  <div class="metric-item">
    <div class="metric-num" data-target="96.4">96.4<span style="font-size:0.7em">%</span></div>
    <div class="metric-label">Deepfake detection accuracy</div>
  </div>
  <div class="metric-item">
    <div class="metric-num" data-target="220">220K<span style="font-size:0.7em">+</span></div>
    <div class="metric-label">Audio samples processed</div>
  </div>
  <div class="metric-item">
    <div class="metric-num" data-target="600">600<span style="font-size:0.7em">+</span></div>
    <div class="metric-label">QA pairs generated</div>
  </div>
  <div class="metric-item">
    <div class="metric-num" data-target="8.3">8.3<span style="font-size:0.7em">%</span></div>
    <div class="metric-label">Turkish ASR WER</div>
  </div>
  <div class="metric-item">
    <div class="metric-num" data-target="7">7</div>
    <div class="metric-label">Projects shipped</div>
  </div>
</section>

<section class="home-section">

  <div class="section-header">
    <h2 class="section-title">
      <span class="section-title-prefix">// </span>Selected Projects
    </h2>
    <a href="/projects/" class="section-link">All projects &rarr;</a>
  </div>

  {% assign featured_all = site.projects | where: "featured", true | sort: "date" | reverse %}
  {% if featured_all.size == 0 %}
    {% assign featured_all = site.projects | sort: "date" | reverse %}
  {% endif %}

  <div class="card-grid">
    {% assign shown = 0 %}
    {% for project in featured_all %}{% if shown < 3 %}
    {% assign shown = shown | plus: 1 %}
    <div class="card">
      {% if project.label %}
        <span class="card-label">{{ project.label }}</span>
      {% elsif project.tags.size > 0 %}
        <span class="card-label">{{ project.tags | first }}</span>
      {% endif %}
      <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
      {% if project.description %}
        <p class="card-desc">{{ project.description }}</p>
      {% elsif project.excerpt %}
        <p class="card-desc">{{ project.excerpt | strip_html | truncate: 120 }}</p>
      {% endif %}
      <div class="card-footer">
        {% if project.tags %}
          <div class="post-tags">
            {% for tag in project.tags limit: 3 %}
              <span class="tag">{{ tag }}</span>
            {% endfor %}
          </div>
        {% endif %}
        {% if project.github %}
          <a href="{{ project.github }}" target="_blank" rel="noopener"
             class="btn btn-ghost" style="padding:.3rem .7rem;font-size:.75rem;">
            GitHub &rarr;
          </a>
        {% endif %}
      </div>
    </div>
    {% endif %}{% endfor %}
  </div>

</section>
