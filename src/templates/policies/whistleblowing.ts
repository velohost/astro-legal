import { renderPolicyPage } from "../helpers/_policyPage.js";

/**
 * Whistleblowing Policy template (v1).
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
export function renderWhistleblowingPolicy(): string {
  return renderPolicyPage({
    title: "Whistleblowing Policy",

    body: `
<h2>1. Purpose and scope</h2>

<p>
This policy provides a safe way to report concerns about misconduct or
unethical behavior related to <strong>{organisation.name}</strong>. It
applies to employees, contractors, and partners.
</p>

<h2>2. Definitions</h2>

<p>
"Whistleblowing" means reporting suspected wrongdoing in good faith,
including fraud, corruption, legal violations, or serious misconduct.
</p>

<h2>3. Policy statement</h2>

<p>
We encourage good-faith reporting and prohibit retaliation against
individuals who raise concerns. Reports are handled confidentially
to the extent possible.
</p>

<h2>4. Reportable concerns</h2>

<ul>
  <li>Fraud, bribery, or corruption</li>
  <li>Violations of law or regulatory obligations</li>
  <li>Serious safety or security risks</li>
  <li>Abuse of power or unethical conduct</li>
</ul>

<h2>5. Investigation and response</h2>

<p>
We review reports promptly and may conduct investigations, take remedial
action, or escalate concerns as required by law.
</p>

<h2>6. Reporting and contact</h2>

<p>
Whistleblowing reports should be sent to:
<strong>{contacts.legalEmail}</strong>.
</p>

<h2>7. Policy updates</h2>

<p>
Material changes will update the effective date above.
</p>
`
  });
}
