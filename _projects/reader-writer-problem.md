---
layout: page
title: "The Reader-Writer Problem — Concurrent Systems"
label: Systems · Concurrency
description: >-
  Java implementation of the classic reader-writer synchronisation problem
  using semaphores, demonstrating deadlock prevention and starvation avoidance.
tags:
  - Java
  - Concurrency
  - Operating Systems
  - Semaphores
  - Multithreading
featured: false
date: 2022-01-16
github: https://github.com/berfinito/The-Reader-Writer-Problem
---

## Overview

A Java simulation of the reader-writer synchronisation problem — a fundamental
concurrency challenge where multiple reader threads may access a shared resource
simultaneously, but writer threads require exclusive access.

Built as a BSc operating systems coursework to demonstrate synchronisation
primitives, race condition prevention, and starvation handling.

## The problem

A shared data resource (database / file) is accessed by two types of threads:

- **Readers** — can read concurrently; multiple readers at once is safe
- **Writers** — need exclusive access; no readers or other writers while writing

Naive solutions typically suffer from either:
- **Reader starvation** — writers never get access if readers continuously arrive
- **Writer starvation** — readers are always blocked waiting for writers

## Implementations

### Solution 1 — Reader priority
- Readers never wait if another reader is active
- Writers may starve under heavy read load
- Uses a `readCount` counter protected by a mutex

### Solution 2 — Writer priority
- A queued writer blocks new readers from starting
- Prevents writer starvation at the cost of lower read throughput
- Uses an additional semaphore to signal waiting writers

### Solution 3 — Fair (FIFO queue)
- Threads served in arrival order regardless of type
- Eliminates starvation for both readers and writers
- Implemented with a queue monitor and condition variables

## Key synchronisation primitives used

- `java.util.concurrent.Semaphore`
- `synchronized` blocks and `ReentrantLock`
- `wait()` / `notifyAll()` for condition signalling

## Stack

```
Language    : Java
Concurrency : java.util.concurrent · synchronized
```
