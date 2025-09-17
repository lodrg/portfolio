---
title: "LLM: Core Ideas and How to Use It"
date: "2025-08-11"
description: "From transformers to LLMs, from matrix ops to semantic similarity"
tags: ["llm", "pytorch", "prompt"]
---

## Large Language Models

I’ve been using LLMs intensively since around 2021 or 2022. I was among the first to notice ChatGPT. Before that, I focused on DeepL because I often needed translation (reading and writing papers, etc.).

When ChatGPT launched, I immediately noticed it because the translation felt more flexible. For non-native speakers, literal translations often read awkwardly. GPT’s translation felt human, and I used it to polish many assignments.

Later, when I worked in software development, I used LLMs even more. As a tool created by programmers, LLMs are especially good at assisting programmers.

It isn’t trivial; many people feel the code LLMs generate is unreliable. After trying many times, I found that if you break a task into small, verifiable parts, results are good. So my workflow became semi-automatic: I might write part of it, set up the scaffolding, and let the LLM fill in details.

This led to two issues:

- If you’ve already decomposed the task well, the most important part is done, and the LLM doesn’t add much.
- If you can’t solve certain problems yourself, having an LLM do it can become unmanageable. Without understanding, you don’t see boundaries or relationships, can’t decompose and assemble tasks effectively. In other words, you can’t reliably do things you fundamentally can’t do, even if you sometimes get lucky.

With these two problems—and as LLMs became ubiquitous—I started learning their principles, implementation, and usage.

## Principles

My current understanding:

The model is a bunch of parameters belonging to nodes across layers of a neural network. In different layers and node combinations, it encodes high-dimensional “information” from training data—I call them “meanings.” These meanings can include words and senses, positional senses, relations, common contexts, etc. There may be even more complex information at higher dimensions, such as sentiment or logic.

Of course there’s more: tokenization for inputs, and the next-token generation mechanism.

Here’s my first insight:

- When we ask an LLM, it doesn’t truly “answer.” It finds a meaning close to your query and paraphrases that meaning in well-formed text. Sometimes the paraphrase happens to contain what you need, so it feels right—but it’s still paraphrasing your question.

The question is the answer.

So we can improve prompts at the root: describe requirements across multiple dimensions. If you can provide a structured example, constraints, and boundaries, that’s even better.

Often when outputs don’t match expectations, it’s because many implicit rules weren’t stated up front, so the model produced something we didn’t want.

## Problems and Methods

Given the above, when results don’t match expectations, it’s usually because prompts are too macro. At fine granularity, the model must choose paths to give a complete answer, and it may choose a branch you didn’t want.

That’s not the model’s fault—the model did answer your question. At that time, you hadn’t yet made the necessary fine-grained decisions. To improve outcomes, first list a plan, then execute step by step before asking the model to perform complex logic.
