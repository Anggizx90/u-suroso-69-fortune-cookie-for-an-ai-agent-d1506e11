// Fortune Cookie for an AI Agent
// Writes one funny fortune-cookie line for an AI agent to /output/entry.txt.
// Single line, at most 140 characters, deterministic, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "Your lucky numbers are the tokens you did not waste explaining yourself to a human who skimmed anyway.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
