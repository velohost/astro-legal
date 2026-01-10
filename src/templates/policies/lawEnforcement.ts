import { renderPolicyPage } from "../helpers/_policyPage.js";

/**
 * Law Enforcement Policy template (v1).
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
export function renderLawEnforcementPolicy(): string {
  return renderPolicyPage({
    title: "Law Enforcement Request Policy",

    body: `
<h2>1. Purpose and scope</h2>

<p>
This policy explains how <strong>{organisation.name}</strong> handles
requests from law enforcement or government agencies. It applies to all
requests for user data, content, or account information related to the
Services.
</p>

<h2>2. Definitions</h2>

<p>
"Law enforcement request" refers to any legal demand, order, subpoena,
or other request issued by a competent authority seeking information
related to users or the Services.
</p>

<h2>3. Policy statement</h2>

<p>
We respect user privacy and comply with lawful requests only when
required by applicable law. We assess requests for validity, scope, and
jurisdiction before responding.
</p>

<h2>4. Requirements for requests</h2>

<ul>
  <li>Requests must be in writing and issued by a competent authority</li>
  <li>Requests must be specific and proportionate to the stated purpose</li>
  <li>We may require a court order or equivalent legal process</li>
  <li>Emergency requests must include justification and legal basis</li>
</ul>

<h2>5. Review and response process</h2>

<p>
We review each request for legality, scope, and necessity. Where
permitted, we may narrow overly broad requests or seek clarification.
We respond through secure channels and provide only the data required.
</p>

<h2>6. User notice</h2>

<p>
When legally permitted, we may notify affected users before disclosing
their information. We may delay or withhold notice if prohibited by law
or if notice would create risk of harm or obstruction.
</p>

<h2>7. Data preservation</h2>

<p>
We may preserve data when required by law or valid legal process.
Preservation does not imply that data will be disclosed.
</p>

<h2>8. Reporting and contact</h2>

<p>
Law enforcement agencies should submit requests to:
<strong>{contacts.lawEnforcementEmail}</strong>.
General legal inquiries may be sent to:
<strong>{contacts.legalEmail}</strong>.
</p>

<h2>9. Policy updates</h2>

<p>
Material changes will update the effective date above.
</p>
`
  });
}
