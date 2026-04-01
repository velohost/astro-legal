#!/usr/bin/env node
import { writeDefaultLegalConfig } from "./config/writer.js";

function printUsage(): void {
  console.log(`astro-legal

Usage:
  astro-legal init [--force]

Commands:
  init     Write config-files/legal.config.json using the bundled defaults

Options:
  --force  Overwrite an existing canonical config file
`);
}

function main(argv: string[]): void {
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
    const written = writeDefaultLegalConfig(force);

    if (written) {
      console.log(
        "[astro-legal] wrote config-files/legal.config.json"
      );
      return;
    }

    console.log(
      "[astro-legal] config-files/legal.config.json already exists"
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : String(error);
    console.error(`[astro-legal] failed to write config: ${message}`);
    process.exitCode = 1;
  }
}

main(process.argv);
