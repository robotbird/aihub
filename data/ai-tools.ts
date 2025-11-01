export interface AITool {
  id: string;
  name: string;
  url: string;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  color: string;
  tools: AITool[];
}

export const aiToolsData: Category[] = [
  {
    id: "chatbots",
    name: "AI CHATBOTS",
    color: "text-[#d97642]",
    tools: [
      {
        id: "chatgpt",
        name: "ChatGPT",
        url: "https://chatgpt.com",
        description: "OpenAI's powerful conversational AI that can help with writing, analysis, coding, and much more."
      },
      {
        id: "claude",
        name: "Claude",
        url: "https://claude.ai",
        description: "Anthropic's AI assistant that excels at analysis, writing, math, and coding with a focus on safety.",
      },
      {
        id: "deepseek",
        name: "DeepSeek",
        url: "https://chat.deepseek.com",
        description: "Advanced AI chatbot with deep reasoning capabilities for complex problem-solving.",
      },
      {
        id: "gemini",
        name: "Gemini",
        url: "https://gemini.google.com",
        description: "Google's most capable AI model with multimodal understanding and generation.",
      },
      {
        id: "grok",
        name: "Grok",
        url: "https://grok.x.ai",
        description: "X's AI assistant with real-time knowledge and a rebellious personality.",
      },
      {
        id: "meta-ai",
        name: "Meta AI",
        url: "https://www.meta.ai",
        description: "Meta's AI assistant integrated across Facebook, Instagram, and WhatsApp.",
      },
      {
        id: "ms-copilot",
        name: "MS Copilot",
        url: "https://copilot.microsoft.com",
        description: "Microsoft's AI companion powered by GPT-4, integrated with Office and Windows.",
      },
      {
        id: "perplexity",
        name: "Perplexity",
        url: "https://www.perplexity.ai",
        description: "AI-powered search engine that provides accurate answers with cited sources.",
      }
    ]
  },
  {
    id: "presentation",
    name: "AI PRESENTATION",
    color: "text-[#d97642]",
    tools: [
      {
        id: "beautiful-ai",
        name: "Beautiful.AI",
        url: "https://www.beautiful.ai",
        description: "Create stunning presentations with AI-powered design suggestions.",
      },
      {
        id: "gamma",
        name: "Gamma",
        url: "https://gamma.app",
        description: "Generate beautiful presentations, documents, and web pages with AI.",
      },
      {
        id: "pitch",
        name: "Pitch",
        url: "https://pitch.com",
        description: "Collaborative presentation software with smart templates and workflows.",
      },
      {
        id: "plus",
        name: "Plus",
        url: "https://www.plusdocs.com",
        description: "AI-powered presentation maker for Google Slides and PowerPoint.",
      },
      {
        id: "popai",
        name: "PopAI",
        url: "https://www.popai.pro",
        description: "Create presentations from documents and ideas with AI assistance.",
      },
      {
        id: "presentation-ai",
        name: "Presentation.Ai",
        url: "https://www.presentation.ai",
        description: "AI-first presentation builder with smart design and content generation.",
      },
      {
        id: "slidesgo",
        name: "Slidesgo",
        url: "https://slidesgo.com",
        description: "Free presentation templates and AI tools for creating slides.",
      },
      {
        id: "tome",
        name: "Tome",
        url: "https://tome.app",
        description: "AI-native format for telling stories with presentations and documents.",
      }
    ]
  },
  {
    id: "coding",
    name: "AI CODING ASSISTANCE",
    color: "text-[#d97642]",
    tools: [
      {
        id: "askcodi",
        name: "Askcodi",
        url: "https://www.askcodi.com",
        description: "AI coding assistant that helps write, explain, and debug code.",
      },
      {
        id: "codiga",
        name: "Codiga",
        url: "https://www.codiga.io",
        description: "Real-time static code analysis with AI-powered code review.",
      },
      {
        id: "cursor",
        name: "Cursor",
        url: "https://cursor.sh",
        description: "AI-first code editor built for productivity with GPT-4 integration.",
      },
      {
        id: "github-copilot",
        name: "GitHub Copilot",
        url: "https://github.com/features/copilot",
        description: "AI pair programmer that helps you write code faster and smarter.",
      },
      {
        id: "qodo",
        name: "Qodo",
        url: "https://www.qodo.ai",
        description: "AI-powered code generation and testing platform.",
      },
      {
        id: "replit",
        name: "Replit",
        url: "https://replit.com",
        description: "Online IDE with AI assistant for building and deploying software.",
      },
      {
        id: "tabnine",
        name: "Tabnine",
        url: "https://www.tabnine.com",
        description: "AI code completion tool that learns from your codebase.",
      }
    ]
  },
  {
    id: "email",
    name: "AI EMAIL ASSISTANCE",
    color: "text-[#d97642]",
    tools: [
      {
        id: "clippit-ai",
        name: "Clippit.Ai",
        url: "https://www.clippit.ai",
        description: "AI-powered email writing and management assistant.",
      },
      {
        id: "friday",
        name: "Friday",
        url: "https://www.heyfriday.ai",
        description: "AI writing assistant for emails, blogs, and marketing content.",
      },
      {
        id: "mailmaestro",
        name: "Mailmaestro",
        url: "https://www.maestrolabs.com",
        description: "AI email assistant that helps you write better emails faster.",
      },
      {
        id: "shortwave",
        name: "Shortwave",
        url: "https://www.shortwave.com",
        description: "Email client with AI-powered inbox management and writing.",
      },
      {
        id: "superhuman",
        name: "Superhuman",
        url: "https://superhuman.com",
        description: "The fastest email experience with AI-powered features.",
      }
    ]
  },
  {
    id: "image",
    name: "AI IMAGE GENERATION",
    color: "text-[#d97642]",
    tools: [
      {
        id: "adobe-firefly",
        name: "Adobe Firefly",
        url: "https://firefly.adobe.com",
        description: "Adobe's AI image generator integrated with Creative Cloud.",
      },
      {
        id: "dall-e",
        name: "DALL-E",
        url: "https://openai.com/dall-e-3",
        description: "OpenAI's image generation model that creates images from text.",
      },
      {
        id: "flux",
        name: "FLUX.1",
        url: "https://blackforestlabs.ai",
        description: "State-of-the-art image generation model by Black Forest Labs.",
      },
      {
        id: "ideogram",
        name: "Ideogram",
        url: "https://ideogram.ai",
        description: "AI image generator that excels at text rendering in images.",
      },
      {
        id: "midjourney",
        name: "Midjourney",
        url: "https://www.midjourney.com",
        description: "Leading AI art generator known for stunning, artistic images.",
      },
      {
        id: "recraft",
        name: "Recraft",
        url: "https://www.recraft.ai",
        description: "AI design tool for creating brand-consistent graphics.",
      },
      {
        id: "stable-diffusion",
        name: "StableDiffusion",
        url: "https://stability.ai",
        description: "Open-source AI image generation model for creative control.",
      }
    ]
  },
  {
    id: "writing",
    name: "AI WRITING GENERATION",
    color: "text-[#d97642]",
    tools: [
      {
        id: "copy-ai",
        name: "Copy.Ai",
        url: "https://www.copy.ai",
        description: "AI copywriter for marketing, blog posts, and social content.",
      },
      {
        id: "grammarly",
        name: "Grammarly",
        url: "https://www.grammarly.com",
        description: "AI writing assistant for grammar, spelling, and style.",
      },
      {
        id: "jasper",
        name: "Jasper",
        url: "https://www.jasper.ai",
        description: "AI content platform for enterprise marketing and sales teams.",
      },
      {
        id: "jotbot",
        name: "JotBot",
        url: "https://myjotbot.com",
        description: "AI writing assistant that mimics your writing style.",
      },
      {
        id: "quarkle",
        name: "Quarkle",
        url: "https://www.quarkle.ai",
        description: "AI writing tool for creative and technical content.",
      },
      {
        id: "quillbot",
        name: "Quillbot",
        url: "https://quillbot.com",
        description: "AI paraphrasing tool for rewriting and summarizing text.",
      },
      {
        id: "rytr",
        name: "Rytr",
        url: "https://rytr.me",
        description: "AI writing assistant for creating high-quality content fast.",
      },
      {
        id: "sudowrite",
        name: "Sudowrite",
        url: "https://www.sudowrite.com",
        description: "AI writing partner for novelists and screenwriters.",
      },
      {
        id: "writesonic",
        name: "Writesonic",
        url: "https://writesonic.com",
        description: "AI writer for articles, blog posts, and marketing copy.",
      }
    ]
  },
  {
    id: "spreadsheet",
    name: "AI SPREADSHEET",
    color: "text-[#d97642]",
    tools: [
      {
        id: "bricks",
        name: "Bricks",
        url: "https://www.bricks.ai",
        description: "Spreadsheet with AI that creates visuals and insights.",
      },
      {
        id: "formula-bot",
        name: "Formula Bot",
        url: "https://formulabot.com",
        description: "AI that converts text to Excel formulas and SQL queries.",
      },
      {
        id: "gigasheet",
        name: "Gigasheet",
        url: "https://www.gigasheet.com",
        description: "Big data spreadsheet with AI-powered analysis.",
      },
      {
        id: "rows-ai",
        name: "Rows AI",
        url: "https://rows.com",
        description: "Spreadsheet with AI assistant and data integrations.",
      },
      {
        id: "sheet-ai",
        name: "SheetAI",
        url: "https://www.sheetai.app",
        description: "AI functions for Google Sheets to automate tasks.",
      }
    ]
  },
  {
    id: "meeting",
    name: "AI MEETING NOTES",
    color: "text-[#d97642]",
    tools: [
      {
        id: "avoma",
        name: "Avoma",
        url: "https://www.avoma.com",
        description: "AI meeting assistant for note-taking and conversation intelligence.",
      },
      {
        id: "equal-time",
        name: "Equal Time",
        url: "https://www.equaltime.io",
        description: "AI that ensures balanced speaking time in meetings.",
      },
      {
        id: "fathom",
        name: "Fathom",
        url: "https://fathom.video",
        description: "Free AI meeting recorder and note-taker for video calls.",
      },
      {
        id: "fellow-app",
        name: "Fellow.App",
        url: "https://www.fellow.app",
        description: "AI meeting management for agendas, notes, and action items.",
      },
      {
        id: "fireflies",
        name: "Fireflies",
        url: "https://fireflies.ai",
        description: "AI notetaker that transcribes and analyzes meetings.",
      },
      {
        id: "krisp",
        name: "Krisp",
        url: "https://krisp.ai",
        description: "AI-powered noise cancellation and meeting transcription.",
      },
      {
        id: "otter",
        name: "Otter",
        url: "https://otter.ai",
        description: "AI meeting transcription and collaboration tool.",
      }
    ]
  },
  {
    id: "scheduling",
    name: "AI SCHEDULING",
    color: "text-[#d97642]",
    tools: [
      {
        id: "calendly",
        name: "Calendly",
        url: "https://calendly.com",
        description: "Automated scheduling tool for meetings and appointments.",
      },
      {
        id: "clockwise",
        name: "Clockwise",
        url: "https://www.getclockwise.com",
        description: "AI calendar assistant that optimizes your schedule.",
      },
      {
        id: "motion",
        name: "Motion",
        url: "https://www.usemotion.com",
        description: "AI calendar and project manager that auto-schedules tasks.",
      },
      {
        id: "reclaim-ai",
        name: "Reclaim AI",
        url: "https://reclaim.ai",
        description: "AI scheduling for habits, tasks, and meetings in your calendar.",
      },
      {
        id: "taskade",
        name: "Taskade",
        url: "https://www.taskade.com",
        description: "AI-powered workspace for tasks, notes, and collaboration.",
      },
      {
        id: "trevor-ai",
        name: "Trevor AI",
        url: "https://trevorai.com",
        description: "AI task scheduling that plans your perfect day.",
      }
    ]
  },
  {
    id: "video",
    name: "AI VIDEO GENERATION",
    color: "text-[#d97642]",
    tools: [
      {
        id: "descript",
        name: "Descript",
        url: "https://www.descript.com",
        description: "Video editor with AI transcription and voice cloning.",
      },
      {
        id: "heiper-ai",
        name: "Heiper AI",
        url: "https://www.heiper.ai",
        description: "AI video creation platform for marketing content.",
      },
      {
        id: "invideo-ai",
        name: "InVideo AI",
        url: "https://invideo.io",
        description: "Create videos from text prompts with AI automation.",
      },
      {
        id: "kling",
        name: "Kling",
        url: "https://klingai.com",
        description: "Advanced AI video generation from text and images.",
      },
      {
        id: "krea-ai",
        name: "Krea AI",
        url: "https://www.krea.ai",
        description: "Real-time AI image and video generation platform.",
      },
      {
        id: "ltx-studio",
        name: "LTX Studio",
        url: "https://ltx.studio",
        description: "AI filmmaking platform for complete video production.",
      },
      {
        id: "luma-ai",
        name: "Luma AI",
        url: "https://lumalabs.ai",
        description: "AI-powered 3D capture and video generation.",
      },
      {
        id: "pika-ai",
        name: "Pika AI",
        url: "https://pika.art",
        description: "Text-to-video AI that creates and edits videos.",
      },
      {
        id: "runway",
        name: "Runway",
        url: "https://runwayml.com",
        description: "AI-powered video editing and generation suite.",
      },
      {
        id: "sora",
        name: "Sora",
        url: "https://openai.com/sora",
        description: "OpenAI's video generation model creating realistic scenes.",
      }
    ]
  },
  {
    id: "knowledge",
    name: "AI KNOWLEDGE MANAGEMENT",
    color: "text-[#d97642]",
    tools: [
      {
        id: "mem",
        name: "Mem",
        url: "https://get.mem.ai",
        description: "AI-powered note-taking that organizes itself.",
      },
      {
        id: "notion",
        name: "Notion",
        url: "https://www.notion.so",
        description: "All-in-one workspace with AI writing and organization.",
      },
      {
        id: "tettra",
        name: "Tettra",
        url: "https://tettra.com",
        description: "AI-powered internal knowledge base for teams.",
      }
    ]
  },
  {
    id: "workflow",
    name: "AI WORKFLOW AUTOMATION",
    color: "text-[#d97642]",
    tools: [
      {
        id: "integrately",
        name: "Integrately",
        url: "https://integrately.com",
        description: "Automation platform connecting 1000+ apps with AI.",
      },
      {
        id: "make",
        name: "Make",
        url: "https://www.make.com",
        description: "Visual workflow automation with AI integrations.",
      },
      {
        id: "monday-com",
        name: "Monday.Com",
        url: "https://monday.com",
        description: "Work OS with AI-powered project management.",
      },
      {
        id: "n8n",
        name: "N8n",
        url: "https://n8n.io",
        description: "Open-source workflow automation with AI nodes.",
      },
      {
        id: "wrike",
        name: "Wrike",
        url: "https://www.wrike.com",
        description: "Project management platform with AI automation.",
      },
      {
        id: "zapier",
        name: "Zapier",
        url: "https://zapier.com",
        description: "Connect and automate apps with AI-powered workflows.",
      }
    ]
  },
  {
    id: "graphic",
    name: "AI GRAPHIC DESIGN",
    color: "text-[#d97642]",
    tools: [
      {
        id: "autodraw",
        name: "AutoDraw",
        url: "https://www.autodraw.com",
        description: "Google's AI that turns sketches into professional drawings.",
      },
      {
        id: "canva",
        name: "Canva",
        url: "https://www.canva.com",
        description: "Design platform with AI-powered tools and templates.",
      },
      {
        id: "design-com",
        name: "Design.Com",
        url: "https://www.design.com",
        description: "AI logo maker and brand identity designer.",
      },
      {
        id: "framer",
        name: "Framer",
        url: "https://www.framer.com",
        description: "Web design tool with AI-powered site generation.",
      },
      {
        id: "microsoft-designer",
        name: "Microsoft Designer",
        url: "https://designer.microsoft.com",
        description: "Microsoft's AI design tool for social media and presentations.",
      },
      {
        id: "uizard",
        name: "Uizard",
        url: "https://uizard.io",
        description: "AI-powered UI design tool that generates interfaces.",
      }
    ]
  },
  {
    id: "data-viz",
    name: "AI DATA VISUALIZATION",
    color: "text-[#d97642]",
    tools: [
      {
        id: "deckpilot",
        name: "Deckpilot",
        url: "https://www.deckpilot.io",
        description: "AI-powered data visualization for presentations.",
      },
      {
        id: "flourish",
        name: "Flourish",
        url: "https://flourish.studio",
        description: "Create stunning data visualizations and stories.",
      },
      {
        id: "julius",
        name: "Julius",
        url: "https://julius.ai",
        description: "AI data analyst that creates insights and visualizations.",
      },
      {
        id: "visme",
        name: "Visme",
        url: "https://www.visme.co",
        description: "Visual content creation with data visualization tools.",
      },
      {
        id: "zing-data",
        name: "Zing Data",
        url: "https://getzingdata.com",
        description: "Mobile-first business intelligence with AI insights.",
      }
    ]
  }
];

// 扁平化所有工具用于搜索和详情页
export const allTools: AITool[] = aiToolsData.flatMap(category => category.tools);

// 根据ID获取工具
export const getToolById = (id: string): AITool | undefined => {
  return allTools.find(tool => tool.id === id);
};

// 根据分类ID获取分类
export const getCategoryById = (id: string): Category | undefined => {
  return aiToolsData.find(category => category.id === id);
};

