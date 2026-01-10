import { renderPolicyPage } from "../helpers/_policyPage.js";

/**
 * Incident Response Policy template (v1).
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
export function renderIncidentResponsePolicy(): string {
  return renderPolicyPage({
    title: "Incident Response Policy",

    body: `
<h2>1. Purpose and scope</h2>

<p>
This policy describes how <strong>{organisation.name}</strong>
prepares for and responds to security or safety incidents affecting the
Services. It applies to operational incidents, data incidents, and
service disruptions.
</p>

<h2>2. Definitions</h2>

<p>
"Incident" means an event that compromises security, availability, or
trust, including unauthorized access, data exposure, abuse campaigns,
or significant service outages.
</p>

<h2>3. Policy statement</h2>

<p>
We maintain procedures to detect, assess, contain, and remediate
incidents. Our goal is to minimize impact, restore services quickly,
and learn from each event to strengthen protections.
</p>

<h2>4. Response lifecycle</h2>

<ul>
  <li>Detection and triage of reports or alerts</li>
  <li>Containment to prevent further harm</li>
  <li>Investigation and root-cause analysis</li>
  <li>Remediation and recovery</li>
  <li>Post-incident review and improvements</li>
</ul>

<h2>5. Communication and notifications</h2>

<p>
We may notify affected users, partners, or regulators when required by
law or when an incident is likely to pose a material risk. Notifications
will include known facts, potential impact, and steps taken.
</p>

<h2>6. Data preservation and evidence</h2>

<p>
We may preserve logs or data relevant to incident investigations,
subject to privacy and legal requirements.
</p>

<h2>7. Reporting and contact</h2>

<p>
If you suspect an incident or urgent security issue, report it to:
<strong>{contacts.securityEmail}</strong>.
Abuse or safety incidents should be sent to:
<strong>{contacts.abuseEmail}</strong>.
</p>

<h2>8. Policy updates</h2>

<p>
Material changes will update the effective date above.
</p>
`
  });
}
