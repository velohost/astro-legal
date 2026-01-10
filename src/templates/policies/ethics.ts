import { renderPolicyPage } from "../helpers/_policyPage.js";

/**
 * Ethics Policy template (v1).
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
export function renderEthicsPolicy(): string {
  return renderPolicyPage({
    title: "Ethics Policy",

    body: `
<h2>1. Purpose and scope</h2>

<p>
This policy sets ethical expectations for the Services operated by
<strong>{organisation.name}</strong>. It applies to users, partners,
and internal stakeholders involved in delivering the Services.
</p>

<h2>2. Definitions</h2>

<p>
"Ethics" refers to principles of fairness, accountability, and respect
for individuals, communities, and lawful conduct.
</p>

<h2>3. Policy statement</h2>

<p>
We aim to operate responsibly and transparently. We expect behavior that
respects human rights, avoids harm, and promotes trust and integrity.
</p>

<h2>4. Ethical commitments</h2>

<ul>
  <li>Respect privacy and user autonomy</li>
  <li>Promote fairness and avoid discriminatory practices</li>
  <li>Prevent misuse or harmful activity</li>
  <li>Be transparent about material risks and limitations</li>
</ul>

<h2>5. Prohibited conduct</h2>

<ul>
  <li>Using the Services to exploit or harm others</li>
  <li>Misrepresentation or deceptive practices</li>
  <li>Abusive, discriminatory, or hateful behavior</li>
  <li>Attempts to bypass safety or security measures</li>
</ul>

<h2>6. Enforcement and accountability</h2>

<p>
Violations may result in content removal, access restrictions, or
termination. We may review ethical concerns and update safeguards over
time.
</p>

<h2>7. Reporting and contact</h2>

<p>
Ethics concerns can be reported to:
<strong>{contacts.legalEmail}</strong> or
<strong>{contacts.abuseEmail}</strong>.
</p>

<h2>8. Policy updates</h2>

<p>
Material changes will update the effective date above.
</p>
`
  });
}
