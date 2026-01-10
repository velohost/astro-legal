import { renderPolicyPage } from "../helpers/_policyPage.js";

/**
 * Chargebacks Policy template (v1).
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
export function renderChargebacksPolicy(): string {
  return renderPolicyPage({
    title: "Chargebacks Policy",

    body: `
<h2>1. Purpose and scope</h2>

<p>
This policy explains how chargebacks are handled for purchases made
through the Services operated by <strong>{organisation.name}</strong>.
It applies to all payment methods that support chargebacks.
</p>

<h2>2. Definitions</h2>

<p>
"Chargeback" means a reversal of payment initiated by a cardholder or
payment provider. "Dispute" means a claim that a charge was unauthorized
or incorrect.
</p>

<h2>3. Policy statement</h2>

<p>
We encourage users to contact us first to resolve billing issues.
Unnecessary chargebacks increase costs and may result in account
restrictions.
</p>

<h2>4. Dispute resolution process</h2>

<ul>
  <li>Contact support to resolve billing issues before filing a dispute</li>
  <li>Provide transaction details and account information</li>
  <li>We may request additional documentation to investigate claims</li>
</ul>

<h2>5. Chargeback consequences</h2>

<p>
If a chargeback is filed, we may suspend access to the Services while
the dispute is resolved. Excessive or fraudulent chargebacks may result
in account termination and restrictions on future purchases.
</p>

<h2>6. Reporting and contact</h2>

<p>
For chargeback or billing disputes, contact:
<strong>{contacts.legalEmail}</strong>.
</p>

<h2>7. Policy updates</h2>

<p>
Material changes will update the effective date above.
</p>
`
  });
}
