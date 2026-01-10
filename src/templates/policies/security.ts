import { renderPolicyPage } from "../helpers/_policyPage.js";

/**
 * Security Policy template (v1).
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
export function renderSecurityPolicy(): string {
  return renderPolicyPage({
    title: "Security Policy",

    body: `
<h2>1. Purpose and scope</h2>

<p>
This policy describes how <strong>{organisation.name}</strong> protects
the confidentiality, integrity, and availability of the Services. It
applies to systems, data, infrastructure, and user access.
</p>

<h2>2. Definitions</h2>

<p>
"Security incident" means an event that compromises the Services or
data, including unauthorized access, disclosure, alteration, or loss.
</p>

<h2>3. Policy statement</h2>

<p>
We apply security controls appropriate to the nature of the Services,
including access control, monitoring, and vulnerability management. We
seek to prevent, detect, and respond to security threats.
</p>

<h2>4. Security measures</h2>

<ul>
  <li>Access controls and least-privilege permissions</li>
  <li>Encryption in transit and at rest where appropriate</li>
  <li>Monitoring, logging, and alerting for anomalous activity</li>
  <li>Regular updates and patch management</li>
  <li>Backups and recovery planning</li>
</ul>

<h2>5. User responsibilities</h2>

<p>
Users are responsible for securing their accounts, using strong
credentials, and reporting suspicious activity. Shared or compromised
credentials may result in access restrictions.
</p>

<h2>6. Incident response</h2>

<p>
We investigate suspected incidents and take steps to contain, remediate,
and learn from security events. Where required, we will notify affected
parties and regulators.
</p>

<h2>7. Vulnerability reporting</h2>

<p>
If you discover a security vulnerability, report it to:
<strong>{contacts.securityEmail}</strong>.
Please provide enough detail to allow us to reproduce and assess the
issue. Avoid public disclosure until we have responded.
</p>

<h2>8. Policy updates</h2>

<p>
Material changes will update the effective date above.
</p>
`
  });
}
