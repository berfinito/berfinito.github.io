---
layout: page
title: About
label: About me
toc: false
description: "ML/AI and backend engineer based in Leeds. MSc CS & AI (Distinction). Background in .NET Core, NLP, LLM fine-tuning, and production systems."
permalink: /about/
---

<div class="about-intro">
  <div class="about-avatar-col">
    <img src="/assets/images/profile.jpg"
         alt="Berfin Celik"
         class="about-avatar" />
    <a class="cv-download" href="/assets/cv.pdf" download aria-label="Download CV as PDF">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
      Download CV
      <span class="cv-format">PDF</span>
    </a>
  </div>
  <div class="about-text">
    <p>
      I'm Berfin, an engineer working across backend systems and machine learning, based in Leeds.
    </p>
    <p>
      I studied Computer Engineering at Bahçeşehir University in
      Istanbul, graduating in 2021. Alongside my studies I worked
      as a student assistant in the engineering faculty, helping
      with lab sessions and course preparation. During my final
      year I interned at Turkuvaz Media Group, one of Turkey's
      largest media conglomerates, where I worked in IT supporting
      the infrastructure and internal systems of an organisation
      operating at real scale.
    </p>
    <p>
      After graduating I joined Argevi as a software engineer,
      building the backend of a real-time industrial automation system,
      the kind that routes items along warehouse conveyor lines. The project I
      remember most from that time is implementing OPC communication,
      an industrial protocol the company had wanted to use but had not.
      We started from scratch, figured it out, and got it into production.
    </p>
    <p>
      I then joined Path as a .NET developer, where I worked across
      several projects with different technology stacks. One of them
      was a school portal system I was part of from the very beginning.
      I was involved at every stage, from architecture through to
      backend services, caching, and deployment. The kind of project
      where you see the full picture, not just one slice of it.
    </p>
    <p>
      I moved to Leeds to do an MSc in Computer Science and Artificial
      Intelligence at the University of Bradford and graduated with a
      Distinction. I wanted to understand AI properly, not just work
      around it. What I found is that ML engineering and backend
      engineering ask the same questions: what breaks, what scales,
      what you can actually ship.
    </p>
    <p>
      Since graduating I have been building and shipping projects
      independently. The work listed on this site covers that period.
    </p>
  </div>

</div>

---

## Education

<div class="timeline">

  <div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-body">
      <div class="timeline-period">2024 - 2025</div>
      <div class="timeline-title">MSc Computer Science &amp; Artificial Intelligence
        <span class="timeline-badge distinction">Distinction</span>
      </div>
      <div class="timeline-place">University of Bradford · Bradford, UK</div>
      <p class="timeline-desc">
        Focused on machine learning, deep learning, and NLP. Dissertation on
        multidialectal knowledge extraction using transformer-based ASR and
        graph-based QA pipelines — applied to low-resource Kurdish and Zaza dialects.
        <a href="https://drive.google.com/file/d/101f6homY0t8RSTQa8xnR7OxRQUSyPWfD/view" target="_blank" rel="noopener">Read the dissertation (PDF)</a>
      </p>
    </div>
  </div>

  <div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-body">
      <div class="timeline-period">2016 - 2021</div>
      <div class="timeline-title">BSc Computer Engineering</div>
      <div class="timeline-place">Bahçeşehir University · Istanbul, Turkey</div>
      <p class="timeline-desc">
        Core foundations in algorithms, systems programming, databases, and software
        engineering. Relevant courses included Computer Networks and Network Engineering,
        covering TCP/IP, routing protocols, socket-level programming, and network
        security fundamentals.
      </p>
    </div>
  </div>

</div>

---

## Experience

<div class="timeline">

  <div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-body">
      <div class="timeline-period">Dec 2023 - May 2024</div>
      <div class="timeline-title">Junior .NET Developer</div>
      <div class="timeline-place">Path Product &amp; Software House · Istanbul, TR</div>
      <p class="timeline-desc">
        Developed a large-scale school management platform end to end for post-pandemic
        hybrid (online and in-person) teaching, covering course scheduling, learning
        materials, assessments and grading, and automated question generation. Implemented
        the platform's multi-layered microservices architecture based on Onion Architecture,
        using RabbitMQ for messaging between services, with Redis distributed caching and
        Docker. Documented and tested APIs with Swagger.
      </p>
      <div class="post-tags" style="margin-top:.6rem;">
        <span class="tag">C#</span>
        <span class="tag">.NET Core</span>
        <span class="tag">RabbitMQ</span>
        <span class="tag">Redis</span>
        <span class="tag">Docker</span>
        <span class="tag">Swagger</span>
      </div>
    </div>
  </div>

  <div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-body">
      <div class="timeline-period">Mar 2022 - Jun 2023</div>
      <div class="timeline-title">Software Engineer</div>
      <div class="timeline-place">Argevi Software &amp; Automation · Istanbul, TR</div>
      <p class="timeline-desc">
        Built the backend of a real-time industrial automation system for warehouse-scale
        conveyor logistics using .NET Core and .NET Framework: processed live barcode
        signals from PLCs and returned categorisation and routing decisions directing each
        item to the correct chute. Developed live monitoring with real-time screens for
        item flow, vehicle and gate status, and built operational dashboards with
        Elasticsearch, Logstash, and Kibana. Led a 6-month R&amp;D effort that adapted
        the OPC industrial protocol into the company's stack. Designed efficient database
        schemas and optimised queries on high-traffic workloads.
      </p>
      <div class="post-tags" style="margin-top:.6rem;">
        <span class="tag">.NET Core</span>
        <span class="tag">.NET Framework</span>
        <span class="tag">PLC</span>
        <span class="tag">Elasticsearch</span>
        <span class="tag">Kibana</span>
        <span class="tag">OPC</span>
      </div>
    </div>
  </div>

  <div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-body">
      <div class="timeline-period">Dec 2020 - Mar 2021</div>
      <div class="timeline-title">IT Intern</div>
      <div class="timeline-place">Turkuvaz Media Group · Istanbul, TR</div>
      <p class="timeline-desc">
        Supported infrastructure and internal tooling for one of Turkey's largest
        media conglomerates. Gained hands-on experience with enterprise IT systems,
        network configuration, and operational workflows.
      </p>
    </div>
  </div>

  <div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-body">
      <div class="timeline-period">Nov 2019 - Mar 2020</div>
      <div class="timeline-title">Student Assistant</div>
      <div class="timeline-place">Bahçeşehir University Engineering Faculty · Istanbul, TR</div>
      <p class="timeline-desc">
        Assisted faculty with lab sessions, course material preparation, and student
        support in the Engineering Faculty.
      </p>
    </div>
  </div>

</div>

---

## Technologies

<div class="tech-cloud">
  <div class="tech-group">
    <span class="tech-group-label">Languages</span>
    <div class="post-tags">
      <span class="tag tag-primary">Python</span>
      <span class="tag tag-primary">SQL</span>
      <span class="tag tag-primary">C#</span>
      <span class="tag tag-primary">.NET Core</span>
      <span class="tag">C</span>
      <span class="tag">C++</span>
      <span class="tag">TypeScript</span>
      <span class="tag">Java</span>
      <span class="tag">Bash</span>
      <span class="tag">JavaScript</span>
    </div>
  </div>
  <div class="tech-group">
    <span class="tech-group-label">ML / Deep Learning</span>
    <div class="post-tags">
      <span class="tag tag-primary">PyTorch</span>
      <span class="tag tag-primary">HuggingFace Transformers</span>
      <span class="tag tag-primary">scikit-learn</span>
      <span class="tag tag-primary">PEFT / LoRA</span>
      <span class="tag">accelerate</span>
      <span class="tag">sentence-transformers</span>
      <span class="tag">BERTopic</span>
      <span class="tag">spaCy</span>
      <span class="tag">FAISS</span>
      <span class="tag">NetworkX</span>
      <span class="tag">Gradio</span>
    </div>
  </div>
  <div class="tech-group">
    <span class="tech-group-label">Audio &amp; NLP</span>
    <div class="post-tags">
      <span class="tag tag-primary">Whisper</span>
      <span class="tag tag-primary">librosa</span>
      <span class="tag">torchaudio</span>
      <span class="tag">Wav2Vec2</span>
    </div>
  </div>
  <div class="tech-group">
    <span class="tech-group-label">Data</span>
    <div class="post-tags">
      <span class="tag tag-primary">pandas</span>
      <span class="tag">numpy</span>
    </div>
  </div>
  <div class="tech-group">
    <span class="tech-group-label">Backend</span>
    <div class="post-tags">
      <span class="tag tag-primary">ASP.NET</span>
      <span class="tag tag-primary">FastAPI</span>
      <span class="tag">REST APIs</span>
      <span class="tag">Swagger</span>
      <span class="tag">RabbitMQ</span>
      <span class="tag">OPC / TCP-IP</span>
    </div>
  </div>
  <div class="tech-group">
    <span class="tech-group-label">Databases</span>
    <div class="post-tags">
      <span class="tag tag-primary">PostgreSQL</span>
      <span class="tag tag-primary">Redis</span>
      <span class="tag">MySQL</span>
      <span class="tag">SQLite</span>
    </div>
  </div>
  <div class="tech-group">
    <span class="tech-group-label">DevOps &amp; Monitoring</span>
    <div class="post-tags">
      <span class="tag tag-primary">Docker</span>
      <span class="tag tag-primary">GitHub Actions</span>
      <span class="tag">Elasticsearch</span>
      <span class="tag">Logstash</span>
      <span class="tag">Kibana</span>
    </div>
  </div>
  <div class="tech-group">
    <span class="tech-group-label">Cloud &amp; Infra</span>
    <div class="post-tags">
      <span class="tag tag-primary">GCP</span>
    </div>
  </div>
</div>

---

## Languages

<div class="lang-list">
  <div class="lang-item">
    <div class="lang-name">English</div>
    <div class="lang-level">Proficient&nbsp;<span class="lang-note">C1</span></div>
  </div>
  <div class="lang-item">
    <div class="lang-name">Turkish</div>
    <div class="lang-level">Native&nbsp;<span class="lang-note">C2</span></div>
  </div>
</div>

---

## Certifications

<p class="cert-section-label">ML Specialisation (2026)</p>

<div class="cert-block">
  <div class="cert-entry">
    <div class="cert-title">IBM — Generative AI Language Modeling with Transformers</div>
    <div class="cert-issuer">Coursera · Jul 2026</div>
    <a href="https://coursera.org/verify/CLOUK490VF4L" target="_blank" rel="noopener" class="cert-verify">Verify ↗</a>
  </div>
  <div class="cert-entry">
    <div class="cert-title">IBM — Introduction to Neural Networks and PyTorch</div>
    <div class="cert-issuer">Coursera · Jul 2026</div>
    <a href="https://coursera.org/verify/WKAQD4LAZB1Q" target="_blank" rel="noopener" class="cert-verify">Verify ↗</a>
  </div>
</div>

<p class="cert-section-label" style="margin-top:1.5rem;">Foundations (2023–2024)</p>

<ul class="cert-list-simple">
  <li>IBM — Introduction to Artificial Intelligence (AI) · Aug 2024 · <a href="https://coursera.org/verify/0EX6GPBWPMFF" target="_blank" rel="noopener">Verify ↗</a></li>
  <li>IBM — Introduction to Software Engineering · Aug 2024 · <a href="https://coursera.org/verify/QA24L68WR9WV" target="_blank" rel="noopener">Verify ↗</a></li>
  <li>IBM — Getting Started with Git and GitHub · Aug 2023 · <a href="https://coursera.org/verify/74S52WHGE4DN" target="_blank" rel="noopener">Verify ↗</a></li>
  <li>Meta — Introduction to Back-End Development · Aug 2023 · <a href="https://coursera.org/verify/5QJJJUGN43UN" target="_blank" rel="noopener">Verify ↗</a></li>
  <li>Meta — Introduction to Front-End Development · Aug 2023 · <a href="https://coursera.org/verify/BHN4FKF9XV5Y" target="_blank" rel="noopener">Verify ↗</a></li>
  <li>Meta — Introduction to Databases · Aug 2023 · <a href="https://coursera.org/verify/45RVRDUAZP5Q" target="_blank" rel="noopener">Verify ↗</a></li>
  <li>Meta — Introduction to Databases for Back-End Development · Aug 2023 · <a href="https://coursera.org/verify/M2356MX48GB3" target="_blank" rel="noopener">Verify ↗</a></li>
</ul>

