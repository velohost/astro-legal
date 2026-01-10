import { renderPolicyPage } from "../helpers/_policyPage.js";

/**
 * Refunds Policy template (v1).
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
export function renderRefundsPolicy(): string {
  return renderPolicyPage({
    title: "Refunds Policy",

    body: `
<h2>1. Purpose and scope</h2>

<p>
This policy explains refund eligibility for purchases made through
the Services operated by <strong>{organisation.name}</strong>. It applies
to all paid plans, subscriptions, and one-time purchases unless stated
otherwise at the point of sale.
</p>

<h2>2. Definitions</h2>

<p>
"Refund" means a return of payment to the original payment method.
"Subscription" means a recurring billing plan. "Service credits" are
non-cash credits issued at our discretion.
</p>

<h2>3. Policy statement</h2>

<p>
We aim to be fair and transparent with refund decisions while protecting
against abuse. Refund eligibility may depend on the product type, usage,
and applicable law.
</p>

<h2>4. Eligibility criteria</h2>

<ul>
  <li>Requests must be submitted within the stated refund window</li>
  <li>Usage levels may affect eligibility for refunds</li>
  <li>Charges resulting from misuse or policy violations are not refundable</li>
  <li>Third-party fees or taxes may be non-refundable</li>
</ul>

<h2>5. Subscription cancellations</h2>

<p>
You may cancel a subscription at any time. Unless required by law,
unused subscription time is generally not refundable. Cancellation
prevents future charges but does not retroactively refund prior periods.
</p>

<h2>6. Refund processing</h2>

<p>
Approved refunds are issued to the original payment method where
possible. Processing times vary by payment provider and may take
several business days.
</p>

<h2>7. Reporting and contact</h2>

<p>
Refund requests or billing questions can be sent to:
<strong>{contacts.legalEmail}</strong>.
Include your account information, transaction details, and reason.
</p>

<h2>8. Policy updates</h2>

<p>
Material changes will update the effective date above.
</p>
`
  });
}
