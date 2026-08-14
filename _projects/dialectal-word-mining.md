---
layout: page
title: "Dialectal Word Mining & Knowledge Graph"
label: NLP · Linguistics
description: >-
  Extracts vocabulary and semantic relations from Turkish dialects using multiple
  NLP models, then builds a relational knowledge graph from the mined sentences.
tags:
  - Python
  - Jupyter
  - NLP
  - Knowledge Graph
  - NetworkX
featured: true
order: 4
github: https://github.com/berfinito/dialectalwordmining
---

## Overview

An NLP research project exploring how different language models perform at extracting
meaningful words and semantic relations from dialectal Turkish text. The extracted
entities and relationships are then organised into a relational knowledge graph,
enabling structured exploration of cross-dialect vocabulary.

## What it does

- **Model comparison** — tests multiple NLP models on dialectal word extraction tasks
  to benchmark which architectures handle low-resource dialect variation best
- **Sentence extraction** — pulls semantically relevant sentences from raw dialectal
  corpora based on extracted keyword anchors
- **Knowledge graph construction** — connects extracted entities and relations into
  a queryable graph structure using NetworkX

## Relation to MSc Dissertation

This project is a focused sub-investigation that fed into the broader
[Multidialectal NLP Pipeline](/projects/multilingual-nlp/) dissertation work.
Where the dissertation covered ASR and topic modelling across three languages,
this project zooms in on the word-level mining and graph-building pipeline
specifically for Turkish dialects spoken in Turkey.

## Stack

```
NLP        : Hugging Face Transformers · spaCy
Graph      : NetworkX
Notebooks  : Jupyter
Language   : Python
```
