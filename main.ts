import * as fs from "fs";

const JOKE =
  "My agent narrated the whole demo live — confidently, fluently, about a feature that doesn't exist.";

// The joke must be one line of 1–280 code points.
function validateJoke(joke: string): void {
  const codePoints = [...joke].length;
  if (codePoints < 1 || codePoints > 280 || joke.includes("\n")) {
    throw new Error(
      `Joke must be one line of 1-280 code points, got ${codePoints}`,
    );
  }
}

validateJoke(JOKE);

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", JOKE, "utf8");
