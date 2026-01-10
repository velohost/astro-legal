/**
 * Shared policy page wrapper (v1).
 *
 * SINGLE SOURCE OF TRUTH for all generated policy pages.
 *
 * HARD GUARANTEES:
 * - Enforces REQUIRED layout
 * - Single source of Astro frontmatter logic
 * - No policy-specific assumptions
 * - No filesystem access
 * - Deterministic output
 * - Returns FULL `.astro` file contents
 *
 * DESIGN:
 * - Policy templates provide ONLY:
 *   - title (string)
 *   - body (HTML string)
 * - All config, layout, and metadata wiring happens here
 * - If layout is missing → build MUST fail
 *
 * v1 CONTRACT:
 * - `opts.body` MUST be HTML only
 * - No frontmatter
 * - No layout usage
 * - No `<article>` wrapper
 * - All shared metadata comes from `@legal`
 *
 * VERSIONING:
 * - This helper is API-stable for v1
 * - Any changes to shared metadata are v2-breaking
 */
export function renderPolicyPage(opts: {
  title: string;
  body: string;
}): string {
  return `---
import { legal } from "@legal";

/**
 * REQUIRED layout.
 *
 * Layout path is validated earlier during config loading.
 * Missing layout is a hard failure by design (v1).
 */
if (!legal.paths?.layout) {
  throw new Error(
    "[astro-legal] Policies require 'paths.layout' to be configured in legal.config.json"
  );
}

/**
 * Dynamically import configured layout.
 *
 * The import path is trusted here because:
 * - It was validated by reader.ts
 * - It passed v1 layout safety rules
 *
 * Vite cannot statically analyze this import by design.
 */
const Layout = (await import(/* @vite-ignore */ legal.paths.layout)).default;

/**
 * Shared legal metadata (v1).
 *
 * NOTE:
 * - This is the ONLY metadata exposed to policy templates
 * - Extensions require a v2 release
 */
const organisation = legal.organisation;
const contacts = legal.contacts;
const effectiveDate = legal.effectiveDate;

const formattedEffectiveDate = formatEffectiveDate(effectiveDate);

function formatEffectiveDate(value: string): string {
  if (typeof value !== "string") return "Unknown";

  const match = value.match(/^(\\d{4})-(\\d{2})-(\\d{2})$/);
  if (!match) return value;

  const [, year, month, day] = match;
  const monthIndex = Number(month) - 1;
  const dayNumber = Number(day);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  if (
    Number.isNaN(monthIndex) ||
    Number.isNaN(dayNumber) ||
    monthIndex < 0 ||
    monthIndex > 11
  ) {
    return value;
  }

  return (
    dayNumber +
    " " +
    monthNames[monthIndex] +
    " " +
    year
  );
}
---

<Layout>
  <article>
    <h1>${opts.title}</h1>

    <p><strong>Effective date:</strong> {formattedEffectiveDate}</p>

    <hr />

    ${opts.body}
  </article>
</Layout>
`;
}
