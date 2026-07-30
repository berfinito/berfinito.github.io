# University Information Chatbot — LLM Fine-Tuning & RAG

Domain-specific QA chatbot for university support queries. Benchmarks four model variants (LLaMA-2 and DeepSeek, base vs QLoRA fine-tuned), retrieval-augmented with a FAISS vector store. Deployed on Hugging Face Spaces.

🤗 **[Live Demo on Hugging Face Spaces](https://huggingface.co/spaces/berfinito)**

---

## Problem

Generic LLMs hallucinate institution-specific rules (deadlines, module registrations, academic policies) or refuse to answer. This system grounds the model in the university's actual documentation.

## Approach

### Dataset
- Scraped and structured official university documentation and student handbooks into **600+ QA pairs**
- Applied paraphrase and back-translation augmentation to handle query variation
- Stored as structured JSONL for reproducible training and retrieval

### Model Benchmarking

| Model | BLEU | ROUGE-L | Latency |
|---|---|---|---|
| LLaMA-2 7B (base) | 0.31 | 0.44 | 420 ms |
| DeepSeek 7B (base) | 0.29 | 0.41 | 390 ms |
| LLaMA-2 7B + QLoRA | **0.51** | **0.63** | 435 ms |
| DeepSeek 7B + QLoRA | 0.48 | 0.60 | 400 ms |

LLaMA-2 fine-tuned with QLoRA selected for best accuracy/latency balance.

### Fine-Tuning
- **QLoRA** (4-bit quantisation + LoRA adapters, `r=16`) to fit training on a single GPU
- DAPT (domain-adaptive pre-training) on university corpus before task fine-tuning

### RAG Pipeline
- **FAISS** vector index over the 600+ QA pairs
- Retrieval: top-3 chunks by cosine similarity
- Fallback logic: if retrieval confidence < threshold, model falls back to a safe "I don't know" response — reducing hallucinations

## Stack

```
Models     : LLaMA-2 7B · DeepSeek 7B
Fine-tuning: QLoRA (PEFT) · bitsandbytes
Retrieval  : FAISS · sentence-transformers
Serving    : Hugging Face Spaces
Language   : Python
```

## Structure

```
Llama-2-7b-HF/   — LLaMA-2 fine-tuning notebooks
DeepSeek/        — DeepSeek fine-tuning notebooks
FLAN-T5/         — FLAN-T5 baseline experiments
```
