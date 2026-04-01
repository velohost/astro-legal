#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import readline from "node:readline";

import { DEFAULT_CONFIG, writeDefaultLegalConfig } from "./config/writer.js";
import { CONFIG_DIR, NEW_CONFIG_PATH } from "./config/paths.js";

function printUsage(): void {
  console.log(`astro-legal

Usage:
  astro-legal init [--force]

Commands:
  init     Writes legal.config.json and patches Astro config
`);
}

function detectAstroConfigPath(): string | null {
  const candidates = ["astro.config.mjs", "astro.config.ts", "astro.config.js"];
  for (const candidate of candidates) {
    const full = path.resolve(process.cwd(), candidate);
    if (fs.existsSync(full)) return full;
  }
  return null;
}

function patchAstroConfig(configPath: string): boolean {
  const source = fs.readFileSync(configPath, "utf8");
  if (source.includes('astroLegal from "astro-legal"') || source.includes("astroLegal from 'astro-legal'")) {
    return false;
  }

  const importLine = 'import astroLegal from "astro-legal";\n';
  const integrationLine = "  integrations: [astroLegal()],\n";

  let updated = source;
  if (!updated.includes("astroLegal")) {
    const firstImportMatch = updated.match(/^import .*$/m);
    if (firstImportMatch) {
      updated = updated.replace(firstImportMatch[0], `${firstImportMatch[0]}\n${importLine.trimEnd()}`);
    } else {
      updated = `${importLine}${updated}`;
    }
  }

  if (updated.includes("integrations:")) {
    return false;
  }

  if (updated.includes("defineConfig({")) {
    updated = updated.replace("defineConfig({", `defineConfig({\n${integrationLine}`);
  }

  fs.writeFileSync(configPath, updated, "utf8");
  return true;
}

async function runInit(force: boolean): Promise<void> {
  fs.mkdirSync(CONFIG_DIR, { recursive: true });

  if (!force && fs.existsSync(NEW_CONFIG_PATH)) {
    console.log("[astro-legal] config-files/legal.config.json already exists");
  } else {
    fs.writeFileSync(NEW_CONFIG_PATH, `${JSON.stringify(DEFAULT_CONFIG, null, 2)}\n`, "utf8");
    console.log("[astro-legal] wrote config-files/legal.config.json");
  }

  const astroConfigPath = detectAstroConfigPath();
  if (astroConfigPath) {
    if (patchAstroConfig(astroConfigPath)) {
      console.log(`[astro-legal] updated ${path.basename(astroConfigPath)}`);
    } else {
      console.log("[astro-legal] could not safely patch astro.config.* automatically");
    }
  } else {
    console.log("[astro-legal] no astro.config.* file found to patch");
  }
}

async function main(argv: string[]): Promise<void> {
  const command = argv[2];
  const force = argv.includes("--force");

  if (!command || command === "--help" || command === "-h") {
    printUsage();
    return;
  }

  if (command !== "init") {
    console.error(`[astro-legal] unknown command: ${command}`);
    process.exitCode = 1;
    printUsage();
    return;
  }

  try {
    await runInit(force);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`[astro-legal] failed to initialize: ${message}`);
    process.exitCode = 1;
  }
}

main(process.argv);
