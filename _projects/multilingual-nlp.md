---
layout: page
title: "Multidialectal NLP Pipeline (MSc Dissertation)"
label: NLP · Research
description: >-
  ASR, topic modelling, and knowledge graph construction for Turkish, Kurmanji,
  and Zazaki — three languages with minimal NLP resources. MSc distinction project.
tags:
  - Whisper
  - Wav2Vec2
  - BERTopic
  - NetworkX
  - Python
  - NLP
status: completed
featured: true
date: 2023-08-01
github: https://github.com/berfinito/MultidialectalKnowledgeExtraction
---

## Overview

MSc dissertation project. A full NLP pipeline for three closely related but
linguistically distinct languages spoken in Turkey and northern Iraq:
**Turkish**, **Kurmanji Kurdish**, and **Zazaki**. All three are
low-resource — existing NLP tooling for Kurmanji and Zazaki is sparse,
and cross-dialect transfer is not well studied.

The pipeline covers automatic speech recognition (ASR), topic discovery,
and knowledge graph construction from the transcribed and analysed text.

## Motivation

Most multilingual NLP research focuses on high-resource languages or
treats languages with shared geographic and cultural context as
independent problems. This project investigates how shared linguistic
features across related dialects can be leveraged when resources are scarce.

## Pipeline stages

### Stage 1 — Automatic Speech Recognition

**Turkish** (higher-resource path):
- Fine-tuned `openai/whisper-medium` on Mozilla Common Voice 13 Turkish subset
- WER on held-out test: **8.3 %** (baseline whisper-medium: 12.1 %)

**Kurmanji & Zazaki** (low-resource path):
- Used `facebook/wav2vec2-large-xlsr-53` as multilingual base
- Applied transfer learning from Turkish checkpoint before Kurmanji/Zazaki fine-tuning
- Kurmanji WER: **19.4 %** (no pretrained Kurmanji checkpoint existed for comparison)
- Zazaki WER: **24.7 %** (similarly no prior baseline)

Training details:
- CTC loss, AdamW, linear warmup over 10 % of steps
- Data augmentation: speed perturbation (0.9×, 1.1×), SpecAugment

### Stage 2 — Topic modelling (BERTopic)

- Transcripts segmented into utterance-level chunks
- Multilingual sentence embeddings: `paraphrase-multilingual-mpnet-base-v2`
- **BERTopic** with HDBSCAN clustering and UMAP dimensionality reduction
- Identified 31 coherent topics across the corpus
- Cross-language topic alignment: cosine similarity between topic centroid
  embeddings revealed 14 semantically equivalent topics shared across all
  three languages

### Stage 3 — Knowledge graph construction

- Entity extraction: multilingual NER (XLM-RoBERTa fine-tuned on WikiANN)
- Relation extraction: rule-based patterns + dependency parsing (spaCy + custom
  Kurmanji/Zazaki rules)
- Graph built with **NetworkX**; exported to GraphML and visualised with Gephi
- Graph statistics: 2,847 nodes, 6,193 edges, average clustering coefficient 0.34
- Community detection (Louvain algorithm) revealed dialect-specific and
  cross-dialect knowledge clusters

## Key findings

- Transfer learning from Turkish significantly improves Kurmanji ASR compared
  to training from the XLSR multilingual base alone (WER gap: ~8 pp)
- BERTopic topic alignment across dialects shows substantial conceptual overlap
  in domains of family, agriculture, and governance — consistent with shared
  cultural history
- Knowledge graph communities map partially onto geographic dialect boundaries

## Limitations & future work

- Kurmanji and Zazaki data is limited (~12 h total); WER would improve substantially
  with larger corpora
- Relation extraction relies heavily on rules; a dedicated Kurmanji/Zazaki
  relation extraction model would improve graph quality
- The pipeline does not yet handle code-switching, which is common in practice

## Stack

```
ASR        : openai-whisper · facebook/wav2vec2-large-xlsr-53 · Hugging Face
Topic      : BERTopic · UMAP · HDBSCAN · sentence-transformers
Graph      : NetworkX · spaCy · XLM-RoBERTa · Gephi
Data       : Mozilla Common Voice · custom scraped corpora
Training   : PyTorch · Hugging Face Trainer · PEFT
```

## Outcome

Awarded **Distinction** as part of the MSc Artificial Intelligence degree
at the University of Bradford. Submitted August 2023.
