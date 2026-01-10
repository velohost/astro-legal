import { renderPolicyPage } from "../helpers/_policyPage.js";

/**
 * Pricing Policy template (v1).
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
export function renderPricingPolicy(): string {
  return renderPolicyPage({
    title: "Pricing Policy",

    body: `
<h2>1. Purpose and scope</h2>

<p>
This policy explains how pricing is presented and applied for the
Services provided by <strong>{organisation.name}</strong>. It applies to
all plans, add-ons, usage-based fees, and promotional offers.
</p>

<h2>2. Definitions</h2>

<p>
"Price" means the amount charged for a plan or service. "Add-on" means
an optional feature or service that may incur additional fees.
</p>

<h2>3. Policy statement</h2>

<p>
We aim to provide clear and accurate pricing information. Prices are
subject to change, and the applicable price is the one in effect at the
time of purchase or renewal.
</p>

<h2>4. Pricing structure</h2>

<ul>
  <li>Subscription plans may be billed monthly or annually</li>
  <li>Usage-based fees may apply for certain features or limits</li>
  <li>Add-ons or premium features may incur additional charges</li>
  <li>Taxes may be added where required by law</li>
</ul>

<h2>5. Promotions and discounts</h2>

<p>
Promotional pricing may be time-limited or subject to conditions.
Discounts typically apply only to new periods and do not retroactively
affect prior charges unless stated otherwise.
</p>

<h2>6. Price changes</h2>

<p>
We may update pricing from time to time. Where required, we will provide
advance notice. Continued use of the Services after a price change may
constitute acceptance of the new price.
</p>

<h2>7. Reporting and contact</h2>

<p>
Pricing questions can be directed to:
<strong>{contacts.legalEmail}</strong>.
</p>

<h2>8. Policy updates</h2>

<p>
Material changes will update the effective date above.
</p>
`
  });
}
