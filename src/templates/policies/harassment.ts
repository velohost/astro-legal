import { renderPolicyPage } from "../helpers/_policyPage.js";

/**
 * Harassment Policy template (v1).
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
export function renderHarassmentPolicy(): string {
  return renderPolicyPage({
    title: "Harassment Policy",

    body: `
<h2>1. Purpose and scope</h2>

<p>
This policy outlines unacceptable harassment and bullying behavior on
the Services. It applies to interactions between users, as well as any
content, messages, or actions directed at individuals or groups.
</p>

<h2>2. Definitions</h2>

<p>
"Harassment" includes repeated, unwanted, or intimidating behavior that
causes distress. "Bullying" includes abuse of power or influence to
humiliate, shame, or control others.
</p>

<h2>3. Policy statement</h2>

<p>
We do not tolerate harassment or bullying. Users should feel safe to
participate without being targeted, threatened, or degraded. We may act
quickly to prevent harm and maintain a respectful environment.
</p>

<h2>4. Prohibited conduct</h2>

<ul>
  <li>Repeated unwanted contact after requests to stop</li>
  <li>Targeted insults, slurs, or degrading language</li>
  <li>Threats of violence or intimidation</li>
  <li>Non-consensual sharing of private information</li>
  <li>Coordinated harassment campaigns</li>
  <li>Using the Services to shame or humiliate others</li>
</ul>

<h2>5. Enforcement and consequences</h2>

<p>
We may remove content, limit features, or suspend or terminate accounts
for harassment. Enforcement actions may be escalated for severe or
repeated violations, and we may cooperate with lawful requests.
</p>

<h2>6. Reporting and contact</h2>

<p>
Report harassment to:
<strong>{contacts.abuseEmail}</strong>.
Include context, evidence, and relevant links. If you are in immediate
danger, contact local emergency services.
</p>

<h2>7. Policy updates</h2>

<p>
Material changes will update the effective date above.
</p>
`
  });
}
