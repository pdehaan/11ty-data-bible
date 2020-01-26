const fs = require("fs").promises;
const path = require("path");

const axios = require("axios");
const slugify = require("slugify");

main();

async function main(outdir = "./_data/bible") {
  const bible = await download(
    "https://raw.githubusercontent.com/thiagobodruk/bible/master/json/en_kjv.json"
  );
  for (const book of bible) {
    const slug = slugify(book.name, { lower: true });
    const filename = path.join(outdir, `${slug}.json`);
    await fs.writeFile(filename, JSON.stringify(book, null, 2));
  }
}

async function download(uri) {
  const res = await axios.get(uri);
  return JSON.parse(res.data.trim());
}
