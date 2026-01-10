import { renderPolicyPage } from "../helpers/_policyPage.js";

/**
 * Cookies Policy template (v1).
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
export function renderCookiesPolicy(): string {
  return renderPolicyPage({
    title: "Cookies Policy",

    body: `
<h2>1. Purpose and scope</h2>

<p>
This policy explains how <strong>{organisation.name}</strong> uses
cookies and similar technologies on the Services. It applies to all
websites, apps, and user interfaces that employ cookies or local storage.
</p>

<h2>2. Definitions</h2>

<p>
"Cookies" are small text files stored on a device. "Similar technologies"
include local storage, pixels, and device identifiers used for similar
purposes.
</p>

<h2>3. Policy statement</h2>

<p>
We use cookies only for essential functionality, security, and
performance, unless otherwise disclosed and permitted by law. We do not
use cookies for invasive tracking or profiling without appropriate
notice and consent where required.
</p>

<h2>4. Types of cookies</h2>

<ul>
  <li>Essential cookies for authentication and security</li>
  <li>Functional cookies for preferences and settings</li>
  <li>Performance cookies for aggregated analytics</li>
</ul>

<h2>5. Managing cookies</h2>

<p>
You can control cookies through your browser or device settings.
Disabling cookies may affect the functionality of the Services.
</p>

<h2>6. Third-party cookies</h2>

<p>
Third-party services may set cookies under their own policies. We
encourage you to review their privacy practices.
</p>

<h2>7. Reporting and contact</h2>

<p>
Questions about cookies can be sent to:
<strong>{contacts.privacyEmail}</strong>.
</p>

<h2>8. Policy updates</h2>

<p>
Material changes will update the effective date above.
</p>
`
  });
}
