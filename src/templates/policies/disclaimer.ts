import { renderPolicyPage } from "../helpers/_policyPage.js";

/**
 * Disclaimer Policy template (v1).
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
export function renderDisclaimerPolicy(): string {
  return renderPolicyPage({
    title: "Disclaimer",

    body: `
<h2>1. Purpose and scope</h2>

<p>
This disclaimer describes limitations of liability and informational
boundaries for the Services provided by <strong>{organisation.name}</strong>.
It applies to all content, features, and materials available through the
Services.
</p>

<h2>2. No professional advice</h2>

<p>
Content provided through the Services is for general informational
purposes only and does not constitute legal, financial, medical, or
professional advice. You should seek professional advice for specific
matters.
</p>

<h2>3. No warranties</h2>

<p>
The Services are provided "as is" and "as available" without warranties
of any kind. We do not guarantee accuracy, completeness, or reliability
of content or services.
</p>

<h2>4. Limitation of liability</h2>

<p>
To the maximum extent permitted by law, <strong>{organisation.name}</strong>
is not liable for any indirect, incidental, or consequential damages
arising from use of the Services.
</p>

<h2>5. Third-party content</h2>

<p>
We are not responsible for third-party content or services linked from
the Services. Use of third-party content is at your own risk.
</p>

<h2>6. Reporting and contact</h2>

<p>
Questions about this disclaimer can be sent to:
<strong>{contacts.legalEmail}</strong>.
</p>

<h2>7. Policy updates</h2>

<p>
Material changes will update the effective date above.
</p>
`
  });
}
