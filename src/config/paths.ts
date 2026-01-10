import path from "node:path";

/**
 * astro-legal — configuration paths
 *
 * SINGLE SOURCE OF TRUTH (v1 locked)
 *
 * PURPOSE:
 * - Define canonical, deterministic locations for legal.config.json
 * - Provide a single canonical location for v1 config
 *
 * HARD GUARANTEES:
 * - Paths are resolved relative to process.cwd()
 * - No environment variables
 * - No user overrides
 * - No dynamic resolution
 *
 * VERSIONING:
 * - This file is API-STABLE for v1
 * - Any changes to these paths are BREAKING
 * - Must require a major version bump
 */

/**
 * Directory containing all astro-legal configuration files.
 *
 * NOTE:
 * - Intentionally NOT placed in src/
 * - Intentionally NOT placed in project root
 * - Keeps legal config separate from application code
 */
export const CONFIG_DIR = path.join(
  process.cwd(),
  "config-files"
);

/**
 * Canonical configuration filename.
 *
 * This name is fixed and must not change in v1.
 */
export const CONFIG_FILENAME = "legal.config.json";

/**
 * Canonical configuration path (v1).
 *
 * All reads and writes MUST go through this path.
 */
export const NEW_CONFIG_PATH = path.join(
  CONFIG_DIR,
  CONFIG_FILENAME
);
