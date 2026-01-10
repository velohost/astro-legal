import { renderPolicyPage } from "../helpers/_policyPage.js";

/**
 * Subprocessors Policy template (v1).
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
export function renderSubprocessorsPolicy(): string {
  return renderPolicyPage({
    title: "Subprocessors Policy",

    body: `
<h2>1. Purpose and scope</h2>

<p>
This policy explains how <strong>{organisation.name}</strong> uses
subprocessors to deliver the Services. It applies to third-party
providers that process data on our behalf.
</p>

<h2>2. Definitions</h2>

<p>
"Subprocessor" means a third-party entity that processes data on our
behalf. "Processing" includes any operation performed on data, such as
storage, transmission, or analysis.
</p>

<h2>3. Policy statement</h2>

<p>
We select subprocessors carefully and require them to meet security and
privacy obligations consistent with our standards. We maintain oversight
and review subprocessors as part of our vendor management process.
</p>

<h2>4. Subprocessor selection and oversight</h2>

<ul>
  <li>Due diligence on security and privacy practices</li>
  <li>Contractual obligations to protect data</li>
  <li>Limitations on processing to our instructions</li>
  <li>Ongoing monitoring and reassessment</li>
</ul>

<h2>5. Data categories and purposes</h2>

<p>
Subprocessors may handle data for hosting, storage, analytics, security,
or customer support. Processing is limited to what is necessary to
deliver the Services.
</p>

<h2>6. Changes to subprocessors</h2>

<p>
We may update our subprocessors as needed. Where required by law or
contract, we may provide notice of material changes.
</p>

<h2>7. Reporting and contact</h2>

<p>
Questions about subprocessors can be directed to:
<strong>{contacts.privacyEmail}</strong>.
</p>

<h2>8. Policy updates</h2>

<p>
Material changes will update the effective date above.
</p>
`
  });
}
