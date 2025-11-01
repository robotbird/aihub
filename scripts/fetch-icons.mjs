import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 创建logos目录
const logosDir = path.join(__dirname, '..', 'public', 'logos');
if (!fs.existsSync(logosDir)) {
  fs.mkdirSync(logosDir, { recursive: true });
}

// AI工具数据
const aiTools = [
  { id: 'chatgpt', domain: 'chat.openai.com' },
  { id: 'claude', domain: 'claude.ai' },
  { id: 'deepseek', domain: 'chat.deepseek.com' },
  { id: 'gemini', domain: 'gemini.google.com' },
  { id: 'grok', domain: 'grok.x.ai' },
  { id: 'meta-ai', domain: 'meta.ai' },
  { id: 'ms-copilot', domain: 'copilot.microsoft.com' },
  { id: 'perplexity', domain: 'perplexity.ai' },
  { id: 'beautiful-ai', domain: 'beautiful.ai' },
  { id: 'gamma', domain: 'gamma.app' },
  { id: 'pitch', domain: 'pitch.com' },
  { id: 'plus', domain: 'plusdocs.com' },
  { id: 'popai', domain: 'popai.pro' },
  { id: 'presentation-ai', domain: 'presentation.ai' },
  { id: 'slidesgo', domain: 'slidesgo.com' },
  { id: 'tome', domain: 'tome.app' },
  { id: 'askcodi', domain: 'askcodi.com' },
  { id: 'codiga', domain: 'codiga.io' },
  { id: 'cursor', domain: 'cursor.sh' },
  { id: 'github-copilot', domain: 'github.com' },
  { id: 'qodo', domain: 'qodo.ai' },
  { id: 'replit', domain: 'replit.com' },
  { id: 'tabnine', domain: 'tabnine.com' },
  { id: 'clippit-ai', domain: 'clippit.ai' },
  { id: 'friday', domain: 'heyfriday.ai' },
  { id: 'mailmaestro', domain: 'mailmaestro.com' },
  { id: 'shortwave', domain: 'shortwave.com' },
  { id: 'superhuman', domain: 'superhuman.com' },
  { id: 'adobe-firefly', domain: 'firefly.adobe.com' },
  { id: 'dall-e', domain: 'openai.com' },
  { id: 'flux', domain: 'blackforestlabs.ai' },
  { id: 'ideogram', domain: 'ideogram.ai' },
  { id: 'midjourney', domain: 'midjourney.com' },
  { id: 'recraft', domain: 'recraft.ai' },
  { id: 'stable-diffusion', domain: 'stability.ai' },
  { id: 'copy-ai', domain: 'copy.ai' },
  { id: 'grammarly', domain: 'grammarly.com' },
  { id: 'jasper', domain: 'jasper.ai' },
  { id: 'jotbot', domain: 'myjotbot.com' },
  { id: 'quarkle', domain: 'quarkle.ai' },
  { id: 'quillbot', domain: 'quillbot.com' },
  { id: 'rytr', domain: 'rytr.me' },
  { id: 'sudowrite', domain: 'sudowrite.com' },
  { id: 'writesonic', domain: 'writesonic.com' },
  { id: 'bricks', domain: 'bricks.ai' },
  { id: 'formula-bot', domain: 'formulabot.com' },
  { id: 'gigasheet', domain: 'gigasheet.com' },
  { id: 'rows-ai', domain: 'rows.com' },
  { id: 'sheet-ai', domain: 'sheetai.app' },
  { id: 'avoma', domain: 'avoma.com' },
  { id: 'equal-time', domain: 'equaltime.io' },
  { id: 'fathom', domain: 'fathom.video' },
  { id: 'fellow-app', domain: 'fellow.app' },
  { id: 'fireflies', domain: 'fireflies.ai' },
  { id: 'krisp', domain: 'krisp.ai' },
  { id: 'otter', domain: 'otter.ai' },
  { id: 'calendly', domain: 'calendly.com' },
  { id: 'clockwise', domain: 'getclockwise.com' },
  { id: 'motion', domain: 'usemotion.com' },
  { id: 'reclaim-ai', domain: 'reclaim.ai' },
  { id: 'taskade', domain: 'taskade.com' },
  { id: 'trevor-ai', domain: 'trevorai.com' },
  { id: 'descript', domain: 'descript.com' },
  { id: 'heiper-ai', domain: 'heiper.ai' },
  { id: 'invideo-ai', domain: 'invideo.io' },
  { id: 'kling', domain: 'klingai.com' },
  { id: 'krea-ai', domain: 'krea.ai' },
  { id: 'ltx-studio', domain: 'ltx.studio' },
  { id: 'luma-ai', domain: 'lumalabs.ai' },
  { id: 'pika-ai', domain: 'pika.art' },
  { id: 'runway', domain: 'runwayml.com' },
  { id: 'sora', domain: 'openai.com' },
  { id: 'mem', domain: 'get.mem.ai' },
  { id: 'notion', domain: 'notion.so' },
  { id: 'tettra', domain: 'tettra.com' },
  { id: 'integrately', domain: 'integrately.com' },
  { id: 'make', domain: 'make.com' },
  { id: 'monday-com', domain: 'monday.com' },
  { id: 'n8n', domain: 'n8n.io' },
  { id: 'wrike', domain: 'wrike.com' },
  { id: 'zapier', domain: 'zapier.com' },
  { id: 'autodraw', domain: 'autodraw.com' },
  { id: 'canva', domain: 'canva.com' },
  { id: 'design-com', domain: 'design.com' },
  { id: 'framer', domain: 'framer.com' },
  { id: 'microsoft-designer', domain: 'designer.microsoft.com' },
  { id: 'uizard', domain: 'uizard.io' },
  { id: 'deckpilot', domain: 'deckpilot.com' },
  { id: 'flourish', domain: 'flourish.studio' },
  { id: 'julius', domain: 'julius.ai' },
  { id: 'visme', domain: 'visme.co' },
  { id: 'zing-data', domain: 'getzingdata.com' },
];

// 使用Google Favicon服务
async function downloadFavicon(tool) {
  try {
    const url = `https://www.google.com/s2/favicons?domain=${tool.domain}&sz=128`;
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    
    const buffer = await response.buffer();
    const dest = path.join(logosDir, `${tool.id}.png`);
    fs.writeFileSync(dest, buffer);
    
    console.log(`✓ ${tool.id}`);
    return true;
  } catch (error) {
    console.log(`✗ ${tool.id} - ${error.message}`);
    return false;
  }
}

async function main() {
  console.log('Downloading favicons...\n');
  
  let success = 0;
  let failed = 0;
  
  for (const tool of aiTools) {
    const result = await downloadFavicon(tool);
    if (result) success++;
    else failed++;
    
    // Progress
    if ((success + failed) % 10 === 0) {
      console.log(`Progress: ${success + failed}/${aiTools.length}\n`);
    }
    
    // Delay
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  console.log(`\n✓ Success: ${success}`);
  console.log(`✗ Failed: ${failed}`);
  console.log(`Total: ${aiTools.length}`);
}

main().catch(console.error);

