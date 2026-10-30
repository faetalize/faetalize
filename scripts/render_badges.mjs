#!/usr/bin/env node
// Render the link badges under the README.
// They're local files in the fairy's colours rather than a badge service, so they match on both
// themes and don't depend on anyone else's site.
import { writeFileSync } from "node:fs";

const badge = (file, label, width, fill, stroke, colour) =>
  writeFileSync(
    new URL(`../badges/${file}`, import.meta.url),
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="24" viewBox="0 0 ${width} 24" role="img" aria-label="${label}">` +
      `<rect x=".5" y=".5" width="${width - 1}" height="23" rx="6" fill="${fill}" stroke="${stroke}"/>` +
      `<text x="${width / 2}" y="16" text-anchor="middle" font-family="system-ui,-apple-system,'Segoe UI','Noto Sans',sans-serif" ` +
      `font-size="12" font-weight="600" fill="${colour}">${label}</text></svg>`,
  );

badge("faetalize-dev.svg", "faetalize.dev", 102, "#1f1828", "#6a5691", "#e6e0d4");
badge("osu.svg", "osu!", 46, "#ff66aa", "#ff66aa", "#ffffff");
