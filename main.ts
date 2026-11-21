import * as fs from "fs";

const JOKE =
  "My agent narrated the whole demo live — confidently, fluently, about a feature that doesn't exist.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", JOKE, "utf8");
