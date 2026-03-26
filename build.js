import esbuild from 'esbuild';

esbuild.build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    format: "esm",
    sourcemap: true,  // Kaynak haritası ekle
    outfile: "dist/oraksoft-ui.js", // Orijinal (minify edilmemiş) dosya
    minify: false,  // Minify yapma (IntelliSense için)
}).then(() => console.log("✅ Normal JS oluşturuldu"));

esbuild.build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    format: "esm",
    sourcemap: true,  // Source map ekle (minify edilse bile)
    outfile: "dist/oraksoft-ui.min.js", // Minify edilmiş versiyon
    minify: true, // Minify yap
    minifyIdentifiers: false,
}).then(() => console.log("✅ Minify edilmiş JS oluşturuldu"));