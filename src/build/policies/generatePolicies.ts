import fs from "node:fs";
import path from "node:path";

import type { LegalConfig } from "../../types.js";
import { canGeneratePolicy } from "../guards.js";
import { resolvePolicyPath } from "../safety/resolvePolicyPath.js";
import { POLICY_TEMPLATES } from "../../templates/index.js";

type GeneratePoliciesArgs = {
  projectRoot: string;
  basePath: string;
  config: LegalConfig;
};

/**
 * Generic policy generator (v1).
 *
 * RESPONSIBILITIES:
 * - Scaffold enabled policies exactly once
 * - Never overwrite user-authored files
 * - Delegate all rendering to templates
 *
 * HARD GUARANTEES:
 * - NEVER writes outside src/pages
 * - NEVER overwrites existing files
 * - Ignores unknown policy keys safely
 * - Deterministic, reproducible output
 *
 * RETURNS:
 * - true  → at least one policy page was created
 * - false → no filesystem changes
 */
export function generatePolicies({
  projectRoot,
  basePath,
  config,
}: GeneratePoliciesArgs): boolean {
  // Fail closed
  if (!config.enabled) return false;

  /**
   * Template registry is static and deterministic.
   * Policy keys MUST match template keys exactly.
   */
  const templates = POLICY_TEMPLATES;

  let createdAny = false;

  /**
   * Iterate deterministically for reproducible builds.
   */
  const policyEntries = Object.entries(config.policies)
    .filter(([, enabled]) => enabled === true)
    .sort(([a], [b]) => a.localeCompare(b));

  for (const [policyKey] of policyEntries) {
    const render = templates[policyKey];

    /**
     * Unknown policy key → ignored intentionally.
     * This allows users to toggle future policies safely.
     */
    if (!render) continue;

    /**
     * Resolve target directory securely.
     */
    const targetDir = resolvePolicyPath(
      projectRoot,
      basePath,
      policyKey
    );
    if (!targetDir) continue;

    const targetPath = path.join(targetDir, "index.astro");

    /**
     * HARD RULE:
     * Never overwrite user files.
     */
    if (!canGeneratePolicy(targetPath)) continue;

    try {
      const output = render();

      /**
       * Fail closed on empty or invalid output.
       */
      if (
        typeof output !== "string" ||
        output.trim().length === 0
      ) {
        continue;
      }

      fs.mkdirSync(targetDir, { recursive: true });

      fs.writeFileSync(
        targetPath,
        output,
        { encoding: "utf-8", flag: "wx" }
      );

      createdAny = true;
      console.log(
        `[astro-legal] ${policyKey} policy created`
      );
    } catch {
      /**
       * HARD FAIL-SAFE:
       * One policy failure must not affect others.
       */
      continue;
    }
  }

  return createdAny;
}