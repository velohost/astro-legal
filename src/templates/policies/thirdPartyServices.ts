import { renderPolicyPage } from "../helpers/_policyPage.js";

/**
 * Third-Party Services Policy template (v1).
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
export function renderThirdPartyServicesPolicy(): string {
  return renderPolicyPage({
    title: "Third-Party Services Policy",

    body: `
<h2>1. Purpose and scope</h2>

<p>
This policy explains how <strong>{organisation.name}</strong> uses
third-party services to deliver and support the Services. It applies to
all external providers that supply hosting, analytics, security, or
other functionality.
</p>

<h2>2. Definitions</h2>

<p>
"Third-party services" refers to external vendors or platforms that are
integrated with or used by the Services. "Provider" refers to any such
third-party vendor.
</p>

<h2>3. Policy statement</h2>

<p>
We select third-party providers carefully and require them to follow
appropriate security and privacy standards. Third-party services are
subject to their own terms and policies.
</p>

<h2>4. Types of third-party services</h2>

<ul>
  <li>Hosting and infrastructure providers</li>
  <li>Payment processors and billing systems</li>
  <li>Security and monitoring tools</li>
  <li>Analytics and performance services</li>
</ul>

<h2>5. Data sharing and safeguards</h2>

<p>
Where third-party services process data on our behalf, we use contracts
and controls to protect data and limit processing to service delivery.
</p>

<h2>6. User responsibility</h2>

<p>
If you access third-party services through the Services, your use of
those services is governed by their terms. We are not responsible for
the practices of third-party providers.
</p>

<h2>7. Reporting and contact</h2>

<p>
Questions about third-party services can be sent to:
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
