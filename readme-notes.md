tsconfig.json çıkarılanlar
    "lib": ["esnext"],
    "strict": true,
    "moduleResolution": "node",
    "skipLibCheck": true,
    "esModuleInterop": true,
    "rootDir": "src"

"build": "tsup",

package json çıkarılanlar

"main": "dist/index.js",
"module": "dist/index.mjs",
"types": "dist/index.d.ts",

"files": [
"dist"
],