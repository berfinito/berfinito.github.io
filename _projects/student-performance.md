---
layout: page
title: "Student Performance Prediction"
label: ML · Cloud
description: >-
  Decision Tree classifier to identify at-risk students. 88% accuracy,
  SMOTE for class imbalance, deployed to Google Cloud Run via FastAPI.
tags:
  - Python
  - Scikit-learn
  - SMOTE
  - GCP
  - FastAPI
  - Docker
status: completed
featured: false
date: 2024-06-01
github: https://github.com/berfinito
---

## Overview

A binary classifier trained on Kaggle student performance data to identify
students at risk of academic underperformance. The project emphasises
handling class imbalance and deploying a production-ready inference API.

## Problem

At-risk student identification is a classic imbalanced classification problem:
underperforming students are a minority class, so naive models simply predict
"not at risk" and still achieve high accuracy. The model needs to prioritise
recall for the minority class.

## Approach

- **Model:** Decision Tree (chosen for interpretability — educators need to
  understand why a student is flagged, not just that they are)
- **Class imbalance:** Applied SMOTE (Synthetic Minority Oversampling Technique)
  to the training set to balance class distribution
- **Validation:** Stratified k-fold cross-validation to ensure reliable estimates
  on the small dataset

## Results

| Metric | Score |
|---|---|
| Accuracy | 88% |
| Recall (at-risk class) | 84% |

## Deployment

- REST API built with **FastAPI**
- Containerised with **Docker** (multi-stage build)
- Deployed to **Google Cloud Run** for serverless scaling

## Stack

```
Modelling  : Scikit-learn · pandas · imbalanced-learn (SMOTE)
Serving    : FastAPI · Docker
Cloud      : Google Cloud Run
```
