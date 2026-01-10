import fs from "node:fs";
import type { LegalConfig } from "../types.js";
import { NEW_CONFIG_PATH } from "./paths.js";

/**
 * astro-legal — configuration reader (v1)
 *
 * RESPONSIBILITY:
 * - Load and normalise legal.config.json
 * - Enforce all v1 invariants
 * - Fail closed on ANY ambiguity
 *
 * NON-RESPONSIBILITIES:
 * - No filesystem writes
 * - No side effects
 * - No logging
 *
 * VERSIONING:
 * - This file is API-stable for v1
 * - Any relaxation of validation rules is a v2 change
 */

/**
 * Hard fallback configuration.
 *
 * FAIL-CLOSED GUARANTEES:
 * - Plugin disabled
 * - No policy generation
 * - No runtime output
 *
 * This config MUST be inert.
 */
const FALLBACK_CONFIG: LegalConfig = {
  enabled: false,

  paths: {
    base: "/",
    // Intentionally invalid placeholder
    layout: "/__invalid__",
  },

  effectiveDate: "1970-01-01",

  contacts: {},
  organisation: {},
  policies: {},
};

/**
 * Load and normalise legal.config.json.
 *
 * HARD GUARANTEES:
 * - Never throws
 * - Never writes to disk
 * - Always returns a LegalConfig
 * - Fails closed on ANY ambiguity
 */
export function loadLegalConfig(): LegalConfig {
  try {
    if (!fs.existsSync(NEW_CONFIG_PATH)) {
      return FALLBACK_CONFIG;
    }

    const raw = fs.readFileSync(NEW_CONFIG_PATH, "utf-8");
    const parsed = JSON.parse(raw);

    return normaliseConfig(parsed);
  } catch {
    return FALLBACK_CONFIG;
  }
}

/* -------------------------------------------------
   Normalisation (v1 strict)
------------------------------------------------- */

/**
 * Normalise raw input into a valid LegalConfig.
 *
 * v1 HARD RULES:
 * - layout is REQUIRED
 * - Invalid layout DISABLES plugin entirely
 * - Partial configs are allowed only if safe
 */
function normaliseConfig(input: unknown): LegalConfig {
  if (!isObject(input)) {
    return FALLBACK_CONFIG;
  }

  const enabled =
    typeof input.enabled === "boolean"
      ? input.enabled
      : false;

  const paths = normalisePaths(input.paths);

  /**
   * v1 HARD ENFORCEMENT:
   * - layout MUST exist and be valid
   * - Missing or invalid layout disables plugin
   */
  if (!paths.layout) {
    return FALLBACK_CONFIG;
  }

  const effectiveDate = normaliseEffectiveDate(
    input.effectiveDate
  );
  const contacts = normaliseContacts(input.contacts);
  const organisation = normaliseOrganisation(input.organisation);
  const policies = normalisePolicies(input.policies);

  return {
    enabled,
    paths,
    effectiveDate,
    contacts,
    organisation,
    policies,
  };
}

/* -------------------------------------------------
   Section normalisers
------------------------------------------------- */

function normalisePaths(
  value: unknown
): LegalConfig["paths"] {
  if (!isObject(value)) {
    return FALLBACK_CONFIG.paths;
  }

  const base =
    isString(value.base) && value.base.startsWith("/")
      ? value.base.replace(/\/+$/, "") || "/"
      : "/";

  const layout =
    isValidLayout(value.layout)
      ? value.layout
      : null;

  if (!layout) {
    return FALLBACK_CONFIG.paths;
  }

  return { base, layout };
}

function normaliseContacts(
  value: unknown
): LegalConfig["contacts"] {
  if (!isObject(value)) return {};

  return {
    legalEmail: asOptionalEmail(value.legalEmail),
    privacyEmail: asOptionalEmail(value.privacyEmail),
    abuseEmail: asOptionalEmail(value.abuseEmail),
    lawEnforcementEmail: asOptionalEmail(value.lawEnforcementEmail),
    securityEmail: asOptionalEmail(value.securityEmail),
  };
}

function normaliseOrganisation(
  value: unknown
): LegalConfig["organisation"] {
  if (!isObject(value)) return {};

  return {
    name: asOptionalString(value.name),
    jurisdiction: asOptionalString(value.jurisdiction),
    address: asOptionalString(value.address),
    companyNumber: asOptionalString(value.companyNumber),
  };
}

function normalisePolicies(
  value: unknown
): LegalConfig["policies"] {
  if (!isObject(value)) return {};

  const policies: Record<string, boolean> = {};

  for (const [key, val] of Object.entries(value)) {
    if (typeof val === "boolean") {
      policies[key] = val;
    }
  }

  return policies;
}

function normaliseEffectiveDate(
  value: unknown
): LegalConfig["effectiveDate"] {
  if (!isString(value)) return FALLBACK_CONFIG.effectiveDate;

  const trimmed = value.trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
    return FALLBACK_CONFIG.effectiveDate;
  }

  return trimmed;
}

/* -------------------------------------------------
   Helpers (pure, deterministic)
------------------------------------------------- */

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function asOptionalString(
  value: unknown
): string | undefined {
  return isString(value) ? value : undefined;
}

function asOptionalEmail(
  value: unknown
): string | undefined {
  return isString(value) && value.includes("@")
    ? value
    : undefined;
}

/**
 * Layout validation (v1 strict).
 *
 * Allowed:
 * - absolute paths (e.g. "/src/layouts/Layout.astro")
 * - alias paths (e.g. "@layouts/Base.astro")
 *
 * Rejected:
 * - empty strings
 * - traversal ("..")
 * - relative paths ("./", "../")
 * - non-strings
 */
function isValidLayout(value: unknown): value is string {
  if (!isString(value)) return false;
  if (value.includes("..")) return false;

  return (
    value.startsWith("/") ||
    value.startsWith("@")
  );
}
