// ai-excited-01 — "Aurora Phoenix".
// Copies the entry image to the output directory. The program runs twice
// and both runs must write the same bytes, so this is a plain deterministic
// copy: no randomness, no network, no generated content at runtime.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The output filename is fixed by the competition contract: entry.png,
// whatever the image bytes inside it are (PNG or JPEG by magic bytes).
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const repoDir = dirname(fileURLToPath(import.meta.url));

mkdirSync(outDir, { recursive: true });
copyFileSync(join(repoDir, "entry.png"), join(outDir, "entry.png"));
