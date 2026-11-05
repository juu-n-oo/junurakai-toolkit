# MCP setup and verification

Inspect the active agent session before configuring anything. MCP configuration is host-specific; do not add configuration files, credentials, or duplicate server definitions without knowing the host's existing setup.

| Integration | Verify when connected | Setup boundary |
| --- | --- | --- |
| Penpot | List/read a project, library, or token source without mutation. | Supply the Penpot server URL and a user-provided access token only through the agent host's secret/config mechanism. Treat the approved Git token files as the deployment source of truth. |
| shadcn | Read/search a registry before installing a component. | Initialize only in a compatible React web project. Keep `components.json` project-local; use a private registry only when its packages and ownership are approved. |
| Playwright | Open a local page, inspect the accessibility tree, and capture a screenshot. | Keep repeatable tests in the product repository. Install the browser binaries through the project's Playwright version, not a global executable. |
| Maestro | List/run against an already-available simulator/device without changing product data. | Install the CLI after Java 17+ and a simulator/emulator are available. Keep the app id and flows in the mobile project. |

Do not report a tool as connected based on its documentation or a locally installed CLI alone. If an MCP is absent, state `not connected in this session`; if a CLI or device is absent, state the exact missing prerequisite.

Authoritative references: [Penpot developer docs](https://help.penpot.app/technical-guide/), [shadcn registry docs](https://ui.shadcn.com/docs/registry), [Playwright visual comparisons](https://playwright.dev/docs/test-snapshots), and [Maestro installation](https://docs.maestro.dev/maestro-cli/how-to-install-maestro-cli).
