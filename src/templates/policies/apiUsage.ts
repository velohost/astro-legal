import { renderPolicyPage } from "../helpers/_policyPage.js";

/**
 * API Usage Policy template (v1).
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
export function renderApiUsagePolicy(): string {
  return renderPolicyPage({
    title: "API Usage Policy",

    body: `
<h2>1. Purpose and scope</h2>

<p>
This policy governs access to and use of the APIs provided by
<strong>{organisation.name}</strong>. It applies to all developers,
applications, and integrations that interact with the APIs.
</p>

<h2>2. Definitions</h2>

<p>
"API" refers to application programming interfaces made available by the
Services. "API key" or "token" means credentials used to authenticate
API requests.
</p>

<h2>3. Policy statement</h2>

<p>
We provide APIs to enable legitimate integrations and use cases. You
must use the APIs responsibly, securely, and in compliance with all
applicable laws and this policy.
</p>

<h2>4. Access and authentication</h2>

<ul>
  <li>Keep API credentials confidential and secure</li>
  <li>Do not share or embed keys in public code repositories</li>
  <li>Rotate compromised keys immediately</li>
</ul>

<h2>5. Usage limits and restrictions</h2>

<p>
We may enforce rate limits, quotas, or other usage controls to protect
the Services. Excessive or abusive usage may result in throttling or
access suspension.
</p>

<h2>6. Prohibited use</h2>

<ul>
  <li>Using APIs to scrape or collect data unlawfully</li>
  <li>Attempting to bypass security or access controls</li>
  <li>Using APIs to deliver malware or harmful content</li>
  <li>Interfering with service stability or availability</li>
</ul>

<h2>7. Reporting and contact</h2>

<p>
API questions or security concerns should be sent to:
<strong>{contacts.securityEmail}</strong>.
</p>

<h2>8. Policy updates</h2>

<p>
Material changes will update the effective date above.
</p>
`
  });
}
