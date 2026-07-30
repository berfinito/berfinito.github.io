---
layout: page
title: "Plagiarism Detector"
label: NLP · Text Processing
description: >-
  A text similarity engine that detects potential plagiarism by comparing documents
  using multiple similarity metrics and fingerprinting techniques.
tags:
  - Python
  - NLP
  - Text Similarity
  - TF-IDF
featured: false
date: 2022-01-16
github: https://github.com/berfinito/Plagiarism-Detector
---

## Overview

A document comparison tool that identifies potential plagiarism between a submitted
text and a reference corpus. Built as a BSc coursework project, it implements
multiple classical text similarity approaches and compares their effectiveness.

## Approach

### Preprocessing pipeline

- Tokenisation, lowercasing, punctuation removal
- Stopword filtering (NLTK English stopword list)
- Stemming (Porter Stemmer) for vocabulary normalisation

### Similarity methods implemented

| Method | Description |
|---|---|
| **TF-IDF cosine similarity** | Weighted term frequency vectors compared with cosine distance |
| **Jaccard similarity** | Set-based overlap of unique token sets |
| **n-gram fingerprinting** | Winnowing algorithm for robust substring matching |

### Output

- Similarity score (0–1) for each method
- Highlighted overlapping passages
- Summary report with flagged sections

## Stack

```
Language   : Python
NLP        : NLTK · scikit-learn (TF-IDF)
Analysis   : pandas · numpy
```
