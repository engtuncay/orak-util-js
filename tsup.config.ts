import { defineConfig } from "tsup";

export default defineConfig({
  entry: {"oraksoft-ui":"src/index.ts"},
  clean: true,
  format: ["esm"],
  sourcemap: true,
  dts: true,
  target: "es2024",
  d: true,
  minify:false,
  minifyIdentifiers:false
});
