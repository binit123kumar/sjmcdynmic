import fs from 'node:fs/promises';
import path from 'node:path';

const apiBase = (process.env.REACT_APP_API_URL || 'https://localhost:7050/api').replace(/\/$/, '');
const token = process.env.SJMC_TOKEN;
const sourceDirectory = path.resolve('src/page');
const dryRun = process.argv.includes('--dry-run');

if (!token && !dryRun) {
  throw new Error('Set SJMC_TOKEN to a JWT token or run with --dry-run.');
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 120);
}

function extractText(source) {
  const withoutImports = source.replace(/^\s*import[\s\S]*?;\s*$/gm, '');
  const matches = [...withoutImports.matchAll(/>([^<{][^<]{10,})</g)];
  return matches
    .map((match) => match[1].replace(/\s+/g, ' ').trim())
    .filter((text) => text && !text.startsWith('Loading') && !text.startsWith('No '));
}

const files = (await fs.readdir(sourceDirectory)).filter((file) => /\.(jsx|html)$/i.test(file));
for (const file of files) {
  const source = await fs.readFile(path.join(sourceDirectory, file), 'utf8');
  const title = path.basename(file, path.extname(file)).replace(/[_-]+/g, ' ');
  const paragraphs = extractText(source);
  if (!paragraphs.length) continue;

  const record = {
    slug: slugify(title),
    title,
    body: paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join(''),
    category: 'Imported static page',
    displayOrder: 1,
    isActive: true,
  };

  if (dryRun) {
    console.log(`${record.slug}: ${paragraphs.length} text blocks`);
    continue;
  }

  const form = new FormData();
  Object.entries(record).forEach(([key, value]) => form.append(key, String(value)));
  const response = await fetch(`${apiBase}/contentpages`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    body: form,
  });
  if (!response.ok && response.status !== 409) {
    throw new Error(`${file}: HTTP ${response.status}`);
  }
  console.log(`${response.status === 409 ? 'Skipped' : 'Imported'} ${record.slug}`);
}
