# astro-legal

**Comprehensive legal policy generation for Astro sites**

`astro-legal` is a static‑first Astro integration that scaffolds
professional legal policy pages from a single config file.

It exists for one reason:

> Give every site a clear, editable legal foundation without starting from zero.

No runtime middleware.  
No policy overwrites.  
No guessing.  
No forced legal claims.

---

## What this plugin does

On `astro dev`, the plugin:

- Ensures a `legal.config.json` file exists (first run only)
- Loads and normalises configuration safely (fail‑closed)
- Generates `src/generated/legal.ts` (the `@legal` runtime module)
- Scaffolds enabled policy routes exactly once
- Augments `src/env.d.ts` with `@legal` types
- Watches `config-files/legal.config.json` and generates new routes when you
  enable them

---

## What this plugin does NOT do

- ❌ No runtime middleware
- ❌ No policy overwrites
- ❌ No legal guarantees or advice
- ❌ No auto‑publishing or deployment
- ❌ No layout‑less policy pages in v1

If configuration is invalid or disabled, **no policies are generated**.

---

## Installation

```bash
npm install astro-legal
```

## Setup

Run the interactive initializer:

```bash
npx astro-legal init
```

It will:

- Write `config-files/legal.config.json`
- Patch `astro.config.*` with the integration when it finds a standard Astro config file

After that, edit `config-files/legal.config.json` manually to turn on the
policies you want and fill in the organisation, contact, and layout values.
Saving the file during `astro dev` will create any newly enabled policy routes
without forcing a restart.

---

## Usage

Add the integration to your Astro config:

```ts
import { defineConfig } from "astro/config";
import astroLegal from "astro-legal";

export default defineConfig({
  integrations: [
    astroLegal()
  ]
});
```

---

## Configuration location

On first run, the plugin ensures this file exists:

```
config-files/legal.config.json
```

## Example configuration

```json
{
  "enabled": true,
  "paths": {
    "base": "/legal",
    "layout": "/src/layouts/Layout.astro"
  },
  "effectiveDate": "2026-01-10",
  "contacts": {
    "legalEmail": "legal@example.com",
    "privacyEmail": "privacy@example.com",
    "abuseEmail": "abuse@example.com",
    "lawEnforcementEmail": "law@example.com",
    "securityEmail": "security@example.com"
  },
  "organisation": {
    "name": "Example Company Ltd",
    "jurisdiction": "United Kingdom",
    "address": "123 Example Street, London, UK",
    "companyNumber": "12345678"
  },
  "policies": {
    "terms": true,
    "privacy": true,
    "csam": true,
    "abuse": true,
    "harassment": true,
    "content-moderation": true,
    "trust-safety": true,
    "security": true,
    "law-enforcement": true,
    "transparency": true,
    "vulnerability-disclosure": true,
    "incident-response": true,
    "gdpr": true,
    "ccpa": false,
    "uk-dpa": true,
    "data-retention": true,
    "data-processing": true,
    "subprocessors": false,
    "refunds": false,
    "billing": false,
    "pricing": false,
    "chargebacks": false,
    "financial-compliance": false,
    "dmca": true,
    "copyright": true,
    "trademark": true,
    "open-source": true,
    "user-content-license": true,
    "code-of-conduct": true,
    "ethics": true,
    "modern-slavery": true,
    "whistleblowing": true,
    "equal-opportunities": true,
    "api-usage": false,
    "ai-usage": false,
    "training-data": false,
    "automation": false,
    "third-party-services": true,
    "cookies": true,
    "acceptable-use": true,
    "disclaimer": true,
    "governing-law": true
  }
}
```

---

## Generated output

On first run with enabled policies, the plugin scaffolds:

- `src/pages/<base>/<policy>/index.astro`
- `src/generated/legal.ts`

Each policy page:

- Uses your required Astro layout
- Includes an effective date
- Exposes `organisation` and `contacts` from `@legal`

---

## Policy registry

Only policies registered in the template registry can be generated.
To add a policy:

1) Create a renderer in `src/templates/policies/`
2) Register it in `src/templates/index.ts`
3) Enable it in `legal.config.json`

---

## Failure behaviour

This plugin is intentionally **fail‑closed**.

If any of the following occur:

- Config file missing
- JSON invalid
- `enabled: false`
- `paths.layout` invalid

➡️ **No policies are generated**

Your dev server will continue normally.

---

## License

MIT © Velohost UK Limited

---

## Author

Built and maintained by **Velohost UK Limited**  
https://velohost.co.uk/

Project homepage:  
https://velohost.co.uk/plugins/astro-legal/
