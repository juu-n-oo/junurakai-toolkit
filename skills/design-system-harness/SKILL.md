---
name: design-system-harness
description: Build or change web and mobile UI through an existing design system, with token-first reuse and evidence-based Playwright or Maestro validation.
---

# Design System Harness

Use for UI implementation, design-system adoption, component work, or visual-regression setup in a product repository. Do not use it for a purely visual opinion or a content-only edit.

## Inspect first

- Read the target repository's local instructions and inspect its framework, package manager, styling system, tokens, components, test setup, and working-tree state.
- Check the current session for Penpot, shadcn, Playwright, and Maestro MCP tools. If a tool exists, verify with one minimal read-only call. If it does not, continue with available tools and label that capability unverified.
- For product design sources, read [MCP setup](references/mcp-setup.md). For completion requirements, read [quality gates](references/quality-gates.md).

## Decide the smallest compatible change

1. Find an existing component. Then check the product registry. Use shadcn only for a compatible React web project; never apply its components to native UI.
2. Identify token aliases rather than adding arbitrary CSS values. Keep primitives and semantics distinct.
3. Describe states, accessibility behavior, responsive behavior, and dark mode before code when they apply.
4. Preserve the existing framework and styling model. A new design system must be introduced incrementally, beginning with the representative component or screen in scope.

## Build and verify

- Compose `tokens -> components -> patterns -> screens`.
- Run the repository's relevant static/type checks.
- For web, inspect the real page at 360, 390, 768, 1280, and 1440 pixels when applicable; capture/review screenshots and save a Playwright visual assertion for representative UI.
- For mobile, run the relevant Maestro flow against an available simulator or device and inspect its resulting screenshots. Do not call an E2E pass a visual-match guarantee.
- Update a visual baseline only after reviewing an intentional visual change.

## Report accurately

State the changed files, reused/new components, token source, test commands and results, screenshot review result, each MCP's observed status, and anything blocked or unverified. Use `N/A` only for platforms outside the target project.
