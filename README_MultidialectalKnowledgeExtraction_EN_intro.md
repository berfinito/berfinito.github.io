# Multidialectal Knowledge Extraction (MSc Dissertation)

End-to-end NLP pipeline for automatic speech recognition, topic modelling, and knowledge graph construction across three low-resource languages: **Turkish (TR)**, **Kurmanji Kurdish (KMR)**, and **Zazaki (ZZA)**.

MSc Computer Science & Artificial Intelligence — University of Bradford — **Distinction**

---

## Results

| Language | Model | WER | CER |
|---|---|---|---|
| Turkish (TR) | whisper-medium | 8.3% | — |
| Kurmanji (KMR) | whisper-large-v2 | 19.4% | — |
| Zazaki (ZZA) | whisper-large-v2 | 24.7% | — |

Knowledge graph (full, PMI-weighted): **2,847 nodes · 6,193 edges** across all three languages.

## Pipeline

```
Mozilla Common Voice v22 + Wikipedia + Zazagorani corpus
        │
        ▼
ASR (Whisper / Wav2Vec2 fine-tuned)
        │
        ▼
Preprocessing & Normalisation
        │
        ▼
Topic Modelling (BERTopic + multilingual sentence embeddings)
        │
        ▼
Keyword Extraction (KeyBERT / YAKE)
        │
        ▼
Knowledge Graph Construction (NetworkX → GEXF / GraphML)
```

## Key Contributions

- **Script drift ratio** — novel metric to quantify orthographic inconsistency in low-resource dialectal text
- Transfer learning from Turkish checkpoint significantly improves Kurmanji ASR (~8pp WER reduction vs multilingual base)
- Cross-dialect topic alignment: 14 semantically equivalent topics shared across all three languages
- Human-in-the-loop validation with native speakers for cultural relevance

## Data Sources

| Source | Language | License |
|---|---|---|
| Mozilla Common Voice v22 | TR / KMR / ZZA | CC0 |
| Wikipedia dumps | TR / KMR / ZZA | CC BY-SA 4.0 |
| Zazagorani corpus | ZZA | VarDial research license |

## Stack

```
ASR        : openai/whisper · facebook/wav2vec2-large-xlsr-53 · PEFT
Topics     : BERTopic · HDBSCAN · UMAP · sentence-transformers
Keywords   : KeyBERT · YAKE
Graph      : NetworkX · Gephi (visualisation)
NER        : XLM-RoBERTa (WikiANN fine-tuned)
Language   : Python · pytest · pyproject.toml
```

## Reproduce

```bash
conda activate mdke

# ASR inference
python scripts/asr_compare_models.py

# Topic modelling
python scripts/topics_bertopic.py --lang tr --sources text,cv

# Knowledge graph
python scripts/kg_from_reps_terms.py --langs tr,kmr,zza --mode full
python scripts/kg_weighting.py --weight pmi --normalize minmax
python scripts/plot_kg.py --tsv reports/analysis/tr_kg_full_pmi.tsv

# Tests
pytest -q
```

Full documentation: [`reports/docs/PROJECT_MAP.md`](reports/docs/PROJECT_MAP.md)

---

*Türkçe dokümantasyon ve detaylı sprint raporları için aşağıya bakınız.*
