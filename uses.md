---
layout: page
title: Uses / My Setup
label: Setup
description: Tools and software I reach for every day.
permalink: /uses/
---

_Inspired by [uses.tech](https://uses.tech). Last updated {{ site.time | date: "%B %Y" }}._

---

<div class="uses-section">
<h2>// Editor &amp; Terminal</h2>
<div class="uses-grid">

  <div class="uses-item">
    <div class="uses-item-name">Visual Studio Code</div>
    <div class="uses-item-desc">
      Primary editor. Extensions: Pylance, Ruff, GitLens, GitHub Copilot,
      Docker, Remote — SSH.
    </div>
  </div>

  <div class="uses-item">
    <div class="uses-item-name">Git</div>
    <div class="uses-item-desc">
      Version control for everything — code, notebooks, data schemas,
      even this site.
    </div>
  </div>

  <div class="uses-item">
    <div class="uses-item-name">GitHub</div>
    <div class="uses-item-desc">
      Remote repos, GitHub Actions CI/CD, GitHub Copilot, Projects
      for lightweight task tracking.
    </div>
  </div>

  <div class="uses-item">
    <div class="uses-item-name">Terminal (zsh)</div>
    <div class="uses-item-desc">
      Oh My Zsh, Starship prompt. Aliases for every project's venv activate,
      docker compose up, and kubectl context switch.
    </div>
  </div>

</div>
</div>

<div class="uses-section">
<h2>// ML &amp; Data</h2>
<div class="uses-grid">

  <div class="uses-item">
    <div class="uses-item-name">Python</div>
    <div class="uses-item-desc">
      3.11+. The only language I reach for without thinking twice for ML work.
      uv for fast dependency resolution.
    </div>
  </div>

  <div class="uses-item">
    <div class="uses-item-name">PyTorch</div>
    <div class="uses-item-desc">
      Primary deep learning framework. Prefer it over TF for flexibility
      during research and the training loop control.
    </div>
  </div>

  <div class="uses-item">
    <div class="uses-item-name">Hugging Face</div>
    <div class="uses-item-desc">
      Transformers, Datasets, PEFT, Evaluate. Hub for model sharing
      and Spaces for quick demos.
    </div>
  </div>

  <div class="uses-item">
    <div class="uses-item-name">Jupyter</div>
    <div class="uses-item-desc">
      JupyterLab for exploration and EDA. Production code always moves
      to .py — notebooks aren't for production.
    </div>
  </div>

  <div class="uses-item">
    <div class="uses-item-name">Anaconda / conda</div>
    <div class="uses-item-desc">
      Environment management, especially for GPU projects where CUDA
      version pinning matters.
    </div>
  </div>

</div>
</div>

<div class="uses-section">
<h2>// Cloud &amp; DevOps</h2>
<div class="uses-grid">

  <div class="uses-item">
    <div class="uses-item-name">Docker</div>
    <div class="uses-item-desc">
      Everything runs in a container. Multi-stage builds to keep
      ML serving images lean. Compose for local development stacks.
    </div>
  </div>

  <div class="uses-item">
    <div class="uses-item-name">Kubernetes</div>
    <div class="uses-item-desc">
      Orchestration for model serving. GKE in production; k3d locally
      for integration testing without a full cloud spend.
    </div>
  </div>

  <div class="uses-item">
    <div class="uses-item-name">GCP</div>
    <div class="uses-item-desc">
      Vertex AI for training and serving, BigQuery for analytical workloads,
      Cloud Storage, Dataflow. Primary cloud for ML projects.
    </div>
  </div>

  <div class="uses-item">
    <div class="uses-item-name">AWS</div>
    <div class="uses-item-desc">
      SageMaker, S3, ECR, Lambda. Useful when the team is already
      AWS-native or when SageMaker managed training makes sense.
    </div>
  </div>

  <div class="uses-item">
    <div class="uses-item-name">GitHub Actions</div>
    <div class="uses-item-desc">
      CI/CD for model pipelines — test, lint, build image, push to
      registry, trigger retraining on data changes.
    </div>
  </div>

</div>
</div>

<div class="uses-section">
<h2>// Hardware</h2>
<div class="uses-grid">

  <div class="uses-item">
    <div class="uses-item-name">Laptop</div>
    <div class="uses-item-desc">
      Daily driver for coding, writing, and running small experiments.
      Heavy training runs go to the cloud.
    </div>
  </div>

  <div class="uses-item">
    <div class="uses-item-name">External Monitor</div>
    <div class="uses-item-desc">
      4K IPS panel. Side-by-side code and documentation is non-negotiable
      for deep work.
    </div>
  </div>

  <div class="uses-item">
    <div class="uses-item-name">Mechanical Keyboard</div>
    <div class="uses-item-desc">
      Tactile switches. Typing feel matters more than people admit.
    </div>
  </div>

  <div class="uses-item">
    <div class="uses-item-name">Noise-Cancelling Headphones</div>
    <div class="uses-item-desc">
      Non-negotiable for open-plan offices and long training run monitoring sessions.
    </div>
  </div>

</div>
</div>
