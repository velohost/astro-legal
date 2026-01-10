import { renderPolicyPage } from "../helpers/_policyPage.js";

/**
 * GDPR Policy template (v1).
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
export function renderGdprPolicy(): string {
  return renderPolicyPage({
    title: "GDPR Compliance Policy",

    body: `
<h2>1. Purpose and scope</h2>

<p>
This policy describes how <strong>{organisation.name}</strong> approaches
data protection in line with the General Data Protection Regulation
(GDPR). It applies to personal data processed in connection with the
Services where GDPR is applicable.
</p>

<h2>2. Definitions</h2>

<p>
"Personal data" means any information relating to an identified or
identifiable individual. "Processing" includes collection, storage,
use, disclosure, or deletion of personal data.
</p>

<h2>3. Policy statement</h2>

<p>
We are committed to GDPR principles, including lawfulness, fairness,
transparency, purpose limitation, data minimisation, accuracy,
storage limitation, integrity, and confidentiality.
</p>

<h2>4. Legal bases for processing</h2>

<ul>
  <li>Contract performance to provide the Services</li>
  <li>Legitimate interests where balanced and appropriate</li>
  <li>Consent where required by law</li>
  <li>Legal obligations and compliance requirements</li>
</ul>

<h2>5. Data subject rights</h2>

<p>
Individuals may have rights to access, rectify, erase, restrict, or
object to processing, and to request data portability. Requests can be
made using the contact details below.
</p>

<h2>6. Data protection measures</h2>

<p>
We implement technical and organisational measures to protect personal
data, including access controls, encryption where appropriate, and
vendor management practices.
</p>

<h2>7. International transfers</h2>

<p>
If personal data is transferred outside the EEA or UK, we apply
appropriate safeguards, such as contractual protections or other
recognized legal mechanisms.
</p>

<h2>8. Data retention</h2>

<p>
We retain personal data only as long as necessary for the purposes
described in our Privacy Policy and applicable legal requirements.
</p>

<h2>9. Reporting and contact</h2>

<p>
For GDPR-related requests or questions, contact:
<strong>{contacts.privacyEmail}</strong> or
<strong>{contacts.legalEmail}</strong>.
</p>

<h2>10. Policy updates</h2>

<p>
Material changes will update the effective date above.
</p>
`
  });
}
