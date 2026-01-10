/**
 * astro-legal
 *
 * Configuration contract for legal policy generation.
 *
 * SINGLE SOURCE OF TRUTH (v1):
 * - writer.ts MUST conform to this type
 * - reader.ts MUST normalise into this type
 * - generators MUST NOT invent fields
 * - templates MUST rely only on fields defined here
 *
 * DESIGN PRINCIPLES:
 * - Fail closed
 * - Never throw from config parsing
 * - Allow partial user input
 * - Enforce strictness at generation time
 *
 * VERSIONING:
 * - This file is API-stable for v1
 * - Any breaking changes REQUIRE a v2 release
 */
export type LegalConfig = {
  /**
   * Master enable switch.
   *
   * If false:
   * - No policies are generated
   * - No files are written
   * - Plugin becomes inert
   */
  enabled: boolean;

  /**
   * Output path configuration.
   */
  paths: {
    /**
     * Base output path for generated policies.
     *
     * Examples:
     * "/"          → /privacy
     * "/legal"     → /legal/privacy
     * "/trust"     → /trust/privacy
     * "/policies"  → /policies/privacy
     *
     * HARD RULES:
     * - MUST start with "/"
     * - Normalised by reader.ts
     */
    base: string;

    /**
     * REQUIRED Astro layout used to wrap ALL generated policies.
     *
     * Examples:
     * "/src/layouts/Layout.astro"
     *
     * HARD GUARANTEES (v1):
     * - ALWAYS required
     * - MUST resolve to a valid Astro layout
     * - Missing or invalid layout MUST disable generation
     *
     * NOTE:
     * - Layout-less policies are NOT supported in v1
     * - This decision is intentional and irreversible for v1
     */
    layout: string;
  };

  /**
   * Effective date for policy display.
   *
   * Format:
   * - "YYYY-MM-DD"
   *
   * NOTES (v1):
   * - Written once on initial config creation
   * - Must remain stable across builds
   */
  effectiveDate: string;

  /**
   * Contact email addresses.
   *
   * OPTIONAL at type level:
   * - Validation happens in reader/generators
   * - Missing emails MUST prevent generation
   *   of policies that require them
   */
  contacts: {
    legalEmail?: string;
    privacyEmail?: string;
    abuseEmail?: string;
    lawEnforcementEmail?: string;
    securityEmail?: string;
  };

  /**
   * Organisation metadata.
   *
   * OPTIONAL at type level:
   * - Required only by certain policies
   * - Generators decide enforcement
   */
  organisation: {
    name?: string;
    jurisdiction?: string;
    address?: string;
    companyNumber?: string;
  };

  /**
   * Policy enablement map.
   *
   * Keys MUST match template registry keys exactly.
   *
   * Example:
   * {
   *   "privacy": true,
   *   "terms": false
   * }
   *
   * RULES:
   * - TRUE  → policy may be generated if missing
   * - FALSE → policy must NEVER be generated
   *
   * IMPORTANT:
   * - Presence here does NOT overwrite files
   * - Files are created ONLY if missing
   */
  policies: Record<string, boolean>;
};
