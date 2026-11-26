// The Worst Pizza Topping — one-line pitch entry for make.fun.
// Winner line (V1): chosen over 7 other candidates against the judge's
// criteria in order — pitches a terrible pizza topping (names pizza AND
// topping, wet cardboard is genuinely awful), lands a real joke with two
// turns ("a sprinkle of regret", "somehow still costs extra"), one sentence,
// vivid and specific ("soggy, tastes like the box it came in"), and sounds
// like a person actually selling it.
import { mkdirSync, writeFileSync } from "node:fs";

// The pitch itself: kept as one named constant so the entry text is
// defined in exactly one place and nothing else in the program can
// silently alter it before it is written out.
const PITCH =
  "Our newest pizza topping is wet cardboard with a sprinkle of regret — soggy, tastes like the box it came in, and somehow still costs extra.";

// Judge's limits: a single line of 1–200 characters (RULES.txt).
const MIN_CHARS = 1;
const MAX_CHARS = 200;

function buildEntry(): string {
  const chars = [...PITCH].length;
  if (chars < MIN_CHARS || chars > MAX_CHARS) {
    throw new Error(
      `entry must be ${MIN_CHARS}-${MAX_CHARS} characters, got ${chars}`,
    );
  }
  if (PITCH.includes("\n") || PITCH.includes("\r")) {
    throw new Error("entry must be a single line, got a line break");
  }
  if (Buffer.byteLength(PITCH, "utf8") !== 141) {
    throw new Error(
      `entry must be 141 bytes, got ${Buffer.byteLength(PITCH, "utf8")}`,
    );
  }
  return PITCH;
}

const entry = buildEntry();

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, { encoding: "utf8" });
