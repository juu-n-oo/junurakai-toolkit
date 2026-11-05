# Agent Toolkit

Reusable, local-first development harnesses for Dandi Works projects.

## Included

- `skills/design-system-harness/`: Codex skill for design-system-led UI delivery.
- `design-system/`: portable DTCG token baseline and decision documents.
- `templates/static-web/`: Playwright visual-regression starting point for static sites.
- `templates/react-shadcn/`: project-local shadcn configuration example.
- `templates/mobile-maestro/`: Maestro flow starting point for a real app id.

## Adopt in a project

1. Inspect the target repository before copying anything. Preserve its framework, package manager, styling model, and existing components.
2. Copy only the matching template. Static HTML sites use `templates/static-web`; React projects may adopt the shadcn example; native projects may adopt the Maestro flow after setting the real app id.
3. Map the baseline DTCG tokens to the product's approved tokens. Do not replace an established design system merely to use this repository.
4. Add a representative visual test, review its first baseline image, commit it, and run the test without snapshot-update mode.

`design-system-harness` is registered locally at `~/.codex/skills/design-system-harness` when this checkout is set up on a developer machine. The tracked source of truth remains this repository.

## Tool boundaries

This repository never stores credentials. Penpot, shadcn, Playwright, and Maestro connections are detected per agent session and per project; unavailable services remain explicitly unverified. See the skill's [MCP setup reference](skills/design-system-harness/references/mcp-setup.md).
