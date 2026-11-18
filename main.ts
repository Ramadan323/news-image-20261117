import { copyFileSync } from "node:fs";
import { join } from "node:path";

// The entry image is drawn once (see build notes in README.md) and shipped
// as entry.png; the program only copies it to the output directory.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
copyFileSync("./entry.png", join(outDir, "entry.png"));
