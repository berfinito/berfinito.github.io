---
layout: page
title: "P2P File Sharing Application"
label: Systems · Networking
description: >-
  A peer-to-peer file sharing system with a central tracker, distributed file
  chunking, and concurrent peer connections — built in Java for a BSc networks course.
tags:
  - Java
  - Networking
  - P2P
  - Distributed Systems
  - Multithreading
featured: false
date: 2022-01-16
github: https://github.com/berfinito/P2P-File-Sharing-Application
---

## Overview

A peer-to-peer file transfer application modelled loosely on the BitTorrent protocol.
Built for a BSc computer networks coursework to demonstrate socket programming,
concurrent connections, and distributed file assembly.

## Architecture

```
┌─────────────┐        registers / announces
│   Tracker   │◄─────────────────────────────── Peers
│  (central)  │         returns peer list
└─────────────┘──────────────────────────────► Peers
                                                  │
                     direct TCP connections       │
                     ◄────────────────────────────┘
```

### Components

**Tracker server**
- Maintains a registry of active peers and the file chunks each holds
- Responds to peer queries with a list of chunk sources
- Handles peer join / leave events

**Peer node**
- Downloads missing chunks from multiple peers concurrently (threaded)
- Uploads chunks to requesting peers simultaneously
- Verifies chunk integrity with MD5 hash before assembly

**File chunking**
- Files split into fixed-size blocks (configurable chunk size)
- Chunks distributed across peers; rarest-first download order
- Reassembled on download completion with integrity check

## Key concepts demonstrated

- TCP socket programming in Java
- Multi-threaded client/server architecture
- Concurrent downloads with `ExecutorService` thread pool
- Basic distributed coordination via tracker

## Stack

```
Language   : Java
Networking : java.net (TCP Sockets)
Concurrency: java.util.concurrent
```
