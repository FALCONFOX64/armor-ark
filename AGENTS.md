# AGENTS.md — Armor Ark Website

This repository follows elite engineering and design practices. All work on the Armor Ark website must represent **Armor Ark as the premier provider of fractional CISO services and responsible AI programs**, while respecting the Web Team Skills and the documented improvement loop.

## Core Mandate

Armor Ark is a fractional CISO and responsible AI firm. The website's primary purpose is to clearly communicate our services, expertise, and value to executives, technical leaders, risk/compliance teams, and boards.

The three Web Team capabilities are how we ensure every client touchpoint — this site, governance portals, risk dashboards, and reporting tools — reflects the highest standards of clarity, performance, and trust:

1. **High-Performance Visual Systems**
2. **Intuitive Information Architecture**
3. **Cross-Audience Experience Design**

Every change must strengthen the CISO/Responsible AI positioning **and** demonstrably advance at least one Web Team capability.

## Required Workflow (The Loop)

See `IMPROVEMENT_LOOP.md` for the full process.

High-level:
1. **Design first** — Use design skill / spawn design subagent for anything non-trivial. Ensure changes reinforce fractional CISO + responsible AI positioning.
2. **Implement with elite standards** — Think and act like the `elite-software-engineer`.
3. **Validate rigorously** — `elite-validation-engineer` mindset + automated + manual checks.
4. **Review** — Run the review skill.
5. **Polish narrative** — Use `elite-viral-tech-writer` for any user-facing copy. Messaging must speak to CISOs, AI leaders, risk officers, and boards.
6. **Ship reliably** — Elite DevOps practices.

## Repository Rules

- Main branch protected.
- All work on short-lived feature branches.
- Every PR must reference an issue and explicitly call out:
  - How it strengthens Armor Ark's positioning as a fractional CISO & responsible AI partner
  - Impact on the three Web Team skills
- Performance budgets are non-negotiable (see IMPROVEMENT_LOOP.md).
- Accessibility (WCAG) is table stakes.
- Copy and structure must remain credible to security, risk, legal, and executive audiences.

## Useful Commands & Patterns

```bash
# Design phase
spawn_subagent --subagent_type=plan --prompt="..."

# Implementation
# Use elite-software-engineer persona when writing code or planning changes.

# Verification
npm run build
# Run Lighthouse manually or in CI
```

## Design System Notes

- Use the existing Tailwind + CSS variables (navy, steel, accent).
- Prefer motion that is purposeful and lightweight (Framer Motion).
- All interactive elements must have excellent focus states and keyboard support.
- Keep bundle size and Core Web Vitals in mind at all times.
- The overall experience must feel authoritative, calm, and trustworthy — appropriate for CISO and governance work.

## References

- Web Team Skills: https://github.com/FALCONFOX64/web-team-skills
- Improvement Loop: ./IMPROVEMENT_LOOP.md

The site must always clearly position Armor Ark as the go-to fractional CISO and responsible AI partner while demonstrating the Web Team's craft in every detail.