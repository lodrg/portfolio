---
title: "Design System Notes (Part 1)"
date: "2025-06-08"
description: "Thoughts on building a design system and best practices"
tags: ["design", "figma", "design system"]
---

For a Design System, here are my own practices and logic.

We can split it into two parts. First, the basic logic of using Figma.

I’ll also briefly cover color, typography, and grid systems.

## Overall Logic

When designing, build the system top-down (consistency),
then construct components bottom-up (proximity).

Components need to be built and organized one by one (proximity: related elements stay close; unrelated ones are spaced apart).

This requires a step for constructing atomic elements.

Finally, based on UI, move into UX design.

## Building a Single Element

1. Place the content first (icons, cards, text, etc.)
2. Select them and apply Auto Layout (Shift + A). This wraps them into a frame and adds auto layout.
3. Configure layout, spacing, and padding.
4. Alignment in Auto Layout determines internal layout. In nested structures, this is the core of layout logic.
5. Spacing scale choices matter; this needs finer consideration.
6. If background colors are needed, use your color system.
7. Eventually, compose each atomic element layer by layer via Auto Layout. This is a bottom-up process.

## Button Construction

Convert text to a frame (Cmd/Ctrl + G), then configure corner radius, Auto Layout, and button/background/text colors.

## What is a Frame?

A container. Prefer using it because it supports Auto Layout.

## Color System

Primary | Surface | Text | Icon

Each with three levels.

## Typography System

H1 | H2 | Title | Body | Body Bold | Caption

## Grid System

Mobile typical:

4 Columns | Margin 16 | Gutter 8

Web typical:

12 Columns
