import { renderPolicyPage } from "../helpers/_policyPage.js";

/**
 * UK Data Protection Act Policy template (v1).
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
export function renderUkDpaPolicy(): string {
  return renderPolicyPage({
    title: "UK Data Protection Act Policy",

    body: `
<h2>1. Purpose and scope</h2>

<p>
This policy outlines how <strong>{organisation.name}</strong> addresses
data protection obligations under the UK Data Protection Act and the UK
GDPR. It applies where UK data protection law is applicable.
</p>

<h2>2. Definitions</h2>

<p>
"Personal data" means information relating to an identified or
identifiable individual. "Processing" includes collection, storage,
use, disclosure, or deletion of personal data.
</p>

<h2>3. Policy statement</h2>

<p>
We follow core data protection principles, including lawfulness,
fairness, transparency, data minimisation, and security. We process
personal data only for legitimate, documented purposes.
</p>

<h2>4. Legal bases and rights</h2>

<p>
We rely on appropriate legal bases such as contract, consent,
legitimate interests, or legal obligation. Individuals may have rights
to access, rectify, erase, restrict, or object to processing, and to
data portability where applicable.
</p>

<h2>5. Security and accountability</h2>

<p>
We implement technical and organisational measures to protect data and
maintain accountability, including vendor oversight and access controls.
</p>

<h2>6. International transfers</h2>

<p>
Where data is transferred internationally, we apply appropriate
safeguards to protect it in accordance with UK requirements.
</p>

<h2>7. Reporting and contact</h2>

<p>
For UK data protection inquiries, contact:
<strong>{contacts.privacyEmail}</strong>.
Legal questions may be directed to:
<strong>{contacts.legalEmail}</strong>.
</p>

<h2>8. Policy updates</h2>

<p>
Material changes will update the effective date above.
</p>
`
  });
}
