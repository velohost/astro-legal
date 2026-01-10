import { renderPolicyPage } from "../helpers/_policyPage.js";

/**
 * Automation Policy template (v1).
 *
 * AUTHORING CONTRACT:
 * - NO frontmatter here
 * - NO layout logic here
 * - NO imports from @legal
 * - NO filesystem access
 * - Body HTML ONLY
 *
 * AVAILABLE VARIABLES (in body HTML):
 * - organisation.name
 * - organisation.jurisdiction
 * - organisation.address
 * - organisation.companyNumber
 * - contacts.privacyEmail
 * - contacts.legalEmail
 * - contacts.abuseEmail
 * - contacts.lawEnforcementEmail
 * - contacts.securityEmail
 *
 * SOURCE:
 * - All variables are injected by renderPolicyPage()
 * - This file MUST NOT redefine or extend them
 *
 * VERSIONING:
 * - This contract is stable for v1
 * - Adding new variables requires v2
 */
export function renderAutomationPolicy(): string {
  return renderPolicyPage({
    title: "Automation Policy",

    body: `
<h2>1. Purpose and scope</h2>

<p>
This policy governs the use of automated tools, scripts, or bots on the
Services operated by <strong>{organisation.name}</strong>. It applies to
all automated access, scraping, or interaction with the Services.
</p>

<h2>2. Definitions</h2>

<p>
"Automation" includes bots, scripts, crawlers, and any non-human access
to the Services. "Rate limits" refer to restrictions on request volume
or frequency.
</p>

<h2>3. Policy statement</h2>

<p>
Automation must be used responsibly and in compliance with our policies.
We may restrict or block automation that harms service performance,
security, or user experience.
</p>

<h2>4. Acceptable automation</h2>

<ul>
  <li>Automation that complies with published API terms</li>
  <li>Automation that respects rate limits and access controls</li>
  <li>Automation that does not disrupt or degrade the Services</li>
</ul>

<h2>5. Prohibited automation</h2>

<ul>
  <li>Unauthorized scraping of data or content</li>
  <li>Bypassing authentication or access restrictions</li>
  <li>High-volume requests that disrupt service availability</li>
  <li>Automated abuse, harassment, or spam</li>
</ul>

<h2>6. Enforcement and consequences</h2>

<p>
We may throttle, block, or suspend access for abusive automation.
Repeated violations may result in termination of access.
</p>

<h2>7. Reporting and contact</h2>

<p>
Automation-related questions should be sent to:
<strong>{contacts.securityEmail}</strong>.
</p>

<h2>8. Policy updates</h2>

<p>
Material changes will update the effective date above.
</p>
`
  });
}
