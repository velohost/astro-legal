import { renderPolicyPage } from "../helpers/_policyPage.js";

/**
 * Financial Compliance Policy template (v1).
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
export function renderFinancialCompliancePolicy(): string {
  return renderPolicyPage({
    title: "Financial Compliance Policy",

    body: `
<h2>1. Purpose and scope</h2>

<p>
This policy describes financial compliance practices for the Services
operated by <strong>{organisation.name}</strong>. It applies to billing,
payments, fraud prevention, and regulatory obligations.
</p>

<h2>2. Definitions</h2>

<p>
"Financial compliance" includes adherence to applicable financial
regulations, tax requirements, anti-fraud measures, and payment
processor rules.
</p>

<h2>3. Policy statement</h2>

<p>
We comply with applicable financial laws and regulations. We may
implement controls to prevent fraud, enforce payment rules, and protect
the integrity of financial transactions.
</p>

<h2>4. Compliance measures</h2>

<ul>
  <li>Use of approved payment processors and secure payment methods</li>
  <li>Monitoring for fraudulent or abusive transactions</li>
  <li>Record-keeping for tax and regulatory purposes</li>
  <li>Enforcement of sanctions or restricted activities as required</li>
</ul>

<h2>5. User obligations</h2>

<p>
Users must provide accurate billing information and comply with all
applicable payment terms. Misuse of payment systems may result in
restrictions or termination.
</p>

<h2>6. Reporting and contact</h2>

<p>
Questions about financial compliance should be sent to:
<strong>{contacts.legalEmail}</strong>.
</p>

<h2>7. Policy updates</h2>

<p>
Material changes will update the effective date above.
</p>
`
  });
}
