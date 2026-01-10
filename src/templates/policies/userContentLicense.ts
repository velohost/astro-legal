import { renderPolicyPage } from "../helpers/_policyPage.js";

/**
 * User Content License Policy template (v1).
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
export function renderUserContentLicensePolicy(): string {
  return renderPolicyPage({
    title: "User Content License Policy",

    body: `
<h2>1. Purpose and scope</h2>

<p>
This policy explains how user content is licensed for use within the
Services operated by <strong>{organisation.name}</strong>. It applies to
all content submitted, uploaded, or shared by users.
</p>

<h2>2. Definitions</h2>

<p>
"User content" means any text, images, files, code, or other materials
submitted by users. "License" means the permissions you grant to us to
use your content for service delivery.
</p>

<h2>3. Policy statement</h2>

<p>
You retain ownership of your content. By submitting content, you grant
us a limited, non-exclusive, worldwide, royalty-free license to host,
store, reproduce, modify (for formatting), and display content solely
as needed to operate and improve the Services.
</p>

<h2>4. Scope of license</h2>

<ul>
  <li>License is limited to providing and improving the Services</li>
  <li>We do not sell your content or claim ownership of it</li>
  <li>You are responsible for ensuring you have rights to submit content</li>
</ul>

<h2>5. Content removal</h2>

<p>
If you remove content or close your account, we will remove or
de-identify content within a reasonable time, subject to legal and
operational requirements such as backups or compliance needs.
</p>

<h2>6. Reporting and contact</h2>

<p>
Questions about content licensing should be sent to:
<strong>{contacts.legalEmail}</strong>.
</p>

<h2>7. Policy updates</h2>

<p>
Material changes will update the effective date above.
</p>
`
  });
}
