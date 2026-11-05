# UI quality gates

Use only checks that apply to the target. Do not turn an unavailable platform into a passing result.

## Design and implementation

- Approved tokens or documented exception used.
- Existing components were searched and reused where suitable; any new shared component has explicit variants and states.
- Semantic HTML/accessibility or native accessibility labels remain intact.
- Relevant focus, disabled, loading, error, success, responsive, and dark states have been considered.
- Type, lint, and build checks appropriate to the repository pass.

## Web

- Verify 360, 390, 768, 1280, and 1440 px unless the product defines different supported widths.
- Check overflow, alignment, touch/keyboard navigation, console errors, and predictable animations.
- Commit reviewed visual snapshots. A snapshot update without review is not validation.

## Mobile

- Verify navigation, keyboard, safe areas, modal/sheet behavior, scroll, text truncation, and relevant color scheme on an available target.
- Keep Maestro flows deterministic and avoid production accounts/data.
- Record device/simulator, OS, and flow outcome. A passing flow proves the journey, not pixel equivalence to a design file.
