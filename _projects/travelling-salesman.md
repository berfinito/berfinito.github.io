---
layout: page
title: "Travelling Salesman Problem — Heuristic Solvers"
label: Algorithms
description: >-
  Comparative implementation of exact and heuristic approaches to TSP —
  brute force, nearest neighbour, and simulated annealing — with visual route output.
tags:
  - Java
  - Algorithms
  - Optimisation
  - Graph Theory
featured: false
date: 2022-01-16
github: https://github.com/berfinito/Travelling-Salesman-Problem
---

## Overview

A Java implementation and comparison of multiple algorithms for the
Travelling Salesman Problem (TSP) — the classic combinatorial optimisation
problem of finding the shortest route visiting every node exactly once.

Built as a BSc algorithms coursework to demonstrate the trade-off between
solution quality and computational cost as problem size grows.

## Algorithms implemented

### Exact — Brute force
- Generates all possible permutations of cities
- Guaranteed optimal solution
- Complexity: O(n!) — practical only up to ~12 cities

### Heuristic — Nearest neighbour
- Greedy construction: always travel to the closest unvisited city
- Fast (O(n²)) but can produce poor solutions for certain city layouts
- Typically within 20–25% of optimal

### Metaheuristic — Simulated annealing
- Starts with a random tour, iteratively swaps city pairs
- Accepts worse solutions with decreasing probability (temperature schedule)
- Escapes local optima; produces near-optimal solutions for larger inputs

## Results (sample — 20 cities, random layout)

| Algorithm | Tour length | Time |
|---|---|---|
| Brute force | 312 units | — (infeasible at n=20) |
| Nearest neighbour | 389 units | < 1 ms |
| Simulated annealing | 327 units | ~40 ms |

## Stack

```
Language   : Java
Output     : Java Swing (route visualisation)
```
