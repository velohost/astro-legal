import { renderPolicyPage } from "../helpers/_policyPage.js";

/**
 * Data Processing Policy template (v1).
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
export function renderDataProcessingPolicy(): string {
  return renderPolicyPage({
    title: "Data Processing Policy",

    body: `
<h2>1. Purpose and scope</h2>

<p>
This policy explains how <strong>{organisation.name}</strong> processes
data in connection with the Services. It applies to personal data,
account data, and operational data processed as part of service delivery.
</p>

<h2>2. Definitions</h2>

<p>
"Processing" includes collection, storage, use, disclosure, and deletion
of data. "Processor" refers to third parties that process data on our
behalf under contractual obligations.
</p>

<h2>3. Policy statement</h2>

<p>
We process data for specified purposes, with appropriate safeguards and
controls. We seek to minimize data access and apply least-privilege
principles.
</p>

<h2>4. Processing purposes</h2>

<ul>
  <li>Provide and operate the Services</li>
  <li>Maintain security, reliability, and performance</li>
  <li>Support users and handle requests</li>
  <li>Comply with legal obligations</li>
</ul>

<h2>5. Processing methods and safeguards</h2>

<p>
We implement technical and organisational measures, including access
controls, monitoring, and data minimisation. We use encryption where
appropriate and restrict access to authorized personnel.
</p>

<h2>6. Third-party processors</h2>

<p>
We may use processors to support the Services (e.g., hosting, security,
or analytics). Processors are contractually obligated to protect data
and to process it only according to our instructions.
</p>

<h2>7. User rights and requests</h2>

<p>
Where applicable, users may request access, correction, deletion, or
restriction of processing. Requests can be made through the contact
information below.
</p>

<h2>8. Reporting and contact</h2>

<p>
Questions about processing can be sent to:
<strong>{contacts.privacyEmail}</strong>.
</p>

<h2>9. Policy updates</h2>

<p>
Material changes will update the effective date above.
</p>
`
  });
}
