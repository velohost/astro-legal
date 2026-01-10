import { renderPrivacyPolicy } from "./policies/privacy.js";
import { renderTermsOfService } from "./policies/terms.js";
import { renderCsamPolicy } from "./policies/csam.js";
import { renderAbusePolicy } from "./policies/abuse.js";
import { renderHarassmentPolicy } from "./policies/harassment.js";
import { renderContentModerationPolicy } from "./policies/contentModeration.js";
import { renderTrustSafetyPolicy } from "./policies/trustSafety.js";
import { renderSecurityPolicy } from "./policies/security.js";
import { renderLawEnforcementPolicy } from "./policies/lawEnforcement.js";
import { renderTransparencyPolicy } from "./policies/transparency.js";
import { renderVulnerabilityDisclosurePolicy } from "./policies/vulnerabilityDisclosure.js";
import { renderIncidentResponsePolicy } from "./policies/incidentResponse.js";
import { renderGdprPolicy } from "./policies/gdpr.js";
import { renderCcpaPolicy } from "./policies/ccpa.js";
import { renderUkDpaPolicy } from "./policies/ukDpa.js";
import { renderDataRetentionPolicy } from "./policies/dataRetention.js";
import { renderDataProcessingPolicy } from "./policies/dataProcessing.js";
import { renderSubprocessorsPolicy } from "./policies/subprocessors.js";
import { renderRefundsPolicy } from "./policies/refunds.js";
import { renderBillingPolicy } from "./policies/billing.js";
import { renderPricingPolicy } from "./policies/pricing.js";
import { renderChargebacksPolicy } from "./policies/chargebacks.js";
import { renderFinancialCompliancePolicy } from "./policies/financialCompliance.js";
import { renderDmcaPolicy } from "./policies/dmca.js";
import { renderCopyrightPolicy } from "./policies/copyright.js";
import { renderTrademarkPolicy } from "./policies/trademark.js";
import { renderOpenSourcePolicy } from "./policies/openSource.js";
import { renderUserContentLicensePolicy } from "./policies/userContentLicense.js";
import { renderCodeOfConductPolicy } from "./policies/codeOfConduct.js";
import { renderEthicsPolicy } from "./policies/ethics.js";
import { renderModernSlaveryPolicy } from "./policies/modernSlavery.js";
import { renderWhistleblowingPolicy } from "./policies/whistleblowing.js";
import { renderEqualOpportunitiesPolicy } from "./policies/equalOpportunities.js";
import { renderApiUsagePolicy } from "./policies/apiUsage.js";
import { renderAiUsagePolicy } from "./policies/aiUsage.js";
import { renderTrainingDataPolicy } from "./policies/trainingData.js";
import { renderAutomationPolicy } from "./policies/automation.js";
import { renderThirdPartyServicesPolicy } from "./policies/thirdPartyServices.js";
import { renderCookiesPolicy } from "./policies/cookies.js";
import { renderAcceptableUsePolicy } from "./policies/acceptableUse.js";
import { renderDisclaimerPolicy } from "./policies/disclaimer.js";
import { renderGoverningLawPolicy } from "./policies/governingLaw.js";

/**
 * A policy renderer returns a COMPLETE `.astro` file as a string.
 *
 * REQUIREMENTS:
 * - Must include full frontmatter and body
 * - Must not access filesystem or environment
 * - Must rely ONLY on the `@legal` runtime module
 */
export type PolicyRenderer = () => string;

/**
 * Policy template registry (v1).
 *
 * SINGLE SOURCE OF TRUTH:
 * - Keys defined here are the ONLY policies that can be generated
 * - `legal.config.json` policy keys MUST match these keys exactly
 *
 * HARD GUARANTEES:
 * - Static, deterministic imports (Astro/Vite analyzable)
 * - No filesystem access
 * - No runtime discovery
 * - No require()
 * - Registry is immutable at runtime
 *
 * OSS NOTE:
 * - Adding a new policy requires:
 *   1. Creating a renderer in `templates/policies/`
 *   2. Registering it here
 *   3. Enabling it in `legal.config.json`
 */
export const POLICY_TEMPLATES: Readonly<
  Record<string, PolicyRenderer>
> = {
  privacy: renderPrivacyPolicy,
  terms: renderTermsOfService,
  csam: renderCsamPolicy,
  abuse: renderAbusePolicy,
  harassment: renderHarassmentPolicy,
  "content-moderation": renderContentModerationPolicy,
  "trust-safety": renderTrustSafetyPolicy,
  security: renderSecurityPolicy,
  "law-enforcement": renderLawEnforcementPolicy,
  transparency: renderTransparencyPolicy,
  "vulnerability-disclosure": renderVulnerabilityDisclosurePolicy,
  "incident-response": renderIncidentResponsePolicy,
  gdpr: renderGdprPolicy,
  ccpa: renderCcpaPolicy,
  "uk-dpa": renderUkDpaPolicy,
  "data-retention": renderDataRetentionPolicy,
  "data-processing": renderDataProcessingPolicy,
  subprocessors: renderSubprocessorsPolicy,
  refunds: renderRefundsPolicy,
  billing: renderBillingPolicy,
  pricing: renderPricingPolicy,
  chargebacks: renderChargebacksPolicy,
  "financial-compliance": renderFinancialCompliancePolicy,
  dmca: renderDmcaPolicy,
  copyright: renderCopyrightPolicy,
  trademark: renderTrademarkPolicy,
  "open-source": renderOpenSourcePolicy,
  "user-content-license": renderUserContentLicensePolicy,
  "code-of-conduct": renderCodeOfConductPolicy,
  ethics: renderEthicsPolicy,
  "modern-slavery": renderModernSlaveryPolicy,
  whistleblowing: renderWhistleblowingPolicy,
  "equal-opportunities": renderEqualOpportunitiesPolicy,
  "api-usage": renderApiUsagePolicy,
  "ai-usage": renderAiUsagePolicy,
  "training-data": renderTrainingDataPolicy,
  automation: renderAutomationPolicy,
  "third-party-services": renderThirdPartyServicesPolicy,
  cookies: renderCookiesPolicy,
  "acceptable-use": renderAcceptableUsePolicy,
  disclaimer: renderDisclaimerPolicy,
  "governing-law": renderGoverningLawPolicy,
} as const;
