import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('.reference/elementor');
const locations = ['content/page', 'templates'];
const interestingKeys = new Set([
  'title',
  'editor',
  'text',
  'description',
  'button_text',
  'link',
  'url',
  'image',
  'background_image',
  'background_video_link',
  'background_video_fallback',
  'animation',
  '_animation',
  'animation_mobile',
  '_animation_mobile',
  'css_classes',
  '_css_classes',
  'html_tag',
  'slides',
  'tabs',
  'menu',
  'map',
  'address',
]);

function concise(value) {
  if (value == null || value === '' || value === false) return null;
  if (typeof value === 'string') {
    return value.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 240);
  }
  if (typeof value === 'number' || typeof value === 'boolean') return value;
  if (Array.isArray(value)) return value.slice(0, 8).map(concise).filter(Boolean);
  if (typeof value === 'object') {
    const selected = {};
    for (const key of ['id', 'url', 'size', 'alt', 'custom_dimension', 'is_external', 'nofollow']) {
      if (value[key] != null && value[key] !== '') selected[key] = value[key];
    }
    return Object.keys(selected).length ? selected : null;
  }
  return null;
}

function visit(element, depth = 0) {
  const label = [element.elType, element.widgetType].filter(Boolean).join(':');
  const details = {};
  for (const [key, value] of Object.entries(element.settings ?? {})) {
    if (interestingKeys.has(key) || key.includes('background') || key.includes('animation')) {
      const reduced = concise(value);
      if (reduced != null && (!Array.isArray(reduced) || reduced.length)) details[key] = reduced;
    }
  }
  console.log(`${'  '.repeat(depth)}- ${label || 'element'} ${JSON.stringify(details)}`);
  for (const child of element.elements ?? []) visit(child, depth + 1);
}

for (const location of locations) {
  const directory = path.join(root, location);
  const files = (await readdir(directory)).filter((name) => name.endsWith('.json')).sort();
  for (const file of files) {
    const document = JSON.parse(await readFile(path.join(directory, file), 'utf8'));
    console.log(`\n=== ${location}/${file}: ${document.title ?? ''} ===`);
    console.log(JSON.stringify(document.settings ?? {}));
    for (const element of document.content ?? []) visit(element);
  }
}
