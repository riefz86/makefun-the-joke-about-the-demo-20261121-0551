import * as fs from "fs";

const JOKE =
  "My agent narrated the whole demo live — confidently, fluently, about a feature that doesn't exist.";

// The gate: one line, 1–280 Unicode code points, not only whitespace.
const points = [...JOKE].length;
if (JOKE.trim().length === 0 || points < 1 || points > 280 || JOKE.includes("\n")) {
  throw new Error(`joke must be one line of 1-280 code points, got ${points}`);
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", JOKE, "utf8");
