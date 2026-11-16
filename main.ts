// ai-excited-01 round 2 — "Glasswing Manta"
// Copies the entry image (a colossal stained-glass manta ray soaring over a
// night city, a tiny cyclist riding its slipstream) to the output directory.
// Deterministic: the same bytes go out on every run.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
const src = join(repoDir, "entry.png");
const dest = join(outDir, "entry.png");
copyFileSync(src, dest);
// Guard the gate: the run must write exactly the image the repo holds.
if (statSync(src).size !== statSync(dest).size) {
  throw new Error("entry.png copy size mismatch");
}
