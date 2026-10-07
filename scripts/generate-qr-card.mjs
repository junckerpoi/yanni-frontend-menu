import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import QRCode from 'qrcode';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputPath = path.join(rootDir, 'public', 'qr-card.svg');
const logoPath = path.join(rootDir, 'public', 'yannis-logo.svg');
const menuUrl = 'https://yanniyardmenu.netlify.app/';

const logoSvg = await readFile(logoPath, 'utf8');
const logoDataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(logoSvg)}`;
const qrSvg = await QRCode.toString(menuUrl, {
  type: 'svg',
  errorCorrectionLevel: 'H',
  margin: 2,
  width: 900,
  color: {
    dark: '#111111',
    light: '#FFFFFF',
  },
});

const qrMarkup = qrSvg
  .replace(/^<\?xml[\s\S]*?\?>\s*/, '')
  .replace(/<svg([^>]*)>/, '<svg$1>')
  .replace(/width="[^"]+"/, 'width="900"')
  .replace(/height="[^"]+"/, 'height="900"');

const outputSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1200" viewBox="0 0 1200 1200" role="img" aria-label="Yanni's Yared QR code">
  <rect width="1200" height="1200" rx="72" fill="#ffffff"/>
  <rect x="100" y="100" width="1000" height="1000" rx="60" fill="#ffffff"/>
  <g transform="translate(150 150)">
    ${qrMarkup}
  </g>
  <rect x="468" y="468" width="264" height="264" rx="52" fill="#ffffff"/>
  <image href="${logoDataUrl}" x="500" y="500" width="200" height="200" preserveAspectRatio="xMidYMid meet"/>
</svg>
`;

await writeFile(outputPath, outputSvg, 'utf8');