import path from "node:path";

/**
 * Safely resolve a policy output directory.
 *
 * v1 SECURITY GUARANTEES:
 * - Output is ALWAYS inside src/pages
 * - Absolute paths are rejected
 * - Path traversal is rejected
 * - Invalid or malformed policy keys are rejected
 *
 * This function is a hard security boundary.
 * Any relaxation is a breaking change (v2+ only).
 */
export function resolvePolicyPath(
  projectRoot: string,
  basePath: string,
  policyKey: string
): string | null {
  /**
   * Policy keys MUST be simple URL-safe slugs.
   *
   * Examples:
   * - "privacy"
   * - "terms"
   * - "acceptable-use"
   *
   * Rejected:
   * - "", ".", ".."
   * - traversal
   * - uppercase
   * - unicode
   */
  if (
    typeof policyKey !== "string" ||
    !/^[a-z0-9-]+$/.test(policyKey)
  ) {
    return null;
  }

  /**
   * Normalise base path:
   * - remove leading/trailing slashes
   * - empty → root
   */
  const safeBase = basePath.replace(/^\/+|\/+$/g, "");

  /**
   * Canonical src/pages root
   */
  const pagesRoot = path.resolve(
    projectRoot,
    "src/pages"
  );

  /**
   * Resolve intended target directory
   */
  const target = path.resolve(
    pagesRoot,
    safeBase,
    policyKey
  );

  /**
   * HARD STOP:
   * The resolved path MUST remain inside src/pages.
   */
  if (!target.startsWith(pagesRoot + path.sep)) {
    return null;
  }

  return target;
}