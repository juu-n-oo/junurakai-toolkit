# Design system operating model

The Git-tracked token files are the deployable source of truth. Penpot is the visual-reference source. Compare and resolve differences explicitly before changing either.

Use two layers:

1. Primitives describe raw scale values such as `color.blue.500` and `space.4`.
2. Semantics describe intent such as `color.action.primary` and `color.content.primary`.

Components consume semantics, never raw palette values. Screen-only layout may combine components and patterns, but should not reproduce a component's style contract.

Make a shared component only after a real reuse need exists. Define its variants, sizes, states, accessibility contract, responsive behavior, and dark-mode behavior before exporting it.
