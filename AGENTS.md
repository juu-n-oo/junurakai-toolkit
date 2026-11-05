# UI Development Contract

Use this repository as a harness, not as permission to replace a product's UI stack.

## Before implementation

1. Inspect the target project's framework, versions, package manager, styling, existing tokens/components, test tooling, and uncommitted changes.
2. Check which of Penpot, shadcn, Playwright, and Maestro tools are connected in the current session. Make one read-only request only when that tool is available. Never claim a connection or test result that was not observed.
3. Use the product's approved token source. If Penpot and Git token files conflict, report the diff and request a decision; do not silently overwrite either source.
4. Search product components first, then its registry, then shadcn (React web only), then approved libraries.

## Implementation order

Follow `tokens -> components -> patterns -> screens`. Keep primitive and semantic tokens separate. Avoid one-off values in reusable components; document a necessary exception beside its implementation.

## Validation

- Web UI changes require a real-browser check and a repeatable Playwright test when the project can run Playwright.
- Mobile UI changes require a device/simulator check and Maestro flow when the project has a runnable mobile app and Maestro is installed.
- Exercise relevant loading, error, disabled, focus, responsive, and dark-mode states. Mark unrelated platforms as `N/A` and unavailable tooling as `unverified`.
- Review screenshot changes before updating an approved baseline. Never use snapshot updates merely to make a failure disappear.

## Safety

Do not expose credentials, delete design files, reset local work, or perform framework/library migrations without explicit scope. Report changed files, reused/new components, test outcomes, visual evidence, and any unverified item.
