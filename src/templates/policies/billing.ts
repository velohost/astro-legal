import { renderPolicyPage } from "../helpers/_policyPage.js";

/**
 * Billing Policy template (v1).
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
export function renderBillingPolicy(): string {
  return renderPolicyPage({
    title: "Billing Policy",

    body: `
<h2>1. Purpose and scope</h2>

<p>
This policy explains how billing works for the Services operated by
<strong>{organisation.name}</strong>, including invoicing, payment
methods, and billing disputes.
</p>

<h2>2. Definitions</h2>

<p>
"Billing cycle" is the recurring period for charges. "Invoice" means a
statement of charges for Services delivered. "Payment method" means the
credit card or other method used to pay.
</p>

<h2>3. Policy statement</h2>

<p>
You agree to pay all applicable fees for your selected plan or usage.
We aim to provide transparent billing information and timely receipts.
</p>

<h2>4. Payment methods</h2>

<p>
You must provide a valid payment method. By providing payment details,
you authorize us to charge the applicable fees and taxes.
</p>

<h2>5. Billing and invoicing</h2>

<p>
Charges are typically applied in advance for subscriptions or in
arrears for usage-based fees. Invoices are made available through
your account or by email.
</p>

<h2>6. Failed payments</h2>

<p>
If payment fails, we may retry charges and notify you. Continued failure
may result in suspension or limitation of Services until payment is
received.
</p>

<h2>7. Disputes and errors</h2>

<p>
If you believe a billing error occurred, contact us promptly. We may
request documentation or account details to investigate and resolve
the issue.
</p>

<h2>8. Reporting and contact</h2>

<p>
Billing questions should be directed to:
<strong>{contacts.legalEmail}</strong>.
</p>

<h2>9. Policy updates</h2>

<p>
Material changes will update the effective date above.
</p>
`
  });
}
