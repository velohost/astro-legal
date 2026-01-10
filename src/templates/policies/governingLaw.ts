import { renderPolicyPage } from "../helpers/_policyPage.js";

/**
 * Governing Law Policy template (v1).
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
export function renderGoverningLawPolicy(): string {
  return renderPolicyPage({
    title: "Governing Law and Jurisdiction",

    body: `
<h2>1. Purpose and scope</h2>

<p>
This policy specifies the governing law and jurisdiction for disputes
relating to the Services operated by <strong>{organisation.name}</strong>.
It applies to all users and all claims arising from or related to use
of the Services.
</p>

<h2>2. Governing law</h2>

<p>
These policies and your use of the Services are governed by the laws of
{organisation.jurisdiction}, without regard to conflict of law rules.
</p>

<h2>3. Jurisdiction and venue</h2>

<p>
Unless otherwise required by law, any disputes arising from the Services
will be resolved in the courts located in {organisation.jurisdiction}.
</p>

<h2>4. Informal resolution</h2>

<p>
Before bringing formal claims, we encourage users to contact us to seek
an informal resolution where possible.
</p>

<h2>5. Reporting and contact</h2>

<p>
Questions about governing law can be sent to:
<strong>{contacts.legalEmail}</strong>.
</p>

<h2>6. Policy updates</h2>

<p>
Material changes will update the effective date above.
</p>
`
  });
}
