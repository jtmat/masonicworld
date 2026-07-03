const fs = require("fs");
const path = require("path");

const rootDir = process.cwd();
const articlesDir = path.join(rootDir, "resources", "articles", "files");
const templatePath = path.join(rootDir, "tools", "article-template.html");
const backupDir = path.join(rootDir, "resources", "articles", "files-backup-before-conversion");

function stripTags(html) {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&#39;/gi, "'")
    .replace(/&quot;/gi, '"')
    .replace(/\s+/g, " ")
    .trim();
}

function getTitle(content, filename) {
  const headingMatch = content.match(/<h[1-3][^>]*>([\s\S]*?)<\/h[1-3]>/i);

  if (headingMatch) {
    const title = stripTags(headingMatch[1]);
    if (title.length > 0) return title;
  }

  return path.basename(filename, path.extname(filename))
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeTitle(title) {
  return title
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function extractArticleContent(original) {
  // Method 1: Dreamweaver editable region
  const beginMatch = original.match(/<!--\s*#BeginEditable\s+["']content["']\s*-->/i);
  const endMatch = original.match(/<!--\s*#EndEditable\s*-->/i);

  if (beginMatch && endMatch && endMatch.index > beginMatch.index) {
    const start = beginMatch.index + beginMatch[0].length;
    const end = endMatch.index;
    return original.slice(start, end).trim();
  }

  // Method 2: Old page content div
  const contentDivMatch = original.match(/<div\s+id=["']content["'][^>]*>/i);

  if (contentDivMatch) {
    const start = contentDivMatch.index + contentDivMatch[0].length;

    const possibleEnds = [
      original.search(/<!--\s*Main Content ends here\s*-->/i),
      original.search(/<!--\s*Do NOT Delete/i),
      original.search(/<br\s+class=["']clearFloat["']/i)
    ].filter(index => index > start);

    if (possibleEnds.length > 0) {
      const end = Math.min(...possibleEnds);

      return original
        .slice(start, end)
        .replace(/\s*<\/div>\s*$/i, "")
        .trim();
    }
  }

  return null;
}

function convertFile(filePath, template) {
  const original = fs.readFileSync(filePath, "utf8");

  // If already converted, skip it.
  if (
    original.includes('class="container page-content article-page"') ||
    original.includes("class='container page-content article-page'")
  ) {
    console.log(`SKIPPED: ${path.basename(filePath)} — already converted`);
    return false;
  }

  const articleContent = extractArticleContent(original);

  if (!articleContent) {
    console.log(`SKIPPED: ${path.basename(filePath)} — could not find article content`);
    return false;
  }

  const title = getTitle(articleContent, filePath);

  const converted = template
    .replaceAll("<!-- ARTICLE_TITLE -->", escapeTitle(title))
    .replace("<!-- ARTICLE_CONTENT -->", articleContent);

  fs.writeFileSync(filePath, converted, "utf8");

  console.log(`CONVERTED: ${path.basename(filePath)} — ${title}`);
  return true;
}

function main() {
  if (!fs.existsSync(articlesDir)) {
    console.error(`Could not find articles folder: ${articlesDir}`);
    process.exit(1);
  }

  if (!fs.existsSync(templatePath)) {
    console.error(`Could not find template file: ${templatePath}`);
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, "utf8");

  if (!template.includes("<!-- ARTICLE_CONTENT -->")) {
    console.error("Template is missing <!-- ARTICLE_CONTENT -->");
    process.exit(1);
  }

  if (!template.includes("<!-- ARTICLE_TITLE -->")) {
    console.error("Template is missing <!-- ARTICLE_TITLE -->");
    process.exit(1);
  }

  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }

  const files = fs.readdirSync(articlesDir)
    .filter(file => /\.(htm|html)$/i.test(file));

  let convertedCount = 0;
  let skippedCount = 0;

  for (const file of files) {
    const filePath = path.join(articlesDir, file);
    const backupPath = path.join(backupDir, file);

    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(filePath, backupPath);
    }

    const converted = convertFile(filePath, template);

    if (converted) convertedCount++;
    else skippedCount++;
  }

  console.log("");
  console.log("Done.");
  console.log(`Converted: ${convertedCount}`);
  console.log(`Skipped: ${skippedCount}`);
  console.log(`Backup folder: ${backupDir}`);
}

main();