import { renderPolicyPage } from "../helpers/_policyPage.js";

/**
 * Modern Slavery Policy template (v1).
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
export function renderModernSlaveryPolicy(): string {
  return renderPolicyPage({
    title: "Modern Slavery Policy",

    body: `
<h2>1. Purpose and scope</h2>

<p>
This policy outlines <strong>{organisation.name}</strong>'s commitment
to preventing modern slavery and human trafficking in our operations
and supply chain. It applies to employees, contractors, and suppliers.
</p>

<h2>2. Definitions</h2>

<p>
"Modern slavery" includes forced labor, bonded labor, and human
trafficking. "Supply chain" includes vendors, partners, and service
providers supporting the Services.
</p>

<h2>3. Policy statement</h2>

<p>
We have zero tolerance for modern slavery and expect partners to uphold
the same standards. We aim to identify and mitigate risks across our
operations.
</p>

<h2>4. Due diligence and risk management</h2>

<ul>
  <li>Supplier screening and contractual obligations</li>
  <li>Monitoring for indicators of forced labor</li>
  <li>Training and awareness for relevant teams</li>
  <li>Review of high-risk suppliers or regions</li>
</ul>

<h2>5. Reporting and remediation</h2>

<p>
Reports of suspected modern slavery are investigated and addressed.
We may terminate relationships with suppliers who fail to meet our
standards.
</p>

<h2>6. Reporting and contact</h2>

<p>
Concerns can be reported to:
<strong>{contacts.legalEmail}</strong>.
</p>

<h2>7. Policy updates</h2>

<p>
Material changes will update the effective date above.
</p>
`
  });
}
