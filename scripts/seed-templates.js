const fs = require("fs").promises;
const path = require("path");

main();

async function main(dataDir = "./_data/bible", templateDir = "./templates") {
  const tmplPath = path.join(templateDir, "_template.tmpl");
  const tmpl = await fs.readFile(tmplPath, "utf-8");

  const files = await (await fs.readdir(dataDir)).filter(file =>
    file.endsWith(".json")
  );
  for (const file of files) {
    const title = require(path.join("..", dataDir, file)).name;
    const basename = path.basename(file, ".json");
    const fileTmpl = tmpl
      .replace("{# title #}", title)
      .replace("{# slug #}", basename);
    const filePath = path.join(templateDir, `${basename}.njk`);
    fs.writeFile(filePath, fileTmpl.trim() + "\n");
  }
}
