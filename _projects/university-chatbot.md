---
layout: page
title: "University Chatbot — LLM Fine-Tuning & RAG"
label: NLP · LLM
description: >-
  Domain-specific chatbot for university FAQs. Benchmarked 4 models,
  fine-tuned with QLoRA, and deployed to Hugging Face Spaces via a RAG pipeline.
tags:
  - LLaMA 2
  - DeepSeek
  - QLoRA
  - FAISS
  - Hugging Face
  - Python
status: completed
featured: true
order: 2
github: https://github.com/berfinito/Chatbot
---

## Overview

A question-answering chatbot built specifically for university support queries.
The system combines retrieval-augmented generation (RAG) with a fine-tuned LLM
to answer student questions accurately without hallucinating policy details.

## Problem

University support teams handle hundreds of repetitive queries — deadlines,
module registrations, academic policies. Generic LLMs either hallucinate
institution-specific rules or refuse to answer. The goal was a model that
knows the university's actual documentation and stays within it.

## Approach

### Dataset

- Curated **600+ QA pairs** from official university documentation, student
  handbooks, and anonymised support ticket logs
- Applied data augmentation (paraphrase, back-translation) to handle query variation
- Stored as a structured JSONL corpus for reproducible training and retrieval

### Model benchmarking

Evaluated four models before committing to fine-tuning:

| Model | BLEU | ROUGE-L | Latency |
|---|---|---|---|
| LLaMA 2 7B (base) | 0.31 | 0.44 | 420 ms |
| DeepSeek 7B (base) | 0.29 | 0.41 | 390 ms |
| LLaMA 2 7B + QLoRA | **0.51** | **0.63** | 435 ms |
| DeepSeek 7B + QLoRA | 0.48 | 0.60 | 400 ms |

LLaMA 2 fine-tuned with QLoRA was selected for its accuracy/latency balance.

### Fine-tuning (QLoRA)

- Applied **QLoRA** (4-bit quantisation + LoRA adapters) to fit training within
  a single 24 GB GPU
- Rank `r=16`, alpha `32`, target modules: `q_proj`, `v_proj`
- 3 epochs, cosine LR schedule, gradient checkpointing
- Used **Hugging Face PEFT** + **bitsandbytes**

### RAG pipeline

- Documents chunked with a sliding window (512 tokens, 64 overlap)
- Embedded with `sentence-transformers/all-MiniLM-L6-v2`
- Vector store: **FAISS** (flat L2 index, top-k = 5 neighbours)
- Retrieved chunks injected into system prompt before generation

### Deployment

- Packaged as a **Gradio** app and deployed to **Hugging Face Spaces**
- Inference runs on Spaces T4 GPU; cold start < 8 s

## Results

- 63 % ROUGE-L on held-out test set (vs. 44 % for the base model)
- Hallucination rate dropped from ~30 % to ~6 % on policy-specific questions
- Average response latency: 1.2 s end-to-end including retrieval

## Stack

```
Training   : PyTorch · Hugging Face Transformers · PEFT · bitsandbytes
Retrieval  : FAISS · sentence-transformers
Interface  : Gradio · Hugging Face Spaces
Data       : pandas · JSONL · back-translation (Helsinki-NLP)
```
