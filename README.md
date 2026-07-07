# Armor Ark

**Fractional CISO & Responsible AI**

Armor Ark provides fractional Chief Information Security Officer services and responsible AI governance programs. We help organizations adopt AI securely, ethically, and with the accountability that boards, regulators, and customers require.

Our mission: deliver senior security leadership and ethical AI frameworks on flexible terms so companies can innovate rapidly without accumulating unacceptable risk or compliance debt.

## Services

- **Fractional CISO Services** — Embedded strategic security leadership: risk assessments, AI security program development, board reporting, incident readiness, and ongoing advisory.
- **Responsible AI Governance** — Ethical frameworks, bias audits, transparency programs, policy and accountability structures aligned to the EU AI Act, NIST AI RMF, and ISO/IEC 42001.
- **AI Security & Risk Management** — Adversarial testing, prompt injection defenses, LLM supply chain security, red teaming, and continuous monitoring for AI-specific threats.
- **AI Compliance & Assurance** — Audit-ready documentation, model governance, third-party assessments, and evidence packages for regulators and stakeholders.

## Delivery Craft — The Armor Ark Web Team

The secure dashboards, governance portals, risk visualizations, and reporting interfaces we provide to clients are built by the Armor Ark Web Team. This site demonstrates the three capabilities we apply to every client deliverable:

- High-Performance Visual Systems
- Intuitive Information Architecture
- Cross-Audience Experience Design

## Tech Stack (for this site)

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS + custom design tokens
- Framer Motion (lightweight micro-interactions)
- Accessible, high-performance, production-grade by design

## Local Development

```bash
npm run dev
```

## Continuous Improvement

This project follows a structured elite-skills improvement loop (see `IMPROVEMENT_LOOP.md` and `AGENTS.md`). All work prioritizes clear representation of Armor Ark as a fractional CISO and responsible AI partner while advancing the Web Team's delivery standards.

## License

MIT

---

Positioned and crafted for leaders building responsibly with AI.

## Deployment

This site deploys automatically to Namecheap cPanel (server91.web-hosting.com) from GitHub.

See [DEPLOY-NAMECHEAP.md](./DEPLOY-NAMECHEAP.md) for full setup and instructions.

- GitHub Actions (recommended): Push to `main` → builds static site → deploys via SFTP (port 21098).
- Alternative: cPanel Git™ Version Control + `.cpanel.yml`.

Required GitHub secrets: `FTP_USERNAME`, `FTP_PASSWORD` (create a dedicated FTP account in cPanel).