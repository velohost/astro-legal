import { renderPolicyPage } from "../helpers/_policyPage.js";

/**
 * CSAM Policy template (v1).
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
export function renderCsamPolicy(): string {
  return renderPolicyPage({
    title: "Child Safety and CSAM Policy",

    body: `
<h2>1. Purpose and scope</h2>

<p>
This policy explains <strong>{organisation.name}</strong>'s strict
prohibition of child sexual abuse material (CSAM) and related harms.
It applies to all use of the Services, including user-generated
content, communications, files, profiles, and any other interactions
that occur through or in connection with the Services.
</p>

<h2>2. Definitions</h2>

<p>
"CSAM" refers to any content that depicts or exploits minors in a
sexual context, including images, videos, audio, text, or links that
facilitate access to such material. "Child sexual exploitation"
includes grooming, coercion, or manipulation of minors for sexual
purposes. "Minor" refers to anyone under the age of 18, or the age of
majority where higher.
</p>

<h2>3. Policy statement</h2>

<p>
We have zero tolerance for CSAM, child sexual exploitation, or grooming.
We do not allow the creation, sharing, solicitation, possession, or
distribution of CSAM or any material that sexualizes minors. Any
attempt to use the Services to harm minors is strictly prohibited.
</p>

<h2>4. Prohibited conduct</h2>

<ul>
  <li>Creating, uploading, sharing, or distributing CSAM</li>
  <li>Soliciting or attempting to obtain CSAM or sexual contact with minors</li>
  <li>Grooming, coercing, manipulating, or trafficking minors</li>
  <li>Linking to, indexing, or advertising sources of CSAM</li>
  <li>Using the Services to facilitate child exploitation or abuse</li>
  <li>Attempting to evade detection or moderation of CSAM</li>
</ul>

<h2>5. Detection and prevention</h2>

<p>
We may use a combination of user reports, automated detection, and
human review to identify violations. We may restrict access, remove
content, or take other steps to prevent harm to minors. Safety measures
are designed to balance accuracy, privacy, and legal obligations.
</p>

<h2>6. Reporting and escalation</h2>

<p>
If you become aware of CSAM or child exploitation involving the
Services, report it immediately to:
<strong>{contacts.abuseEmail}</strong>.
Provide as much detail as possible, including URLs, usernames, and
timestamps. If you are law enforcement, contact:
<strong>{contacts.lawEnforcementEmail}</strong>.
</p>

<h2>7. Enforcement and consequences</h2>

<p>
Violations result in immediate content removal, account suspension or
termination, and preservation of relevant data. We may report suspected
CSAM to appropriate authorities and cooperate with lawful requests.
We may also block repeat offenders and apply other safeguards.
</p>

<h2>8. Support for victims</h2>

<p>
If you or someone you know is at risk or has been harmed, seek help
from local support services and law enforcement. We will cooperate
with authorized requests and take steps to prevent further harm.
</p>

<h2>9. Policy updates</h2>

<p>
Material changes will update the effective date above.
</p>
`
  });
}
