# Changelog

## 2.0.0 - 2026-04-01

- Simplified `astro-legal init` to write the starter config and patch Astro
  config automatically.
- Removed the forced dev-server restart path to avoid Astro v6 race conditions.
- Updated the README to describe the actual edit-and-save workflow.

## 1.1.1 - 2026-04-01

- Added an `astro-legal init` command so users can write the starter config file
  without waiting for the dev server to create it.
- Kept the existing first-run dev behavior intact as a fallback.

## 1.1.0 - 2026-04-01

- Widened the Astro peer dependency to support Astro v6 while preserving v4 and v5 compatibility.
- Normalized package ownership metadata to Velohost UK Limited.
- Updated license attribution in the package docs to match the project ownership.
- Bumped the package version for the release.
