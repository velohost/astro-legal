import fs from "node:fs";
import type { LegalConfig } from "../types.js";
import {
  CONFIG_DIR,
  NEW_CONFIG_PATH,
} from "./paths.js";

const INITIAL_EFFECTIVE_DATE = new Date()
  .toISOString()
  .split("T")[0];

/**
 * astro-legal — configuration writer
 *
 * RESPONSIBILITY:
 * - Create the initial legal.config.json exactly once
 *
 * NON-RESPONSIBILITIES:
 * - No validation
 * - No normalisation
 * - No overwriting
 * - No opinionated defaults beyond structure
 *
 * VERSIONING:
 * - This file is LOCKED for v1
 * - Any change to defaults or required fields is BREAKING
 */

/**
 * Default legal configuration (v1).
 *
 * IMPORTANT DESIGN DECISIONS:
 * - This file defines the INITIAL config only
 * - It is written ONCE and never overwritten
 * - Users are expected to EDIT this file manually
 *
 * v1 REQUIREMENTS:
 * - `paths.layout` is REQUIRED
 * - Policies MUST be rendered inside a user-controlled layout
 * - No fallback rendering is allowed anywhere in v1
 *
 * REQUIRED SETUP:
 * - The default layout path is a placeholder
 * - Users MUST point this at a real layout before use
 */
export const DEFAULT_CONFIG: LegalConfig = {
  /**
   * Master enable switch.
   *
   * Users may disable the entire system explicitly,
   * but generation is ENABLED by default.
   */
  enabled: true,

  /**
   * Output & layout configuration.
   *
   * NOTE:
   * - `layout` is REQUIRED in v1
   * - This placeholder MUST be changed by the user
   * - Reader/templates will fail hard if invalid
   */
  paths: {
    /**
     * Base URL path under which policies are generated.
     */
    base: "/legal",

    /**
     * REQUIRED Astro layout.
     *
     * MUST resolve to a real `.astro` layout file.
     *
     * Example:
     *   "/src/layouts/Layout.astro"
     *
     * This must be updated to your actual layout path.
     */
    layout: "/src/layouts/Layout.astro",
  },

  /**
   * Effective date (set once on initial config creation).
   */
  effectiveDate: INITIAL_EFFECTIVE_DATE,

  /**
   * Contact email addresses.
   *
   * Injected into policy templates at build time.
   * Individual policies may REQUIRE specific emails.
   */
  contacts: {
    legalEmail: "legal@example.com",
    privacyEmail: "privacy@example.com",
    abuseEmail: "abuse@example.com",
    lawEnforcementEmail: "law@example.com",
    securityEmail: "security@example.com",
  },

  /**
   * Organisation metadata.
   *
   * Used across multiple policies
   * (privacy, terms, compliance, disclosures).
   */
  organisation: {
    name: "Example Company Ltd",
    jurisdiction: "United Kingdom",
    address: "123 Example Street, London, UK",
    companyNumber: "12345678",
  },

  /**
   * Policy enablement map.
   *
   * RULES:
   * - true  → policy MAY be generated if missing
   * - false → policy MUST NEVER be generated
   *
   * IMPORTANT:
   * - Existing files are NEVER overwritten
   * - These flags only control first-time scaffolding
   */
  policies: {
    terms: false,
    privacy: false,
    cookies: false,
    "acceptable-use": false,
    disclaimer: false,
    "governing-law": false,

    csam: false,
    abuse: false,
    harassment: false,
    "content-moderation": false,
    "trust-safety": false,

    security: false,
    "law-enforcement": false,
    transparency: false,
    "vulnerability-disclosure": false,
    "incident-response": false,

    gdpr: false,
    ccpa: false,
    "uk-dpa": false,
    "data-retention": false,
    "data-processing": false,
    subprocessors: false,

    refunds: false,
    billing: false,
    pricing: false,
    chargebacks: false,
    "financial-compliance": false,

    dmca: false,
    copyright: false,
    trademark: false,
    "open-source": false,
    "user-content-license": false,

    "code-of-conduct": false,
    ethics: false,
    "modern-slavery": false,
    whistleblowing: false,
    "equal-opportunities": false,

    "api-usage": false,
    "ai-usage": false,
    "training-data": false,
    automation: false,
    "third-party-services": false,
  },
};

/**
 * Ensure `legal.config.json` exists in the canonical location.
 *
 * HARD GUARANTEES:
 * - Never overwrites an existing config
 * - Never throws (fail-safe)
 *
 * CREATION:
 * - existing canonical file → untouched
 * - missing → default created
 */
export function ensureLegalConfigFile(): void {
  try {
    const created = writeDefaultLegalConfig();

    if (created) {
      console.log(
        "[astro-legal] created config-files/legal.config.json"
      );
    }
  } catch {
    /**
     * HARD FAIL-SAFE
     *
     * This plugin must NEVER:
     * - Crash Astro dev
     * - Block a production build
     *
     * If config creation fails, the reader fails closed.
     */
  }
}

export function writeDefaultLegalConfig(force = false): boolean {
  fs.mkdirSync(CONFIG_DIR, { recursive: true });

  try {
    if (!force) {
      fs.writeFileSync(
        NEW_CONFIG_PATH,
        JSON.stringify(DEFAULT_CONFIG, null, 2),
        { encoding: "utf-8", flag: "wx" }
      );
    } else {
      fs.writeFileSync(
        NEW_CONFIG_PATH,
        JSON.stringify(DEFAULT_CONFIG, null, 2),
        { encoding: "utf-8", flag: "w" }
      );
    }

    return true;
  } catch (error) {
    if (
      !force &&
      error instanceof Error &&
      "code" in error &&
      error.code === "EEXIST"
    ) {
      return false;
    }

    throw error;
  }
}

export function buildLegalConfig(policies: Record<string, boolean>): LegalConfig {
  return {
    ...DEFAULT_CONFIG,
    policies: {
      ...DEFAULT_CONFIG.policies,
      ...policies,
    },
  };
}
