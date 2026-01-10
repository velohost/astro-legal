import { renderPolicyPage } from "../helpers/_policyPage.js";

/**
 * Open Source Policy template (v1).
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
export function renderOpenSourcePolicy(): string {
  return renderPolicyPage({
    title: "Open Source Policy",

    body: `
<h2>1. Purpose and scope</h2>

<p>
This policy explains how <strong>{organisation.name}</strong> uses and
distributes open source software in the Services. It applies to
software components, dependencies, and third-party libraries.
</p>

<h2>2. Definitions</h2>

<p>
"Open source" refers to software distributed under licenses that permit
use, modification, and redistribution. "License obligations" include
requirements such as attribution or source availability.
</p>

<h2>3. Policy statement</h2>

<p>
We respect open source licenses and comply with applicable obligations.
Where required, we provide attributions, license texts, or source code
disclosures in accordance with the relevant license terms.
</p>

<h2>4. Use of open source components</h2>

<ul>
  <li>We track open source dependencies used in the Services</li>
  <li>We review licenses for compatibility and compliance</li>
  <li>We maintain records of attribution and notices</li>
</ul>

<h2>5. Contributions and community</h2>

<p>
We may contribute to open source projects and encourage responsible
participation. Any contributions are subject to the applicable project
license and contribution guidelines.
</p>

<h2>6. Reporting and contact</h2>

<p>
Questions about open source compliance can be sent to:
<strong>{contacts.legalEmail}</strong>.
</p>

<h2>7. Policy updates</h2>

<p>
Material changes will update the effective date above.
</p>
`
  });
}
