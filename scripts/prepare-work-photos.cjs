const fs = require("node:fs/promises");
const path = require("node:path");
const sharp = require("sharp");

// Keep the supplied originals outside public/. These copies are sized for the
// web, automatically oriented and exported without camera/location metadata.
const sources = [
  ["IMG_4320.JPG", "start-hack-viseca"],
  ["IMG_3752.JPG", "development-desk"],
  ["IMG_4471.JPG", "scala-huffman"],
  ["att.vL80jjqB3ctXPmpdyFiLTZaS52v2CsqZN1mXuDYyexg.JPG", "focus-session-interface"],
  ["IMG_4277.JPG", "train-platform", 90],
  ["IMG_2780.JPG", "mobile-development"],
  ["IMG_4226.JPG", "focus-session"],
  ["IMG_4321.JPG", "start-hack-workspace"],
  ["IMG_2727.JPG", "welockin-development"],
  ["IMG_2525.JPG", "saudade-tshirt"],
  ["IMG_4472.JPG", "scala-study-desk", 270],
  ["att.DUZes214UG37afV32cCS8V6OePkolIdl4SbSfRLnccM.JPG", "welockin-schedule"],
  ["IMG_2521.jpeg", "desktop-development"],
  ["IMG_2503.PNG", "saudade-received-photos"],
  ["IMG_2502.PNG", "saudade-shirt-photo"],
  ["IMG_2506.jpeg", "saudade-tshirt-on-hanger"],
  ["IMG_2504.jpeg", "saudade-qr-detail"],
  ["IMG_4505.jpeg", "assembly-development"],
  ["IMG_4503.jpeg", "coding-workspace"],
];

async function main() {
  const input = path.resolve(process.argv[2] || "../portfolio-photos");
  const output = path.resolve(__dirname, "../public/work");
  await fs.mkdir(output, { recursive: true });
  let bytes = 0;
  for (const [file, name, rotation] of sources) {
    const destination = path.join(output, `${name}.webp`);
    const result = await sharp(path.join(input, file))
      .rotate(rotation)
      .resize({ width: 2000, height: 2000, fit: "inside", withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(destination);
    bytes += result.size;
  }
  console.log(`Prepared ${sources.length} work photos (${(bytes / 1024 / 1024).toFixed(2)} MB).`);
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
