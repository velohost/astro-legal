import { renderPolicyPage } from "../helpers/_policyPage.js";

/**
 * Training Data Policy template (v1).
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
export function renderTrainingDataPolicy(): string {
  return renderPolicyPage({
    title: "Training Data Policy",

    body: `
<h2>1. Purpose and scope</h2>

<p>
This policy describes how <strong>{organisation.name}</strong> handles
data that may be used to train or improve machine learning systems.
It applies to any training, evaluation, or benchmarking performed in
connection with the Services.
</p>

<h2>2. Definitions</h2>

<p>
"Training data" means data used to develop, evaluate, or improve AI
models. "User content" means information submitted by users in the
Services.
</p>

<h2>3. Policy statement</h2>

<p>
We respect user privacy and intellectual property rights. Training data
use will follow applicable laws and our privacy commitments.
</p>

<h2>4. Data sources and permissions</h2>

<ul>
  <li>We may use data where we have legal rights or permissions</li>
  <li>We may exclude sensitive or restricted content from training</li>
  <li>We may use anonymisation or aggregation where possible</li>
</ul>

<h2>5. User choices</h2>

<p>
Where required by law, we will provide mechanisms for users to opt out
of training uses. We may document these options in our Privacy Policy
or related settings.
</p>

<h2>6. Security and safeguards</h2>

<p>
We apply technical and organizational controls to protect training
datasets and prevent unauthorized access or disclosure.
</p>

<h2>7. Reporting and contact</h2>

<p>
Questions about training data can be sent to:
<strong>{contacts.privacyEmail}</strong> or
<strong>{contacts.legalEmail}</strong>.
</p>

<h2>8. Policy updates</h2>

<p>
Material changes will update the effective date above.
</p>
`
  });
}
