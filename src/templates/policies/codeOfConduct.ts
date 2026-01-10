import { renderPolicyPage } from "../helpers/_policyPage.js";

/**
 * Code of Conduct Policy template (v1).
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
export function renderCodeOfConductPolicy(): string {
  return renderPolicyPage({
    title: "Code of Conduct",

    body: `
<h2>1. Purpose and scope</h2>

<p>
This Code of Conduct sets expectations for respectful and constructive
behavior within the Services operated by <strong>{organisation.name}</strong>.
It applies to all users, contributors, and community interactions.
</p>

<h2>2. Definitions</h2>

<p>
"Community" includes all users, contributors, and participants in
forums, collaborations, or communications hosted by the Services.
</p>

<h2>3. Policy statement</h2>

<p>
We are committed to a welcoming, inclusive environment. All participants
are expected to engage respectfully, professionally, and in good faith.
</p>

<h2>4. Expected behavior</h2>

<ul>
  <li>Be respectful and considerate of others</li>
  <li>Communicate constructively and avoid personal attacks</li>
  <li>Assume good intent and resolve disagreements politely</li>
  <li>Respect privacy and boundaries</li>
</ul>

<h2>5. Prohibited conduct</h2>

<ul>
  <li>Harassment, bullying, or discrimination</li>
  <li>Threats, intimidation, or abusive language</li>
  <li>Sharing private or personal information without consent</li>
  <li>Disruptive behavior that undermines community safety</li>
</ul>

<h2>6. Enforcement and consequences</h2>

<p>
Violations may result in content removal, warnings, suspension, or
account termination depending on severity and impact.
</p>

<h2>7. Reporting and contact</h2>

<p>
Report conduct concerns to:
<strong>{contacts.abuseEmail}</strong>.
</p>

<h2>8. Policy updates</h2>

<p>
Material changes will update the effective date above.
</p>
`
  });
}
