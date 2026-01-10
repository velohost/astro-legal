import { renderPolicyPage } from "../helpers/_policyPage.js";

/**
 * Transparency Policy template (v1).
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
export function renderTransparencyPolicy(): string {
  return renderPolicyPage({
    title: "Transparency Policy",

    body: `
<h2>1. Purpose and scope</h2>

<p>
This policy describes how <strong>{organisation.name}</strong> promotes
transparency about safety practices, content moderation, and data
requests. It applies to the Services and the information we choose to
publish about our operations.
</p>

<h2>2. Definitions</h2>

<p>
"Transparency" refers to making meaningful information available about
how the Services operate, how policies are enforced, and how we respond
to legal or safety issues.
</p>

<h2>3. Policy statement</h2>

<p>
We believe users should understand how decisions are made and how we
protect the community. We may publish updates, reports, and policy
explanations to support informed use of the Services.
</p>

<h2>4. Information we may publish</h2>

<ul>
  <li>Aggregated content moderation and enforcement statistics</li>
  <li>High-level data on legal requests and compliance</li>
  <li>Policy updates and enforcement guidance</li>
  <li>Security and safety initiatives</li>
  <li>Changes to service functionality that affect user rights</li>
</ul>

<h2>5. Limitations and confidentiality</h2>

<p>
We may withhold details when disclosure would risk safety, violate
privacy, or breach legal obligations. Reports may be delayed, aggregated,
or anonymised to protect users and the integrity of investigations.
</p>

<h2>6. Accuracy and corrections</h2>

<p>
We strive for accuracy in transparency disclosures. If we identify
material errors, we will correct or update reports where feasible.
</p>

<h2>7. Reporting and contact</h2>

<p>
Questions about transparency may be directed to:
<strong>{contacts.legalEmail}</strong> or
<strong>{contacts.privacyEmail}</strong>.
</p>

<h2>8. Policy updates</h2>

<p>
Material changes will update the effective date above.
</p>
`
  });
}
