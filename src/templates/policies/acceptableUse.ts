import { renderPolicyPage } from "../helpers/_policyPage.js";

/**
 * Acceptable Use Policy template (v1).
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
export function renderAcceptableUsePolicy(): string {
  return renderPolicyPage({
    title: "Acceptable Use Policy",

    body: `
<h2>1. Purpose and scope</h2>

<p>
This policy sets rules for acceptable use of the Services operated by
<strong>{organisation.name}</strong>. It applies to all users, content,
and interactions with the Services.
</p>

<h2>2. Definitions</h2>

<p>
"Acceptable use" means using the Services lawfully, responsibly, and in
ways that do not harm others or the integrity of the Services.
</p>

<h2>3. Policy statement</h2>

<p>
You must use the Services in compliance with applicable laws, these
policies, and any additional rules provided by <strong>{organisation.name}</strong>.
</p>

<h2>4. Prohibited conduct</h2>

<ul>
  <li>Illegal activity or facilitating unlawful conduct</li>
  <li>Abuse, harassment, or threats of violence</li>
  <li>Distribution of malware, phishing, or fraudulent content</li>
  <li>Attempting to bypass security or access controls</li>
  <li>Disrupting or degrading service performance</li>
  <li>Infringing intellectual property rights</li>
</ul>

<h2>5. Enforcement and consequences</h2>

<p>
Violations may result in content removal, access restrictions, or
termination. We may cooperate with law enforcement where required.
</p>

<h2>6. Reporting and contact</h2>

<p>
Report violations to:
<strong>{contacts.abuseEmail}</strong>.
</p>

<h2>7. Policy updates</h2>

<p>
Material changes will update the effective date above.
</p>
`
  });
}
