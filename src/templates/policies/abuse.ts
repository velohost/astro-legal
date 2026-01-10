import { renderPolicyPage } from "../helpers/_policyPage.js";

/**
 * Abuse Policy template (v1).
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
export function renderAbusePolicy(): string {
  return renderPolicyPage({
    title: "Abuse and Safety Policy",

    body: `
<h2>1. Purpose and scope</h2>

<p>
This policy defines abusive behavior and the protections applied by
<strong>{organisation.name}</strong>. It applies to all users, content,
communications, integrations, and use of the Services.
</p>

<h2>2. Definitions</h2>

<p>
"Abuse" includes harassment, threats, coercion, impersonation,
exploitation, or any conduct that harms individuals or communities.
"Content" includes text, images, audio, video, files, and links.
</p>

<h2>3. Policy statement</h2>

<p>
We aim to provide a safe environment for all users. Abusive behavior is
not permitted, regardless of intent or context. We may take action to
protect users, the public, and the integrity of the Services.
</p>

<h2>4. Prohibited conduct</h2>

<ul>
  <li>Threats of violence, harm, or intimidation</li>
  <li>Harassment, stalking, or targeted abuse</li>
  <li>Hate speech or dehumanizing content</li>
  <li>Doxxing or sharing personal data without consent</li>
  <li>Impersonation intended to deceive or harm</li>
  <li>Coordinated abuse, brigading, or mass harassment</li>
  <li>Exploitation of vulnerabilities or crisis situations</li>
</ul>

<h2>5. Enforcement and consequences</h2>

<p>
We may remove content, restrict features, suspend or terminate accounts,
and preserve relevant data to investigate abuse. Enforcement decisions
consider severity, intent, impact, and repeat behavior.
</p>

<h2>6. Reporting and contact</h2>

<p>
Report abusive behavior to:
<strong>{contacts.abuseEmail}</strong>.
Include URLs, screenshots, and timestamps when possible. If there is
an immediate risk of harm, contact local emergency services.
</p>

<h2>7. Policy updates</h2>

<p>
Material changes will update the effective date above.
</p>
`
  });
}
