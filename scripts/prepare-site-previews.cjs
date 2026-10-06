const fs = require("node:fs/promises");
const path = require("node:path");
const sharp = require("sharp");

// Compress actual browser captures without cropping or changing page content.
// Refresh the JPG captures with a browser before running this script.
const names = ["tunisianpass", "welockin", "welock", "mydiaryskills", "mygymskills", "focusgym", "cleanair", "dieu-et-cie", "lilidecoai"];

async function main() {
  if (!process.argv[2]) throw new Error("Provide the folder containing the original JPG browser captures.");
  const input = path.resolve(process.argv[2]);
  const output = path.resolve(__dirname, "../public/previews");
  await fs.mkdir(output, { recursive: true });
  let bytes = 0;
  for (const name of names) {
    const result = await sharp(path.join(input, `${name}.jpg`))
      .resize({ width: 1440, height: 1000, fit: "inside", withoutEnlargement: true })
      .webp({ quality: 90 })
      .toFile(path.join(output, `${name}.webp`));
    bytes += result.size;
    console.log(`${name}: ${result.width}x${result.height}, ${Math.round(result.size / 1024)} KB`);
  }
  console.log(`Prepared ${names.length} authentic site previews (${(bytes / 1024 / 1024).toFixed(2)} MB).`);
}

main().catch((error) => { console.error(error.message); process.exitCode = 1; });
