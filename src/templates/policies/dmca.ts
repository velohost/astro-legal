import { renderPolicyPage } from "../helpers/_policyPage.js";

/**
 * DMCA Policy template (v1).
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
export function renderDmcaPolicy(): string {
  return renderPolicyPage({
    title: "DMCA Copyright Policy",

    body: `
<h2>1. Purpose and scope</h2>

<p>
This policy explains how <strong>{organisation.name}</strong> responds
to copyright infringement claims under the Digital Millennium Copyright
Act (DMCA). It applies to content uploaded, shared, or hosted through
the Services.
</p>

<h2>2. Definitions</h2>

<p>
"Copyright" is a legal right protecting original creative works.
"Infringement" occurs when copyrighted material is used without
authorization or legal permission. "Notice" refers to a DMCA takedown
request.
</p>

<h2>3. Policy statement</h2>

<p>
We respect intellectual property rights and respond to valid DMCA
notices. We may remove or disable access to infringing content and take
appropriate action against repeat infringers.
</p>

<h2>4. Submitting a DMCA notice</h2>

<p>
Notices should include: identification of the copyrighted work,
identification of the allegedly infringing material, contact
information, a statement of good faith belief, and a statement under
penalty of perjury that the notice is accurate.
</p>

<h2>5. Counter-notifications</h2>

<p>
Users may submit a counter-notification if they believe content was
removed in error. Counter-notices must include identification of the
material removed, a statement under penalty of perjury, and consent to
jurisdiction as required by law.
</p>

<h2>6. Repeat infringers</h2>

<p>
We may terminate accounts of users who repeatedly violate copyright
policy or applicable laws.
</p>

<h2>7. Reporting and contact</h2>

<p>
DMCA notices and counter-notices should be sent to:
<strong>{contacts.legalEmail}</strong>.
</p>

<h2>8. Policy updates</h2>

<p>
Material changes will update the effective date above.
</p>
`
  });
}
