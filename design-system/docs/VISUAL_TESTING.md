# Visual testing

Use a deterministic local server and fixed viewports. Start with one representative, meaningful UI state and expand after that workflow is trusted. Review first generated reference images before committing them.

Run ordinary checks with `playwright test`. Use `--update-snapshots` only after an intentional change has been visually reviewed; immediately rerun without that flag. Inspect failure traces, actual images, expected images, and diffs rather than raising thresholds by default.

Test visual rendering and interaction separately. A screenshot does not prove keyboard behavior or user-flow correctness, and an E2E flow does not prove visual parity.
