# AGENTS.md

## Project Context

- This repository is an Astro-based company website.
- The site is primarily static content and should stay compatible with static hosting on GitHub Pages unless the user explicitly requests a different deployment model.
- The repository is public. Never add secrets, private tokens, internal URLs, or sensitive business information to the codebase, commit history, or example files.
- Prefer simple, maintainable solutions that work well for AI-assisted iteration in future turns.

## Working Rules

- Read the relevant files before editing and keep changes scoped to the task.
- Use `rg` for search and prefer minimal diffs over broad refactors.
- Preserve user changes already present in the worktree unless the task explicitly requires otherwise.

## Start-of-Turn Workflow

- Before making code changes in a new turn, run `git pull --ff-only`.
- Check `git status --short` before editing.
- Start from a clean worktree whenever possible: no unstaged changes, no staged-but-uncommitted changes, and no leftover local edits from a previous turn.
- If the worktree is not clean, resolve that state before changing code unless the user explicitly asks to work on top of existing local changes.

## Astro Project Rules

- Use `npm` as the package manager for this repository and keep `package-lock.json` in sync with dependency changes.
- Prefer Astro-first patterns for pages, layouts, and components before adding client-side JavaScript.
- Keep pages and components static by default. Do not introduce SSR, server adapters, API routes, or dynamic runtime dependencies unless the user explicitly asks for them.
- Favor content-driven implementation: semantic HTML, reusable Astro components, and lean CSS over client-heavy frameworks.
- When adding interactivity, use the smallest viable Astro island and document why client-side code is necessary.
- Keep the project easy to build on GitHub Actions and easy to deploy to GitHub Pages.

## Content And Design Rules

- Treat this repository as a production-facing marketing site: prioritize clarity, accessibility, responsiveness, and performance.
- Preserve semantic heading order, accessible landmarks, alt text, and keyboard-friendly interactions.
- Do not use placeholder copy, placeholder links, or stock sections in completed work unless the user explicitly asks for scaffolding.
- When replacing starter content, remove unused starter components, assets, and comments instead of leaving dead files behind.
- Optimize images and other static assets for web delivery. Prefer compressed assets and avoid shipping large unused media files.

## GitHub Pages And Deployment

- Assume deployment targets GitHub Pages from a public GitHub repository unless the user changes that requirement.
- Keep build output static and compatible with Pages hosting.
- If deployment-related settings change, verify Astro configuration for `site`, `base`, trailing slash behavior, asset paths, and any GitHub Actions workflow assumptions.
- When adding or editing a GitHub Actions workflow, keep it deterministic, non-interactive, and compatible with the repository's default branch and Pages publishing flow.
- If a custom domain is involved, preserve or update the `CNAME` handling intentionally and avoid accidental removal.

## Dependencies And Tooling

- Prefer the smallest dependency footprint that solves the task.
- Do not add a new framework, CSS toolchain, runtime service, or build dependency unless it clearly improves the requested outcome.
- When adding dependencies, update the relevant scripts and documentation in the same turn.
- Prefer built-in Astro and platform capabilities before introducing third-party packages.

## Validation

- Run focused verification for the files you changed.
- At the end of every implementation turn, run test for the full repository.
- Do not finish the turn while test is failing.
- Every new behavior and every changed behavior must be covered by tests.
- Add new tests or update existing tests in the same turn as the logic change.
- Do not treat implementation work as complete if the corresponding tests were not added or adjusted.

## Validation For This Repo

- For UI or content changes, at minimum run `npm run build`.
- If the task changes behavior meaningfully and no repository-wide `test` script exists yet, add an appropriate test setup and wire it to `npm test` in the same turn.
- When Astro config, routes, asset paths, or deployment behavior changes, verify the production build output, not only local development mode.
- When dependencies or TypeScript-facing files change, run any relevant static checks introduced by the task.

## Completion Workflow

- End every coding turn with a tested commit.
- After finishing the current slice of work, run test and ensure it passes.
- Stage all repository changes with `git add -A`.
- Create a Conventional Commits commit message automatically based on the actual changes.
- Do not leave completed work uncommitted for a later turn.
- If the broader feature is still incomplete, commit the tested incremental progress and continue in the next iteration.

## Git Commits

- Git commit messages must use Conventional Commits:
  `<type>(<scope>): <subject>`
- Allowed `type` values:
  `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`
- Use a short lowercase `scope` when the changed area is clear; otherwise omit the scope.
- Keep the `subject` concise and specific. Use lowercase where natural.
- Do not use vague subjects such as `update`, `changes`, `misc`, or `fix stuff`.
- Do not end the subject with a period.
- Describe the actual change, not that work happened.

## Commitlint Failures

- If a commit is rejected because the message fails linting, read the exact error output.
- Rewrite the message to satisfy Conventional Commits and retry automatically.
- Repeat until the message passes, unless the failure is unrelated to commit message format.
- Never fall back to a non-conventional commit message.

## Documentation Expectations

- Keep `README.md` aligned with the current setup when developer workflow, deployment steps, or required environment assumptions change.
- Document new scripts, workflows, or operational conventions in the same turn they are introduced.
- Prefer explicit instructions over implicit project knowledge so future AI agents can continue work without guesswork.

## Examples

- `feat(cli): show help when running dev`
- `fix(config): handle missing env file`
- `docs(readme): clarify install steps`
