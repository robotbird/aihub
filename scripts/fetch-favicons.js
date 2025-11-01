const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { parse } = require('url');

// 创建logos目录
const logosDir = path.join(__dirname, '..', 'public', 'logos');
if (!fs.existsSync(logosDir)) {
  fs.mkdirSync(logosDir, { recursive: true });
}

// AI工具数据
const aiTools = [
  // AI Chatbots
  { id: 'chatgpt', url: 'https://chat.openai.com' },
  { id: 'claude', url: 'https://claude.ai' },
  { id: 'deepseek', url: 'https://chat.deepseek.com' },
  { id: 'gemini', url: 'https://gemini.google.com' },
  { id: 'grok', url: 'https://grok.x.ai' },
  { id: 'meta-ai', url: 'https://www.meta.ai' },
  { id: 'ms-copilot', url: 'https://copilot.microsoft.com' },
  { id: 'perplexity', url: 'https://www.perplexity.ai' },
  
  // AI Presentation
  { id: 'beautiful-ai', url: 'https://www.beautiful.ai' },
  { id: 'gamma', url: 'https://gamma.app' },
  { id: 'pitch', url: 'https://pitch.com' },
  { id: 'plus', url: 'https://www.plusdocs.com' },
  { id: 'popai', url: 'https://www.popai.pro' },
  { id: 'presentation-ai', url: 'https://www.presentation.ai' },
  { id: 'slidesgo', url: 'https://slidesgo.com' },
  { id: 'tome', url: 'https://tome.app' },
  
  // AI Coding
  { id: 'askcodi', url: 'https://www.askcodi.com' },
  { id: 'codiga', url: 'https://www.codiga.io' },
  { id: 'cursor', url: 'https://cursor.sh' },
  { id: 'github-copilot', url: 'https://github.com/features/copilot' },
  { id: 'qodo', url: 'https://www.qodo.ai' },
  { id: 'replit', url: 'https://replit.com' },
  { id: 'tabnine', url: 'https://www.tabnine.com' },
  
  // AI Email
  { id: 'clippit-ai', url: 'https://www.clippit.ai' },
  { id: 'friday', url: 'https://www.heyfriday.ai' },
  { id: 'mailmaestro', url: 'https://mailmaestro.com' },
  { id: 'shortwave', url: 'https://www.shortwave.com' },
  { id: 'superhuman', url: 'https://superhuman.com' },
  
  // AI Image
  { id: 'adobe-firefly', url: 'https://firefly.adobe.com' },
  { id: 'dall-e', url: 'https://openai.com/dall-e-3' },
  { id: 'flux', url: 'https://blackforestlabs.ai' },
  { id: 'ideogram', url: 'https://ideogram.ai' },
  { id: 'midjourney', url: 'https://www.midjourney.com' },
  { id: 'recraft', url: 'https://www.recraft.ai' },
  { id: 'stable-diffusion', url: 'https://stability.ai' },
  
  // AI Writing
  { id: 'copy-ai', url: 'https://www.copy.ai' },
  { id: 'grammarly', url: 'https://www.grammarly.com' },
  { id: 'jasper', url: 'https://www.jasper.ai' },
  { id: 'jotbot', url: 'https://myjotbot.com' },
  { id: 'quarkle', url: 'https://www.quarkle.ai' },
  { id: 'quillbot', url: 'https://quillbot.com' },
  { id: 'rytr', url: 'https://rytr.me' },
  { id: 'sudowrite', url: 'https://www.sudowrite.com' },
  { id: 'writesonic', url: 'https://writesonic.com' },
  
  // AI Spreadsheet
  { id: 'bricks', url: 'https://www.bricks.ai' },
  { id: 'formula-bot', url: 'https://formulabot.com' },
  { id: 'gigasheet', url: 'https://www.gigasheet.com' },
  { id: 'rows-ai', url: 'https://rows.com' },
  { id: 'sheet-ai', url: 'https://www.sheetai.app' },
  
  // AI Meeting
  { id: 'avoma', url: 'https://www.avoma.com' },
  { id: 'equal-time', url: 'https://www.equaltime.io' },
  { id: 'fathom', url: 'https://fathom.video' },
  { id: 'fellow-app', url: 'https://www.fellow.app' },
  { id: 'fireflies', url: 'https://fireflies.ai' },
  { id: 'krisp', url: 'https://krisp.ai' },
  { id: 'otter', url: 'https://otter.ai' },
  
  // AI Scheduling
  { id: 'calendly', url: 'https://calendly.com' },
  { id: 'clockwise', url: 'https://www.getclockwise.com' },
  { id: 'motion', url: 'https://www.usemotion.com' },
  { id: 'reclaim-ai', url: 'https://reclaim.ai' },
  { id: 'taskade', url: 'https://www.taskade.com' },
  { id: 'trevor-ai', url: 'https://trevorai.com' },
  
  // AI Video
  { id: 'descript', url: 'https://www.descript.com' },
  { id: 'heiper-ai', url: 'https://www.heiper.ai' },
  { id: 'invideo-ai', url: 'https://invideo.io' },
  { id: 'kling', url: 'https://klingai.com' },
  { id: 'krea-ai', url: 'https://www.krea.ai' },
  { id: 'ltx-studio', url: 'https://ltx.studio' },
  { id: 'luma-ai', url: 'https://lumalabs.ai' },
  { id: 'pika-ai', url: 'https://pika.art' },
  { id: 'runway', url: 'https://runwayml.com' },
  { id: 'sora', url: 'https://openai.com/sora' },
  
  // AI Knowledge
  { id: 'mem', url: 'https://get.mem.ai' },
  { id: 'notion', url: 'https://www.notion.so' },
  { id: 'tettra', url: 'https://tettra.com' },
  
  // AI Workflow
  { id: 'integrately', url: 'https://integrately.com' },
  { id: 'make', url: 'https://www.make.com' },
  { id: 'monday-com', url: 'https://monday.com' },
  { id: 'n8n', url: 'https://n8n.io' },
  { id: 'wrike', url: 'https://www.wrike.com' },
  { id: 'zapier', url: 'https://zapier.com' },
  
  // AI Graphic
  { id: 'autodraw', url: 'https://www.autodraw.com' },
  { id: 'canva', url: 'https://www.canva.com' },
  { id: 'design-com', url: 'https://www.design.com' },
  { id: 'framer', url: 'https://www.framer.com' },
  { id: 'microsoft-designer', url: 'https://designer.microsoft.com' },
  { id: 'uizard', url: 'https://uizard.io' },
  
  // AI Data Viz
  { id: 'deckpilot', url: 'https://www.deckpilot.com' },
  { id: 'flourish', url: 'https://flourish.studio' },
  { id: 'julius', url: 'https://julius.ai' },
  { id: 'visme', url: 'https://www.visme.co' },
  { id: 'zing-data', url: 'https://getzingdata.com' },
];

// 获取favicon的多种可能路径
function getFaviconUrls(baseUrl) {
  const parsedUrl = parse(baseUrl);
  const origin = `${parsedUrl.protocol}//${parsedUrl.hostname}`;
  
  return [
    `${origin}/favicon.ico`,
    `${origin}/favicon.png`,
    `${origin}/apple-touch-icon.png`,
    `${origin}/icon.png`,
    `${origin}/icon.svg`,
    `${baseUrl}/favicon.ico`,
  ];
}

// 下载文件
function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
      }
    };
    
    protocol.get(url, options, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve(true);
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        // 处理重定向
        downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      } else {
        reject(new Error(`Failed to download: ${response.statusCode}`));
      }
    }).on('error', reject);
  });
}

// 尝试下载favicon
async function fetchFavicon(tool) {
  const faviconUrls = getFaviconUrls(tool.url);
  
  for (const faviconUrl of faviconUrls) {
    try {
      const ext = path.extname(faviconUrl) || '.png';
      const dest = path.join(logosDir, `${tool.id}${ext}`);
      
      console.log(`Trying: ${faviconUrl}`);
      await downloadFile(faviconUrl, dest);
      console.log(`✓ Downloaded: ${tool.id}${ext}`);
      return `${tool.id}${ext}`;
    } catch (error) {
      // 尝试下一个URL
      continue;
    }
  }
  
  console.log(`✗ Failed to download favicon for: ${tool.id}`);
  return null;
}

// 主函数
async function main() {
  console.log('Starting favicon download...\n');
  
  let successCount = 0;
  let failCount = 0;
  
  for (const tool of aiTools) {
    console.log(`\n[${successCount + failCount + 1}/${aiTools.length}] ${tool.id}`);
    const result = await fetchFavicon(tool);
    
    if (result) {
      successCount++;
    } else {
      failCount++;
    }
    
    // 延迟避免请求过快
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  console.log(`\n\n=== Summary ===`);
  console.log(`✓ Success: ${successCount}`);
  console.log(`✗ Failed: ${failCount}`);
  console.log(`Total: ${aiTools.length}`);
}

main().catch(console.error);

