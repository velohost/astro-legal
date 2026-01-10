import { renderPolicyPage } from "../helpers/_policyPage.js";

/**
 * Trademark Policy template (v1).
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
export function renderTrademarkPolicy(): string {
  return renderPolicyPage({
    title: "Trademark Policy",

    body: `
<h2>1. Purpose and scope</h2>

<p>
This policy explains how <strong>{organisation.name}</strong> handles
trademark rights and infringement claims on the Services. It applies to
all user content, branding, and references to trademarks.
</p>

<h2>2. Definitions</h2>

<p>
"Trademark" refers to a word, symbol, or design that identifies goods
or services. "Infringement" includes unauthorized use likely to cause
confusion about source or affiliation.
</p>

<h2>3. Policy statement</h2>

<p>
Users must respect trademark rights. We may remove or restrict content
that infringes trademarks or misleads users about affiliation.
</p>

<h2>4. Reporting infringement</h2>

<p>
Trademark owners should provide details of their rights, examples of
alleged infringement, and evidence of confusion or misuse. We may
request additional information to evaluate claims.
</p>

<h2>5. Counter-notifications</h2>

<p>
If content is removed due to a trademark claim, the uploader may submit
information to contest the claim. We may restore content if the dispute
is resolved or if we determine removal was in error.
</p>

<h2>6. Repeat violations</h2>

<p>
Repeated trademark violations may result in account restrictions or
termination.
</p>

<h2>7. Reporting and contact</h2>

<p>
Trademark inquiries should be sent to:
<strong>{contacts.legalEmail}</strong>.
</p>

<h2>8. Policy updates</h2>

<p>
Material changes will update the effective date above.
</p>
`
  });
}
