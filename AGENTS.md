# AGENTS.md — Armor Ark Website

This repository follows elite engineering and design practices. All work on the Armor Ark website must respect the **Web Team Skills** and the documented improvement loop.

## Core Mandate

You are building and maintaining a public demonstration of the Armor Ark Web Team's three foundational capabilities:

1. **High-Performance Visual Systems**
2. **Intuitive Information Architecture**
3. **Cross-Audience Experience Design**

Every change must demonstrably advance at least one of these.

## Required Workflow (The Loop)

See `IMPROVEMENT_LOOP.md` for the full process.

High-level:
1. **Design first** — Use design skill / spawn design subagent for anything non-trivial.
2. **Implement with elite standards** — Think and act like the `elite-software-engineer`.
3. **Validate rigorously** — `elite-validation-engineer` mindset + automated + manual checks.
4. **Review** — Run the review skill.
5. **Polish narrative** — Use `elite-viral-tech-writer` for any user-facing copy.
6. **Ship reliably** — Elite DevOps practices.

## Repository Rules

- Main branch protected.
- All work on short-lived feature branches.
- Every PR must reference an issue and explicitly call out impact on the three Web Team skills.
- Performance budgets are non-negotiable (see IMPROVEMENT_LOOP.md).
- Accessibility (WCAG) is table stakes.

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

- Use the existing Tailwind + CSS variables.
- Prefer motion that is purposeful and lightweight (Framer Motion).
- All interactive elements must have excellent focus states and keyboard support.
- Keep bundle size and Core Web Vitals in mind at all times.

## References

- Web Team Skills: https://github.com/FALCONFOX64/web-team-skills
- Improvement Loop: ./IMPROVEMENT_LOOP.md

This site must always feel like the highest expression of the Armor Ark Web Team's craft.