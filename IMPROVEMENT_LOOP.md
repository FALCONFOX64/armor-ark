# Armor Ark Website — Continuous Improvement Loop

This document defines the ongoing improvement process for the Armor Ark website. All changes follow a rigorous, elite-level workflow designed to maintain the highest standards of **high-performance**, **intuitive architecture**, and **cross-audience excellence** — the core capabilities of the Armor Ark Web Team.

## Core Principles (from Web Team Skills)

1. **High-Performance Visual Systems** — Every change must preserve or improve Core Web Vitals, animation fluidity, and load performance.
2. **Intuitive Information Architecture** — Navigation, content hierarchy, and user flows must remain crystal clear and accessible.
3. **Cross-Audience Experience Design** — Interfaces must delight technical stakeholders (engineers, researchers) while remaining approachable for everyday users and decision makers.

## The Elite Improvement Loop

We use a structured, multi-skill agentic process for all meaningful work.

### 1. Discovery & Design (Use `design` skill)
- For any new feature, major refactor, or content overhaul:
  - Spawn a design subagent or run the full design process.
  - Output: Polished design document + PR plan (topologically sorted tasks).
- Reference: The three Web Team skills must be explicitly addressed in the design.

### 2. Implementation (Use `elite-software-engineer`)
- Execute the PR plan using elite software engineering practices (Clean Code, TDD where appropriate, modern Next.js patterns).
- Prioritize:
  - Performance budgets
  - Accessibility (WCAG 2.2 AA+)
  - Micro-interactions that feel premium but are lightweight
  - Type safety and minimal bundle size

### 3. Validation & Testing (Use `elite-validation-engineer`)
- Comprehensive test strategy, edge cases, performance regression checks, accessibility audits.
- Run Lighthouse, axe, and manual cross-device testing.
- Use `check-work` skill for self-verification before PR.

### 4. Review (Use `review` skill)
- Automated + human review pass using the review skill against the changes.
- Focus areas: adherence to Web Team standards, security, performance, and clarity for all audiences.

### 5. Content & Narrative Polish (Use `elite-viral-tech-writer`)
- For copy, case studies, or marketing sections, apply elite tech writing standards.
- Ensure messaging works for both technical and non-technical readers.

### 6. Deployment & Reliability (Use `elite-devops-engineer`)
- Preview deployments, monitoring, and rollback plans.
- Performance budgets enforced in CI.

## How to Trigger the Loop

### For Humans
1. Open a GitHub Issue using the **"Website Improvement"** template (see `.github/ISSUE_TEMPLATE/`).
2. Tag with `web-team` or specific skill area.
3. The issue should reference which Web Team capability is being advanced.

### For Agents / Autonomous Work
Use the following spawn pattern:

```bash
# Example: Major redesign of a section
spawn_subagent --subagent_type=design --prompt="Design an improved version of the Expertise section using the three Web Team skills. Produce a full design doc + PR plan."

# Then implement
spawn_subagent --subagent_type=general-purpose --prompt="Follow the PR plan from the design doc. Use elite-software-engineer practices..."

# Validate
spawn_subagent --subagent_type=general-purpose --prompt="Act as elite-validation-engineer. Audit the changes..."

# Review
# Use the review skill on the branch
```

## Repository Standards

- Main branch is protected. All work happens on feature branches.
- Every PR must link to an issue and describe impact against the three skills.
- Performance budgets: LCP < 1.8s, INP < 150ms on 4G.
- All new components must include proper ARIA and keyboard support.
- Reference the original Web Team skills repo: https://github.com/FALCONFOX64/web-team-skills

## Tools & Stack

- **Framework**: Next.js (App Router) + TypeScript
- **Styling**: Tailwind + custom design tokens
- **Motion**: Framer Motion (judicious, performance-first)
- **Icons**: Lucide React
- **Notifications**: Sonner
- **Deployment**: Vercel (recommended)
- **Analysis**: Lighthouse CI + manual audits

## Getting Started with Improvements

```bash
git checkout -b feat/improve-hero
# Make changes following the loop
# Open PR referencing the issue + Web Team skills
```

This loop ensures the Armor Ark website remains a living demonstration of the Web Team's capabilities.

---

*Maintained by the Armor Ark Web Team. Last updated: 2026-07-07*