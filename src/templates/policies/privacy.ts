import { renderPolicyPage } from "../helpers/_policyPage.js";

/**
 * Privacy Policy template (v1).
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
export function renderPrivacyPolicy(): string {
  return renderPolicyPage({
    title: "Privacy Policy",

    body: `
<h2>1. Purpose and scope</h2>

<p>
This Privacy Policy explains how <strong>{organisation.name}</strong>
processes information across its websites, applications, APIs, software,
services, and related offerings (collectively, the "Services").
</p>

<p>
This policy applies to all users, customers, developers, partners,
and other individuals who interact with the Services in any capacity.
</p>

<h2>2. Data controller</h2>

<p>
The Services are operated by <strong>{organisation.name}</strong>
under the laws of {organisation.jurisdiction}.
</p>

<p>
<strong>Registered address:</strong><br />
{organisation.address}
</p>

<p>
<strong>Company number:</strong><br />
{organisation.companyNumber}
</p>

<p>
For privacy or data-protection enquiries, contact:<br />
<strong>{contacts.privacyEmail}</strong>
</p>

<h2>3. Data minimisation principles</h2>

<p>
The Services are designed to minimise the collection and processing
of personal data wherever reasonably possible. We collect only what is
necessary to provide the Services, maintain security, and meet legal
obligations.
</p>

<p>
Many features are available without requiring user accounts,
persistent identifiers, or long-term storage of personal information.
</p>

<h2>4. Information that may be processed</h2>

<ul>
  <li>Information submitted directly by users (e.g., forms, messages)</li>
  <li>Account and authentication data (if accounts are used)</li>
  <li>Technical metadata required for delivery and security</li>
  <li>Contact details provided voluntarily</li>
  <li>Service usage data (e.g., feature interactions, performance)</li>
</ul>

<h2>5. Information not intentionally collected</h2>

<ul>
  <li>Sale or rental of personal data</li>
  <li>Advertising or behavioural profiling</li>
  <li>Cross-service tracking</li>
  <li>Third-party advertising networks</li>
</ul>

<h2>6. Sources of information</h2>

<p>
We collect information directly from you, automatically through your
use of the Services, and from service providers that help us operate
the Services (for example, hosting or security providers).
</p>

<h2>7. How information is used</h2>

<ul>
  <li>Provide, maintain, and improve the Services</li>
  <li>Authenticate users and prevent fraud or abuse</li>
  <li>Respond to requests, questions, or support inquiries</li>
  <li>Comply with legal obligations and enforce our policies</li>
  <li>Monitor reliability, performance, and security</li>
</ul>

<h2>8. Legal bases for processing (where applicable)</h2>

<p>
Depending on your location, our processing may rely on consent,
contract performance, legitimate interests, or legal obligations.
When consent is required, you may withdraw it at any time.
</p>

<h2>9. Cookies and local storage</h2>

<p>
Cookies and similar technologies may be used only for essential
functionality, security, or preferences. You can control cookies
through your browser settings.
</p>

<h2>10. Analytics and monitoring</h2>

<p>
Limited analytics may be used solely to improve reliability, measure
performance, and detect abuse. Where possible, analytics data is
aggregated or anonymised.
</p>

<h2>11. Logs and operational data</h2>

<p>
Logs are retained only as long as reasonably necessary and are never
used for marketing or profiling. Access to logs is restricted to
authorized personnel.
</p>

<h2>12. Data sharing and disclosures</h2>

<p>
We may share information with trusted service providers that process
data on our behalf under contractual obligations. We may also disclose
information to comply with legal requirements, protect rights, and
prevent fraud or abuse.
</p>

<h2>13. International transfers</h2>

<p>
If data is transferred across borders, we implement appropriate
safeguards to protect it, such as contractual protections or
recognized legal mechanisms.
</p>

<h2>14. Data security</h2>

<p>
Appropriate technical and organisational measures are applied to
protect information, including access controls, encryption where
appropriate, and monitoring for unauthorized activity.
</p>

<h2>15. Data retention</h2>

<p>
Information is retained only as long as required by purpose or law.
When no longer needed, data is deleted or anonymised.
</p>

<h2>16. Individual rights</h2>

<p>
Rights depend on jurisdiction and service context. You may have the
right to access, correct, delete, or restrict processing of your data,
and to object or request portability. Requests may be submitted using
the contact details above.
</p>

<h2>17. Children's privacy</h2>

<p>
The Services are not intended for children, and we do not knowingly
collect personal information from minors. If you believe a child has
provided information, please contact us to request deletion.
</p>

<h2>18. Third-party services</h2>

<p>
Third-party services are governed by their own privacy policies.
We are not responsible for their practices.
</p>

<h2>19. Policy updates</h2>

<p>
Material changes will update the effective date above.
</p>

<p>
For privacy-related enquiries:<br />
<strong>{contacts.privacyEmail}</strong>
</p>
`
  });
}
