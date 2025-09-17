---
title: "LLM: Principles and Usage (Part 2)"
date: "2025-09-12"
description: "Using LLMs, and understanding questions and answers"
tags: ["llm", "pytorch", "prompt"]
---

## The Question

Using an LLM typically means: ask a question, then wait for an answer.

“How do I deploy a personal website?” is a potential question. Is it a good one? Questions aren’t good or bad—they have types. Roughly: knowledge questions, solution questions, and detailed step-by-step procedure questions.

From this angle, “How to deploy a personal website?” is a knowledge question. It’s too broad to get a detailed, actionable plan. Here’s a high-level outline similar to what I got from Gemini 2.5:

- Clarify goals and choose a platform (blog, portfolio, etc.). Based on your skill level, pick a platform: hosted tools (WordPress.com, Weebly), CMS (self-hosted WordPress.org), static site generators, or custom dev.
- Register a domain name.
- Choose and buy hosting (shared, VPS, cloud). In some regions, compliance/filing may be required.
- Deploy website content: install CMS or upload site files.
- DNS and binding: point your domain to your server IP and bind it.
- Test and go live.
- Maintain regularly: content updates, backups, security.

It’s useful for orientation, but not very actionable due to low information density.

So we can convert it into a solution question by adding context. For example: I already have a Next.js personal site. I want to deploy it on my own server. What are the steps and caveats? Please provide a reliable step-by-step path.

A summarized answer might look like this:

```graph TD
    A[Start] --> B{Server Prep};
    B --> B1[SSH];
    B1 --> B2[Update OS & Install Git];
    B2 --> B3[Install Node.js & npm/yarn (Use NVM)];
    B3 --> B4[Install PM2];
    B4 --> B5[Install Nginx];
    B5 --> B6[Open firewall ports (22, 80, 443)];

    B{Server Prep} --> C{Next.js Deploy};
    C --> C1[Clone repo to server];
    C1 --> C2[Configure .env.production];
    C2 --> C3[Install dependencies];
    C3 --> C4[Build Next.js app];
    C4 --> C5[Run with PM2];

    C{Next.js Deploy} --> D{Nginx & Domain};
    D --> D1[Reverse proxy config];
    D1 --> D2[DNS records];
    D2 --> D3[SSL with Certbot];
    D3 --> E[Go live];

    E --> F[Ongoing];
    F --> F1[CI/CD];
    F1 --> F2[Logging];
    F2 --> F3[Monitoring];
    F3 --> F4[Backups];
    F4 --> F5[Security];
```

This is highly feasible. Choose based on your background and complete the steps. For example, I didn’t know PM2 initially; after some research I adopted it. For CI/CD, Jenkins consumed too much memory for a personal site, so I used Drone instead.

The certificate advice is also practical: I used Certbot for issuance and auto-renewal.

By reframing the question and providing sufficient context, results improve.

## Reflection

The essence here isn’t just “better questions.” In the LLM world, the “question”—expressed in language—carries more functions.

- A question is a request for an answer.
- A question is also a strategy choice: a sketched future and its solution.
- A question can even be an operations manual index: repeatable steps that you can follow to execute a fine-grained task.

The latter two extend language’s power from description to execution. Agents are the answer here—controlling your shell via an LLM is about letting language act as both language and “commands.”

In short, when using LLMs, provide enough context about the current state and your intent, and keep exchanging information during the process.
