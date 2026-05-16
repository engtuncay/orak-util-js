import { defineConfig } from "tsup";

export default defineConfig({
  entry: {"orak-util-js":"src/index.ts"},
  clean: true,
  format: ["esm"],
  sourcemap: true,
  dts: true,
  target: "es2024",
  minify:false,
  minifyIdentifiers:false
});
