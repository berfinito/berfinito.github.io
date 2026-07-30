---
layout: page
title: "EV Charging Point Locator"
label: Android · Mobile
description: >-
  Android app to locate and manage EV charging points using Google Maps API.
  Includes admin dashboard, offline access, and SQLite persistence.
tags:
  - Android
  - Java
  - Google Maps API
  - SQLite
  - MVC
status: completed
featured: false
date: 2023-06-01
github: https://github.com/berfinito
---

## Overview

A native Android application that helps users find nearby EV charging
points, view availability, and manage charging sessions. Built for both
end users and administrators.

## Features

- **Map view** — Google Maps API integration showing nearby charging stations
- **Search & filter** — filter by connector type, availability, distance
- **Offline access** — SQLite local cache for use without connectivity
- **Admin dashboard** — CRUD interface for managing charging point data
- **Secure login** — user authentication with session management

## Architecture

MVC pattern separating presentation, business logic, and data layers:

```
View (Activities / Fragments)
  ↕
Controller (Business Logic)
  ↕
Model (SQLite + Maps API)
```

## Stack

```
Language   : Java
UI         : Android SDK · XML layouts
Maps       : Google Maps API
Storage    : SQLite (Room-compatible schema)
Pattern    : MVC
IDE        : Android Studio
```
