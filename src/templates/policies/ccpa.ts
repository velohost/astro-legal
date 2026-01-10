import { renderPolicyPage } from "../helpers/_policyPage.js";

/**
 * CCPA Policy template (v1).
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
export function renderCcpaPolicy(): string {
  return renderPolicyPage({
    title: "CCPA/CPRA Privacy Notice",

    body: `
<h2>1. Purpose and scope</h2>

<p>
This notice describes how <strong>{organisation.name}</strong> handles
personal information for residents of California under the CCPA/CPRA.
It applies where California privacy law is applicable.
</p>

<h2>2. Definitions</h2>

<p>
"Personal information" includes information that identifies, relates to,
or could reasonably be linked to a particular consumer or household.
"Sale" and "share" have the meanings defined under California law.
</p>

<h2>3. Categories of information collected</h2>

<p>
Depending on how you use the Services, we may collect identifiers,
commercial information, internet activity, and other data described in
our Privacy Policy.
</p>

<h2>4. Purposes of use</h2>

<ul>
  <li>Provide and maintain the Services</li>
  <li>Security, fraud prevention, and abuse detection</li>
  <li>Compliance with legal obligations</li>
  <li>Service analytics and improvement</li>
</ul>

<h2>5. Sale or sharing of personal information</h2>

<p>
We do not sell personal information. If we engage in activities that
could be considered "sharing" under CPRA (e.g., certain analytics),
we provide appropriate controls and disclosures.
</p>

<h2>6. Consumer rights</h2>

<p>
California residents may have the right to know, access, correct,
delete, or opt out of the sale or sharing of personal information.
Requests can be made using the contact information below.
</p>

<h2>7. Non-discrimination</h2>

<p>
We do not discriminate against individuals who exercise their privacy
rights.
</p>

<h2>8. Reporting and contact</h2>

<p>
To submit a CCPA/CPRA request, contact:
<strong>{contacts.privacyEmail}</strong>.
We may need to verify your identity before fulfilling requests.
</p>

<h2>9. Policy updates</h2>

<p>
Material changes will update the effective date above.
</p>
`
  });
}
