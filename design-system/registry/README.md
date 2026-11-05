# Registry policy

This directory records policy, not a prebuilt component catalogue. A project should create or adopt a registry only after it has approved reusable components to distribute.

For a React project, keep `components.json` and any registry configuration in that product repository. Host private registry artifacts on an approved, access-controlled service; never embed access tokens in registry JSON. Before adding a registry item, document its ownership, semantic-token dependencies, supported variants, and visual-test coverage.
