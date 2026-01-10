import { renderPolicyPage } from "../helpers/_policyPage.js";

/**
 * Copyright Policy template (v1).
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
export function renderCopyrightPolicy(): string {
  return renderPolicyPage({
    title: "Copyright Policy",

    body: `
<h2>1. Purpose and scope</h2>

<p>
This policy explains how <strong>{organisation.name}</strong> handles
copyrighted material and infringement concerns on the Services. It
applies to all user content, uploads, and shared materials.
</p>

<h2>2. Definitions</h2>

<p>
"Copyright" protects original works of authorship. "Infringement" means
use or distribution of copyrighted material without authorization or a
legal basis.
</p>

<h2>3. Policy statement</h2>

<p>
Users must respect intellectual property rights. We will remove or
restrict content that infringes copyright and may take action against
repeat violators.
</p>

<h2>4. Reporting infringement</h2>

<p>
If you believe your copyright is being infringed, contact us with
details of the work, the location of the infringing content, and proof
of ownership. We may request additional information to verify claims.
</p>

<h2>5. Counter-notifications</h2>

<p>
If your content is removed and you believe it was a mistake, you may
submit a counter-notification including your statement of good faith
and relevant supporting details.
</p>

<h2>6. Repeat violations</h2>

<p>
We may suspend or terminate accounts for repeated copyright violations.
</p>

<h2>7. Reporting and contact</h2>

<p>
Copyright inquiries should be sent to:
<strong>{contacts.legalEmail}</strong>.
</p>

<h2>8. Policy updates</h2>

<p>
Material changes will update the effective date above.
</p>
`
  });
}
