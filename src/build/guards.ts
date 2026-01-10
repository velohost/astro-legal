import fs from "node:fs";

/**
 * Determine whether a policy file may be generated.
 *
 * v1 GUARANTEE:
 * - User-authored policy files are IMMUTABLE
 *
 * HARD RULES:
 * - If the target file already exists → NEVER overwrite
 * - If the target file does not exist → safe to generate
 *
 * DESIGN NOTES:
 * - No content inspection
 * - No timestamps
 * - No hashes
 * - No "force" flags
 *
 * This function intentionally does ONE thing only.
 * Any future regeneration or diffing logic would be a
 * breaking change and MUST wait for v2.
 */
export function canGeneratePolicy(
  absolutePath: string
): boolean {
  return !fs.existsSync(absolutePath);
}