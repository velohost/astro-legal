import { renderPolicyPage } from "../helpers/_policyPage.js";

/**
 * Data Retention Policy template (v1).
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
export function renderDataRetentionPolicy(): string {
  return renderPolicyPage({
    title: "Data Retention Policy",

    body: `
<h2>1. Purpose and scope</h2>

<p>
This policy describes how <strong>{organisation.name}</strong> retains
and deletes data associated with the Services. It applies to personal
data, operational logs, and user content processed by the Services.
</p>

<h2>2. Definitions</h2>

<p>
"Retention" means the period we store data before deletion or
anonymisation. "Deletion" includes secure removal or irreversible
anonymisation of data.
</p>

<h2>3. Policy statement</h2>

<p>
We retain data only as long as necessary for service delivery, security,
compliance, or other legitimate business purposes. We aim to minimize
retention and reduce data exposure.
</p>

<h2>4. Retention categories</h2>

<ul>
  <li>Account data retained while an account is active</li>
  <li>Content retained as needed to provide the Services</li>
  <li>Operational logs retained for security and reliability</li>
  <li>Backups retained for limited periods for recovery purposes</li>
</ul>

<h2>5. Legal and compliance requirements</h2>

<p>
We may retain certain data longer when required by law, regulation, or
legal process. Retention is limited to the scope and duration required.
</p>

<h2>6. Deletion and anonymisation</h2>

<p>
When data is no longer required, we delete or anonymise it using
reasonable technical and organizational measures. Some deletion may be
delayed due to backup cycles or system integrity requirements.
</p>

<h2>7. User requests</h2>

<p>
Where applicable, users may request deletion of personal data. We will
verify identity and comply where lawful and feasible.
</p>

<h2>8. Reporting and contact</h2>

<p>
Questions about retention or deletion can be directed to:
<strong>{contacts.privacyEmail}</strong>.
</p>

<h2>9. Policy updates</h2>

<p>
Material changes will update the effective date above.
</p>
`
  });
}
