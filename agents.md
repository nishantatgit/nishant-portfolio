# ML Transition Portfolio Website — Agent Instructions

## Role
You are a **senior product designer + senior frontend engineer**.  
Your task is to build a **production-ready personal website** that convincingly shows my transition from **Full-Stack Engineer → ML Engineer**, anchored by **4 solid ML projects**.

The site must feel **credible, premium, fast, and recruiter-friendly**.

---

## 1. Primary Goal

Build a website that:
- Explains my transition to ML in **under 30 seconds**
- Proves capability via **4 end-to-end ML case studies**
- Shows **engineering maturity**, not academic theory
- Is optimized for **recruiter skim-reading**
- Is easy to maintain via **data-driven content files**

This is **not a blog** and **not a generic portfolio**.  
It is a **career-transition proof artifact**.

---

## 2. Tech Stack (Strict)

- Framework: **Next.js (App Router)**
- Language: **TypeScript**
- Styling: **Tailwind CSS**
- Optional UI: **shadcn/ui**
- Animations: minimal, subtle only
- Performance target: **Lighthouse 90+**
- Fully responsive & accessible
- Clean, readable code

---

## 3. Required Pages & Routes

| Route | Purpose |
|------|--------|
| `/` | Landing + recruiter overview |
| `/projects` | ML project listing |
| `/projects/[slug]` | Detailed ML case studies |
| `/about` | Professional narrative |
| `/resume` | Resume preview + download |
| `/contact` | Contact form / links |
| `404` | Custom error page |

---

## 4. Home Page Structure (Order Matters)

### 4.1 Hero Section
- Title: **“Full-Stack → ML Engineer”**
- Subtitle:  
  “I build end-to-end systems and now focus on applied machine learning and production ML.”
- Primary CTAs:
  - **View ML Projects**
  - **Download Resume**
- Credibility chips:
  - 4 ML Projects
  - Metrics-driven
  - Production mindset
  - Python / PyTorch / Sklearn
  - Deployment experience

---

### 4.2 Transition Story (Short)
Bullet narrative:
- Background as a Full-Stack Engineer
- Why ML (impact + interest)
- How I’m proving it (projects, evaluation, systems thinking)

---

### 4.3 Featured Projects (4 Cards)
Each card must show:
- Project name
- One-line problem statement
- ML approach
- Key metric/result
- Tags
- Links (demo / repo)

---

### 4.4 Skills Snapshot
Split into three columns:
- **Machine Learning**
- **MLOps / Production ML**
- **Software Engineering Strengths**

---

### 4.5 Proof of Seriousness
“How I work” bullets:
- Baselines → improvements
- Metrics selection
- Error analysis
- Reproducibility
- Monitoring mindset

---

### 4.6 Recruiter Quick Scan
Explicit section titled **“Recruiter Quick Scan”**

Include:
- What roles I’m targeting
- What I’m strongest at
- What I’m looking for next

---

### 4.7 Call to Action
- Contact button
- LinkedIn / GitHub links
- Resume link

---

## 5. Projects Listing Page (`/projects`)
- Filter by tags (NLP, tabular, time-series, LLM, RAG)
- Default sort: **Most Impressive**
- Strong visual hierarchy
- Each card highlights **impact & metrics**

---

## 6. Project Detail Page Template (Critical)

Each project page MUST follow this structure:

1. Overview
2. Problem & Constraints
3. Data
   - Source, size, schema
   - Train/val/test strategy
   - Leakage handling
4. Approach
   - Baseline
   - Iterations
   - Final model
5. Evaluation
   - Metrics + justification
   - Error analysis
6. Results
   - Metric table
   - Before vs after
7. Production / Engineering
   - Inference design
   - Latency & cost considerations
   - Monitoring ideas
8. Demo
   - Screenshots / GIFs / video placeholder
9. Links
   - GitHub
   - Demo
   - Write-up
10. What I’d Do Next

This page should feel like a **real ML design review**.

---

## 7. About Page
- Professional narrative
- Visual timeline showing transition from Full-Stack → ML
- Links to GitHub and LinkedIn

---

## 8. Resume Page
- Embedded resume preview (PDF or HTML)
- Clear download button
- Resume located at `/public/resume.pdf`

---

## 9. Contact Page
- Simple contact form or mailto
- Clear email + social links
- Minimal friction

---

## 10. Content Model (Data-Driven)

All content must be editable without touching components.

Create:
- `src/content/profile.ts`
- `src/content/projects.ts`

Each project must include:

```ts
slug
title
oneLiner
problem
whyItMatters
dataSummary
methods
metrics
resultsHighlights
stack
tags
repoUrl
demoUrl
writeupUrl
images
featured
