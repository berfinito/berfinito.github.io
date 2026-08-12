---
layout: page
title: "AI-Powered Deepfake Voice Detection"
label: Audio · Security
description: >-
  Hybrid CNN + Whisper pipeline for detecting AI-generated speech.
  Trained on 220k+ samples; served via a containerised FastAPI endpoint.
tags:
  - CNN
  - Whisper
  - LoRA
  - FastAPI
  - Docker
  - Python
status: completed
featured: true
github: https://github.com/berfinito/DeepFakeAudioDetection
---

## Overview

A binary classifier that distinguishes genuine human speech from AI-generated
(deepfake) audio. The system combines a CNN on mel-spectrograms with
Whisper-derived acoustic embeddings, served behind a REST API.

## Problem

Voice synthesis models (VALL-E, ElevenLabs, Tortoise TTS) can now clone voices
convincingly enough to fool humans in real-time calls. Detection systems need
to be fast enough for near-real-time use and robust across codecs and recording
conditions.

## Dataset

- **220,000+ audio samples** from a combined corpus:
  - Real: Common Voice, VoxCeleb2, LibriSpeech
  - Fake: generated with VALL-E X, ElevenLabs, Tortoise TTS, YourTTS
- Augmented with: codec degradation (MP3 64kbps), additive noise (SNR 5–20 dB),
  pitch shift, time stretch
- 80 / 10 / 10 train / val / test split, stratified by source

## Architecture — hybrid pipeline

### Branch 1: spectrogram CNN

- Input: log-mel spectrogram (128 bins, 25 ms window, 10 ms hop)
- Architecture: 4-block CNN (ResNet-style skip connections) → Global Average Pool
- Output: 256-dim feature vector

### Branch 2: Whisper acoustic encoder

- Used `whisper-base` encoder (frozen) as a feature extractor
- Applied **LoRA** adapters (`r=8`) to the last 4 attention layers to
  fine-tune on the task without full encoder retraining
- Output: 512-dim mean-pooled embedding

### Fusion & classification

- Concatenate both branches → 768-dim vector
- Two-layer MLP (768 → 256 → 1) with dropout 0.3
- Binary cross-entropy loss; trained with AdamW, cosine warmup

## Results

| Metric | Score |
|---|---|
| Accuracy | 96.4 % |
| AUC-ROC | 0.983 |
| False negative rate | 2.1 % |
| Inference latency (CPU) | 380 ms / sample |

The model generalises well to unseen TTS systems not seen during training
(evaluated on Bark-generated samples held entirely out of training).

## API — containerised serving

```python
# POST /detect
# Content-Type: multipart/form-data
# Body: audio file (wav / mp3 / ogg, max 60 s)

{
  "prediction": "fake",
  "confidence": 0.97,
  "latency_ms": 342
}
```

- Built with **FastAPI** + **uvicorn**
- Containerised with Docker (multi-stage build, final image ~1.8 GB)
- Health check endpoint, structured JSON logging, Prometheus metrics

## Stack

```
Modelling  : PyTorch · openai-whisper · PEFT (LoRA)
Data       : librosa · torchaudio · pandas
Serving    : FastAPI · uvicorn · Docker
Monitoring : Prometheus · structlog
```
