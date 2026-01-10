import { renderPolicyPage } from "../helpers/_policyPage.js";

/**
 * Terms of Service template (v1).
 *
 * HARD GUARANTEES:
 * - NO frontmatter here
 * - NO layout logic here
 * - NO config access here
 * - Body HTML ONLY
 * - Deterministic output
 *
 * INTENT:
 * - Provides a legally sane baseline
 * - Users are expected to amend content
 * - Structure is stable for v1
 */
export function renderTermsOfService(): string {
  return renderPolicyPage({
    title: "Terms of Service",

    body: `
<h2>1. Acceptance of terms</h2>

<p>
By accessing or using the services provided by
<strong>{organisation.name}</strong> (the "Services"),
you agree to be bound by these Terms of Service (the "Terms").
If you do not agree to these Terms, you must not use the Services.
</p>

<h2>2. About the services</h2>

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

<h2>3. Definitions</h2>

<p>
"You" means any individual or entity that accesses or uses the Services.
"Content" means any data, text, images, files, or other materials
submitted, uploaded, or made available through the Services.
</p>

<h2>4. Eligibility and authority</h2>

<p>
You must have the legal capacity to enter into binding agreements
under applicable law to use the Services. If you are using the Services
on behalf of an organization, you represent that you have authority
to bind that organization to these Terms.
</p>

<h2>5. Accounts and security</h2>

<p>
If account registration is required, you must provide accurate,
complete, and current information and keep it updated. You are
responsible for safeguarding your credentials and for all activity
that occurs under your account.
</p>

<h2>6. Acceptable use</h2>

<p>
You agree not to misuse the Services or use them for unlawful,
harmful, or abusive purposes. You must comply with all applicable
laws, regulations, and third-party rights.
</p>

<p>
Prohibited activities include, but are not limited to:
</p>

<ul>
  <li>Violating applicable laws or regulations</li>
  <li>Infringing intellectual property or privacy rights</li>
  <li>Attempting to interfere with service integrity or security</li>
  <li>Uploading malware, exploits, or malicious code</li>
  <li>Scraping or harvesting data in violation of these Terms</li>
  <li>Using the Services to transmit spam or deceptive content</li>
</ul>

<h2>7. User content</h2>

<p>
You are responsible for the Content you submit and for ensuring you
have the rights to use and share it. You grant
<strong>{organisation.name}</strong> a limited, non-exclusive,
worldwide license to host, process, and display Content solely as
necessary to provide the Services and to comply with legal obligations.
</p>

<h2>8. Third-party services and links</h2>

<p>
The Services may integrate with or link to third-party services.
Your use of those services is governed by their own terms and policies.
We are not responsible for third-party services or content.
</p>

<h2>9. Service availability and changes</h2>

<p>
The Services are provided on an "as is" and "as available" basis.
We may modify, suspend, or discontinue any part of the Services at
any time, including for maintenance, security, or legal reasons.
</p>

<h2>10. Intellectual property</h2>

<p>
All intellectual property rights in the Services, including content,
software, and branding, belong to <strong>{organisation.name}</strong>
or its licensors, unless stated otherwise. No rights are granted to you
except as expressly set out in these Terms.
</p>

<h2>11. Disclaimer of warranties</h2>

<p>
To the maximum extent permitted by law, we disclaim all warranties,
express or implied, including merchantability, fitness for a particular
purpose, and non-infringement. We do not guarantee uninterrupted or
error-free operation of the Services.
</p>

<h2>12. Limitation of liability</h2>

<p>
To the maximum extent permitted by law,
<strong>{organisation.name}</strong> shall not be liable for any
indirect, incidental, special, consequential, or punitive damages, or
for any loss of profits, data, or goodwill arising from your use of
the Services.
</p>

<h2>13. Indemnification</h2>

<p>
You agree to indemnify and hold harmless <strong>{organisation.name}</strong>
from any claims, damages, liabilities, and expenses arising from your
use of the Services, your Content, or your violation of these Terms.
</p>

<h2>14. Termination</h2>

<p>
We may suspend or terminate access to the Services if you breach
these Terms, pose risk or harm, or if required by law. You may stop
using the Services at any time.
</p>

<h2>15. Governing law</h2>

<p>
These Terms are governed by and construed in accordance with
the laws of {organisation.jurisdiction}, without regard to conflict
of law principles.
</p>

<h2>16. Severability and assignment</h2>

<p>
If any provision of these Terms is held invalid, the remaining
provisions will remain in effect. You may not assign these Terms
without our prior written consent; we may assign them as part of
a merger, acquisition, or asset sale.
</p>

<h2>17. Contact</h2>

<p>
For legal enquiries relating to these Terms, contact:<br />
<strong>{contacts.legalEmail}</strong>
</p>

<h2>18. Changes to these terms</h2>

<p>
These Terms may be updated from time to time.
Material changes will be reflected by an updated effective date above.
</p>
`
  });
}
