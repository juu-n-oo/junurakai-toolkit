# Component guidelines

Search in this order: existing product component, product registry, approved shadcn registry for compatible React web, then another approved library.

For a reusable component, define `variant`, `size`, disabled, loading, and error APIs only when the product needs them. Avoid catch-all style props and per-screen overrides. Include focus-visible treatment, minimum interactive target, accessible name/role, and all meaningful state styles.

Patterns assemble components for a repeated user task (for example, a login form). A screen owns route-level composition and data state; it should not become the sole implementation of a generally useful component.
