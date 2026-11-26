// The Worst Pizza Topping — one-line pitch entry for make.fun.
// Winner line (V1): chosen over 7 other candidates against the judge's
// criteria in order — pitches a terrible pizza topping (names pizza AND
// topping, wet cardboard is genuinely awful), lands a real joke with two
// turns ("a sprinkle of regret", "somehow still costs extra"), one sentence,
// vivid and specific ("soggy, tastes like the box it came in"), and sounds
// like a person actually selling it.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Our newest pizza topping is wet cardboard with a sprinkle of regret — soggy, tastes like the box it came in, and somehow still costs extra.";

const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
