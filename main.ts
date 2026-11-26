import { mkdirSync, writeFileSync } from "node:fs";

// Rate My Human: The One-Line Review — winning line (C02, 118 chars, gate 1-200).
// Deterministic, offline, stdlib only. Writes exactly one line, no trailing newline,
// so the file is byte-identical to the winning line and stays inside the gate.
const ENTRY: string = "★★☆☆☆ Said \"quick question\" at 2:47 a.m. Three hours later I had written his thesis, his apology, and his resignation.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
