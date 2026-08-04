---
layout: page
title: "Credit Card Fraud Detection"
label: MLOps · Cloud
description: >-
  Cloud-native fraud detection pipeline on GCP. End-to-end MLOps with
  CI/CD, GDPR-compliant data handling, and real-time inference under 50 ms.
tags:
  - GCP
  - MLOps
  - CI/CD
  - Python
  - BigQuery
  - Docker
status: completed
featured: true
date: 2023-11-01
---

## Overview

A production-grade credit card fraud detection system built entirely on
Google Cloud Platform. The project emphasises MLOps practices — automated
retraining, model versioning, drift monitoring, and GDPR-compliant
data governance — as much as the model itself.

## Problem

Fraud detection is a classic imbalanced classification problem with
hard operational constraints: inference must be fast enough to sit in the
authorisation path (< 100 ms), and the system must be auditable for
regulatory compliance. Most ML tutorials solve the notebook version;
this project solves the production version.

## Data

- Synthetic transaction dataset (500k rows) generated from a realistic
  distribution (Sparkov Data Generation), supplemented with the public
  IEEE-CIS Fraud Detection dataset
- Fraud prevalence: ~0.17 % (highly imbalanced)
- PII fields pseudonymised at ingest using a keyed hash; raw PII never
  written to storage — GDPR by design

## Pipeline

```
Raw transactions
      │
      ▼
Cloud Storage (raw zone, encrypted at rest)
      │
      ▼ Cloud Dataflow (Apache Beam)
Feature engineering (BigQuery)
      │
      ├── Offline store → Vertex AI Feature Store
      └── Online store → Cloud Bigtable (< 10 ms read)
            │
            ▼
      Model training (Vertex AI Training)
            │
            ▼
      Model Registry (Vertex AI)
            │
            ▼
      Vertex AI Endpoint (real-time inference)
```

## Model

- Baseline: Logistic Regression (SMOTE-resampled)
- Final: **LightGBM** with class-weight balancing and threshold tuning
- Feature set: 42 engineered features (velocity counts, time-since-last-tx,
  merchant risk score, card-not-present flags)
- Threshold set at 0.35 (optimised for F2-score, recall-weighted)

| Metric | Score |
|---|---|
| AUPRC | 0.89 |
| Recall (fraud) | 91.2 % |
| Precision (fraud) | 83.7 % |
| F2-score | 0.896 |
| P95 inference latency | 47 ms |

## MLOps setup

### CI/CD (GitHub Actions → Cloud Build)

- `pytest` unit + integration tests on every PR
- Data validation with **Great Expectations** on every pipeline run
- Model promoted to production only if AUPRC ≥ 0.85 on evaluation set
- Blue/green deployment: new model shadow-serves for 24 h before cut-over

### Monitoring

- Feature drift: KL-divergence tracked hourly via Cloud Monitoring
- Prediction drift: PSI score on score distribution, alert at PSI > 0.2
- Automated retraining triggered when drift thresholds are breached

### Compliance

- Data lineage tracked in **Dataplex**
- Model cards generated automatically at each promotion
- Audit log for every inference decision (Cloud Logging, 90-day retention)

## Stack

```
Cloud      : GCP — Vertex AI, BigQuery, Cloud Storage, Dataflow, Bigtable
ML         : LightGBM · scikit-learn · imbalanced-learn
MLOps      : Vertex AI Pipelines · Vertex AI Feature Store · Great Expectations
CI/CD      : GitHub Actions · Cloud Build
Monitoring : Cloud Monitoring · Dataplex
IaC        : Terraform
```
