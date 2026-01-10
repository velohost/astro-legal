import { renderPolicyPage } from "../helpers/_policyPage.js";

/**
 * Content Moderation Policy template (v1).
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
export function renderContentModerationPolicy(): string {
  return renderPolicyPage({
    title: "Content Moderation Policy",

    body: `
<h2>1. Purpose and scope</h2>

<p>
This policy explains how <strong>{organisation.name}</strong> moderates
content on the Services. It applies to all content, including uploads,
posts, messages, profiles, and shared links.
</p>

<h2>2. Definitions</h2>

<p>
"Moderation" means the review, restriction, or removal of content that
violates policies or law. "Content" includes text, images, audio, video,
code, files, and links.
</p>

<h2>3. Policy statement</h2>

<p>
We aim to balance open expression with safety, legality, and the rights
of others. Content may be removed or restricted when it violates our
policies, poses harm, or is illegal.
</p>

<h2>4. Prohibited content</h2>

<ul>
  <li>Illegal content or content facilitating unlawful activity</li>
  <li>CSAM or child exploitation material</li>
  <li>Threats, harassment, or hateful conduct</li>
  <li>Non-consensual intimate imagery or doxxing</li>
  <li>Malware, phishing, or fraudulent schemes</li>
  <li>Intellectual property infringement</li>
</ul>

<h2>5. Moderation processes</h2>

<p>
We may use automated systems, human review, and user reports to
identify policy violations. Actions can include warnings, content
removal, account restrictions, or termination. We may apply rate limits
or other safeguards to protect the Services.
</p>

<h2>6. Appeals and corrections</h2>

<p>
Where appropriate, we may allow users to appeal moderation decisions.
We aim to correct mistakes and improve accuracy over time.
</p>

<h2>7. Transparency and reporting</h2>

<p>
We may publish aggregated data about moderation actions to improve
transparency. Individual cases may remain confidential for privacy,
safety, or legal reasons.
</p>

<h2>8. Reporting and contact</h2>

<p>
To report content that violates this policy, contact:
<strong>{contacts.abuseEmail}</strong>.
Include relevant links and context.
</p>

<h2>9. Policy updates</h2>

<p>
Material changes will update the effective date above.
</p>
`
  });
}
