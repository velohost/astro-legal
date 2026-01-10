import { renderPolicyPage } from "../helpers/_policyPage.js";

/**
 * Trust and Safety Policy template (v1).
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
export function renderTrustSafetyPolicy(): string {
  return renderPolicyPage({
    title: "Trust and Safety Policy",

    body: `
<h2>1. Purpose and scope</h2>

<p>
This policy describes the safety standards and protective measures
used by <strong>{organisation.name}</strong> to maintain trust across
the Services. It applies to all users, content, and interactions.
</p>

<h2>2. Definitions</h2>

<p>
"Trust and Safety" refers to policies, processes, and tooling that
prevent harm, reduce abuse, and protect the community.
</p>

<h2>3. Policy statement</h2>

<p>
We are committed to user safety, lawful conduct, and the responsible
operation of the Services. We take steps to detect, prevent, and
respond to abuse, fraud, and harmful activity.
</p>

<h2>4. Safety expectations</h2>

<ul>
  <li>Respect other users and their rights</li>
  <li>Use the Services responsibly and lawfully</li>
  <li>Report harmful or unsafe behavior</li>
  <li>Protect account credentials and access</li>
</ul>

<h2>5. Protective measures</h2>

<p>
We may implement safeguards such as identity checks, rate limiting,
abuse detection, content moderation, and security monitoring. The
specific measures may change as threats evolve.
</p>

<h2>6. Enforcement and consequences</h2>

<p>
We may remove content, restrict access, suspend accounts, or terminate
use of the Services when safety risks arise. Actions depend on severity,
context, and risk to users or the public.
</p>

<h2>7. Reporting and contact</h2>

<p>
To report safety concerns or abuse, contact:
<strong>{contacts.abuseEmail}</strong>.
Security issues should be reported to:
<strong>{contacts.securityEmail}</strong>.
</p>

<h2>8. Policy updates</h2>

<p>
Material changes will update the effective date above.
</p>
`
  });
}
