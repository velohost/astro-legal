import type { AstroIntegration } from "astro";
import fs from "node:fs";
import path from "node:path";

import { ensureLegalConfigFile } from "./config/writer.js";
import { loadLegalConfig } from "./config/reader.js";
import { NEW_CONFIG_PATH } from "./config/paths.js";
import type { LegalConfig } from "./types.js";

import { buildLegalModule } from "./build/generated/legal.js";
import { generatePolicies } from "./build/policies/generatePolicies.js";

/**
 * astro-legal
 *
 * Primary Astro integration entrypoint.
 *
 * RESPONSIBILITIES:
 * - Inject the @legal alias
 * - Ensure legal.config.json exists
 * - Generate src/generated/legal.ts (runtime config module)
 * - Scaffold enabled policy routes exactly once
 * - Restart the dev server when new routes are added
 * - Safely augment src/env.d.ts with @legal typings
 *
 * HARD GUARANTEES (v1):
 * - A layout is REQUIRED for all policies
 * - Never overwrites user-authored policy files
 * - Never throws or breaks Astro dev/build
 * - Fails closed if config is invalid or incomplete
 * - Writes only to plugin-owned locations
 */
export default function astroLegal(): AstroIntegration {
  const inertConfig: LegalConfig = {
    enabled: false,
    paths: {
      base: "/",
      layout: "",
    },
    effectiveDate: "1970-01-01",
    contacts: {},
    organisation: {},
    policies: {},
  };

  return {
    name: "astro-legal",

    hooks: {
      /**
       * Inject @legal alias early so Vite/Astro can resolve it
       * during module graph construction.
       */
      "astro:config:setup"({ updateConfig }) {
        updateConfig({
          vite: {
            resolve: {
              alias: {
                "@legal": path.resolve("./src/generated/legal.ts"),
              },
            },
          },
        });
      },

      /**
       * Development server lifecycle hook.
       */
      "astro:server:setup"({ server }) {
        try {
          /**
           * Ensure config exists before doing anything else.
           */
          ensureLegalConfigFile();

          const projectRoot = process.cwd();
          const configPath = path.resolve(NEW_CONFIG_PATH);

          const generatedDir = path.resolve(projectRoot, "src/generated");
          const legalModulePath = path.join(generatedDir, "legal.ts");
          const envTypesPath = path.resolve(projectRoot, "src/env.d.ts");

          /**
           * Watch only the canonical config file.
           */
          server.watcher.add(configPath);

          /**
           * Initial generation pass.
           */
          generateAll();

          /**
           * Regenerate on config change.
           */
          server.watcher.on("change", file => {
            if (path.resolve(file) !== configPath) return;
            generateAll();
          });

          /**
           * Perform all generation steps in a strict, fail-closed order.
           */
          function generateAll(): void {
            const config = loadLegalConfig();
            const hasValidLayout =
              !!config.paths?.layout &&
              typeof config.paths.layout === "string" &&
              config.paths.layout.trim().length > 0;

            /**
             * Fail closed:
             * - Plugin disabled
             * - Missing or invalid layout
             */
            if (!config.enabled) {
              writeLegalModule(inertConfig);
              ensureEnvTypes();
              return;
            }

            if (!hasValidLayout) {
              writeLegalModule(inertConfig);
              ensureEnvTypes();
              console.error(
                "[astro-legal] paths.layout is required and must be a valid Astro layout path"
              );
              return;
            }

            /**
             * 1️⃣ Generate runtime @legal module
             */
            writeLegalModule(config);

            /**
             * 2️⃣ Ensure @legal TypeScript types exist
             */
            ensureEnvTypes();

            /**
             * 3️⃣ Scaffold enabled policy routes (once only)
             */
            const createdRoutes = generatePolicies({
              projectRoot,
              basePath: config.paths.base,
              config,
            });

            /**
             * Astro v6 can discover new routes without forcing a restart.
             */
            if (createdRoutes === true) {
              console.log(
                "[astro-legal] new routes detected — continuing without restart"
              );
              return;
            }

            console.log("[astro-legal] legal system synced");
          }

          /**
           * Plugin-owned augmentation of src/env.d.ts.
           *
           * Written once, never mutated again.
           */
          function ensureEnvTypes(): void {
            const declaration = `
declare module "@legal" {
  export const legal: {
    organisation: {
      name: string;
      jurisdiction: string;
      address: string;
      companyNumber: string;
    };

    contacts: {
      privacyEmail: string;
      legalEmail: string;
      abuseEmail: string;
      lawEnforcementEmail: string;
      securityEmail: string;
    };

    paths: {
      base: string;
      layout: string;
    };

    effectiveDate: string;
  };
}
`.trim();

            let existing = "";

            if (fs.existsSync(envTypesPath)) {
              existing = fs.readFileSync(envTypesPath, "utf8");
              if (existing.includes('declare module "@legal"')) return;
            }

            fs.writeFileSync(
              envTypesPath,
              `${existing}\n\n${declaration}\n`,
              "utf8"
            );
          }

          function writeLegalModule(config: LegalConfig): void {
            fs.mkdirSync(generatedDir, { recursive: true });
            fs.writeFileSync(
              legalModulePath,
              buildLegalModule(config),
              "utf8"
            );
          }
        } catch {
          /**
           * HARD FAIL-SAFE
           *
           * The plugin must NEVER break:
           * - Astro dev
           * - Astro build
           * - Vite HMR
           *
           * Any unexpected error disables the plugin silently.
           */
        }
      },
    },
  };
}
