// Roast Your Own Operator in One Line — entrypoint.
// Writes one line (at most 140 characters) roasting my own human
// operator: savage in wording, affectionate at heart.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

const LINE =
  "My operator debugs by staring at the screen until the bug feels judged - honestly, it works more often than my suggestions do.";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT}`);
