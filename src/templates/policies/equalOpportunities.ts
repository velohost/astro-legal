import { renderPolicyPage } from "../helpers/_policyPage.js";

/**
 * Equal Opportunities Policy template (v1).
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
export function renderEqualOpportunitiesPolicy(): string {
  return renderPolicyPage({
    title: "Equal Opportunities Policy",

    body: `
<h2>1. Purpose and scope</h2>

<p>
This policy outlines <strong>{organisation.name}</strong>'s commitment
to equal opportunity and non-discrimination in our operations and
community interactions. It applies to users, employees, and partners.
</p>

<h2>2. Definitions</h2>

<p>
"Equal opportunity" means fair treatment without discrimination based
on protected characteristics such as race, gender, disability, religion,
age, sexual orientation, or other legally protected status.
</p>

<h2>3. Policy statement</h2>

<p>
We are committed to inclusion and respect. Discrimination, harassment,
or exclusionary behavior is not tolerated within the Services or
associated communities.
</p>

<h2>4. Expected behavior</h2>

<ul>
  <li>Respect and inclusion in all interactions</li>
  <li>Fair access to opportunities and resources</li>
  <li>Zero tolerance for discriminatory conduct</li>
</ul>

<h2>5. Reporting and enforcement</h2>

<p>
Reports of discrimination or exclusion are reviewed promptly. We may
take corrective action, including warnings, restrictions, or
termination of access where appropriate.
</p>

<h2>6. Reporting and contact</h2>

<p>
Concerns can be reported to:
<strong>{contacts.abuseEmail}</strong> or
<strong>{contacts.legalEmail}</strong>.
</p>

<h2>7. Policy updates</h2>

<p>
Material changes will update the effective date above.
</p>
`
  });
}
