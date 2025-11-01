export interface AITool {
  id: string;
  name: string;
  url: string;
  description: string;
  logo: string;
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
    color: "text-orange-600",
    tools: [
      {
        id: "chatgpt",
        name: "ChatGPT",
        url: "https://chat.openai.com",
        description: "OpenAI's powerful conversational AI that can help with writing, analysis, coding, and much more.",
        logo: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=100&h=100&fit=crop"
      },
      {
        id: "claude",
        name: "Claude",
        url: "https://claude.ai",
        description: "Anthropic's AI assistant that excels at analysis, writing, math, and coding with a focus on safety.",
        logo: "https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?w=100&h=100&fit=crop"
      },
      {
        id: "deepseek",
        name: "DeepSeek",
        url: "https://chat.deepseek.com",
        description: "Advanced AI chatbot with deep reasoning capabilities for complex problem-solving.",
        logo: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=100&h=100&fit=crop"
      },
      {
        id: "gemini",
        name: "Gemini",
        url: "https://gemini.google.com",
        description: "Google's most capable AI model with multimodal understanding and generation.",
        logo: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=100&h=100&fit=crop"
      },
      {
        id: "grok",
        name: "Grok",
        url: "https://grok.x.ai",
        description: "X's AI assistant with real-time knowledge and a rebellious personality.",
        logo: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=100&h=100&fit=crop"
      },
      {
        id: "meta-ai",
        name: "Meta AI",
        url: "https://www.meta.ai",
        description: "Meta's AI assistant integrated across Facebook, Instagram, and WhatsApp.",
        logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&h=100&fit=crop"
      },
      {
        id: "ms-copilot",
        name: "MS Copilot",
        url: "https://copilot.microsoft.com",
        description: "Microsoft's AI companion powered by GPT-4, integrated with Office and Windows.",
        logo: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=100&h=100&fit=crop"
      },
      {
        id: "perplexity",
        name: "Perplexity",
        url: "https://www.perplexity.ai",
        description: "AI-powered search engine that provides accurate answers with cited sources.",
        logo: "https://images.unsplash.com/photo-1614064548598-9f80845f2177?w=100&h=100&fit=crop"
      }
    ]
  },
  {
    id: "presentation",
    name: "AI PRESENTATION",
    color: "text-purple-600",
    tools: [
      {
        id: "beautiful-ai",
        name: "Beautiful.AI",
        url: "https://www.beautiful.ai",
        description: "Create stunning presentations with AI-powered design suggestions.",
        logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=100&h=100&fit=crop"
      },
      {
        id: "gamma",
        name: "Gamma",
        url: "https://gamma.app",
        description: "Generate beautiful presentations, documents, and web pages with AI.",
        logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop"
      },
      {
        id: "pitch",
        name: "Pitch",
        url: "https://pitch.com",
        description: "Collaborative presentation software with smart templates and workflows.",
        logo: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=100&h=100&fit=crop"
      },
      {
        id: "plus",
        name: "Plus",
        url: "https://www.plusdocs.com",
        description: "AI-powered presentation maker for Google Slides and PowerPoint.",
        logo: "https://images.unsplash.com/photo-1579389083395-4507e98b5e67?w=100&h=100&fit=crop"
      },
      {
        id: "popai",
        name: "PopAI",
        url: "https://www.popai.pro",
        description: "Create presentations from documents and ideas with AI assistance.",
        logo: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=100&h=100&fit=crop"
      },
      {
        id: "presentation-ai",
        name: "Presentation.Ai",
        url: "https://www.presentation.ai",
        description: "AI-first presentation builder with smart design and content generation.",
        logo: "https://images.unsplash.com/photo-1573166953836-06864dc50ee6?w=100&h=100&fit=crop"
      },
      {
        id: "slidesgo",
        name: "Slidesgo",
        url: "https://slidesgo.com",
        description: "Free presentation templates and AI tools for creating slides.",
        logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&h=100&fit=crop"
      },
      {
        id: "tome",
        name: "Tome",
        url: "https://tome.app",
        description: "AI-native format for telling stories with presentations and documents.",
        logo: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=100&h=100&fit=crop"
      }
    ]
  },
  {
    id: "coding",
    name: "AI CODING ASSISTANCE",
    color: "text-blue-600",
    tools: [
      {
        id: "askcodi",
        name: "Askcodi",
        url: "https://www.askcodi.com",
        description: "AI coding assistant that helps write, explain, and debug code.",
        logo: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=100&h=100&fit=crop"
      },
      {
        id: "codig a",
        name: "Codiga",
        url: "https://www.codiga.io",
        description: "Real-time static code analysis with AI-powered code review.",
        logo: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=100&h=100&fit=crop"
      },
      {
        id: "cursor",
        name: "Cursor",
        url: "https://cursor.sh",
        description: "AI-first code editor built for productivity with GPT-4 integration.",
        logo: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=100&h=100&fit=crop"
      },
      {
        id: "github-copilot",
        name: "GitHub Copilot",
        url: "https://github.com/features/copilot",
        description: "AI pair programmer that helps you write code faster and smarter.",
        logo: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=100&h=100&fit=crop"
      },
      {
        id: "qodo",
        name: "Qodo",
        url: "https://www.qodo.ai",
        description: "AI-powered code generation and testing platform.",
        logo: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=100&h=100&fit=crop"
      },
      {
        id: "replit",
        name: "Replit",
        url: "https://replit.com",
        description: "Online IDE with AI assistant for building and deploying software.",
        logo: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=100&h=100&fit=crop"
      },
      {
        id: "tabnine",
        name: "Tabnine",
        url: "https://www.tabnine.com",
        description: "AI code completion tool that learns from your codebase.",
        logo: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=100&h=100&fit=crop"
      }
    ]
  },
  {
    id: "email",
    name: "AI EMAIL ASSISTANCE",
    color: "text-cyan-600",
    tools: [
      {
        id: "clippit-ai",
        name: "Clippit.Ai",
        url: "https://www.clippit.ai",
        description: "AI-powered email writing and management assistant.",
        logo: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=100&h=100&fit=crop"
      },
      {
        id: "friday",
        name: "Friday",
        url: "https://www.heyfriday.ai",
        description: "AI writing assistant for emails, blogs, and marketing content.",
        logo: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=100&h=100&fit=crop"
      },
      {
        id: "mailmaestro",
        name: "Mailmaestro",
        url: "https://mailmaestro.com",
        description: "AI email assistant that helps you write better emails faster.",
        logo: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=100&h=100&fit=crop"
      },
      {
        id: "shortwave",
        name: "Shortwave",
        url: "https://www.shortwave.com",
        description: "Email client with AI-powered inbox management and writing.",
        logo: "https://images.unsplash.com/photo-1579275542618-a1dfed5f54ba?w=100&h=100&fit=crop"
      },
      {
        id: "superhuman",
        name: "Superhuman",
        url: "https://superhuman.com",
        description: "The fastest email experience with AI-powered features.",
        logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&h=100&fit=crop"
      }
    ]
  },
  {
    id: "image",
    name: "AI IMAGE GENERATION",
    color: "text-red-600",
    tools: [
      {
        id: "adobe-firefly",
        name: "Adobe Firefly",
        url: "https://firefly.adobe.com",
        description: "Adobe's AI image generator integrated with Creative Cloud.",
        logo: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=100&h=100&fit=crop"
      },
      {
        id: "dall-e",
        name: "DALL-E",
        url: "https://openai.com/dall-e-3",
        description: "OpenAI's image generation model that creates images from text.",
        logo: "https://images.unsplash.com/photo-1686191128892-c21655b0d2bf?w=100&h=100&fit=crop"
      },
      {
        id: "flux",
        name: "FLUX.1",
        url: "https://blackforestlabs.ai",
        description: "State-of-the-art image generation model by Black Forest Labs.",
        logo: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=100&h=100&fit=crop"
      },
      {
        id: "ideogram",
        name: "Ideogram",
        url: "https://ideogram.ai",
        description: "AI image generator that excels at text rendering in images.",
        logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&h=100&fit=crop"
      },
      {
        id: "midjourney",
        name: "Midjourney",
        url: "https://www.midjourney.com",
        description: "Leading AI art generator known for stunning, artistic images.",
        logo: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=100&h=100&fit=crop"
      },
      {
        id: "recraft",
        name: "Recraft",
        url: "https://www.recraft.ai",
        description: "AI design tool for creating brand-consistent graphics.",
        logo: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=100&h=100&fit=crop"
      },
      {
        id: "stable-diffusion",
        name: "StableDiffusion",
        url: "https://stability.ai",
        description: "Open-source AI image generation model for creative control.",
        logo: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=100&h=100&fit=crop"
      }
    ]
  },
  {
    id: "writing",
    name: "AI WRITING GENERATION",
    color: "text-teal-600",
    tools: [
      {
        id: "copy-ai",
        name: "Copy.Ai",
        url: "https://www.copy.ai",
        description: "AI copywriter for marketing, blog posts, and social content.",
        logo: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=100&h=100&fit=crop"
      },
      {
        id: "grammarly",
        name: "Grammarly",
        url: "https://www.grammarly.com",
        description: "AI writing assistant for grammar, spelling, and style.",
        logo: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=100&h=100&fit=crop"
      },
      {
        id: "jasper",
        name: "Jasper",
        url: "https://www.jasper.ai",
        description: "AI content platform for enterprise marketing and sales teams.",
        logo: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=100&h=100&fit=crop"
      },
      {
        id: "jotbot",
        name: "JotBot",
        url: "https://myjotbot.com",
        description: "AI writing assistant that mimics your writing style.",
        logo: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=100&h=100&fit=crop"
      },
      {
        id: "quarkle",
        name: "Quarkle",
        url: "https://www.quarkle.ai",
        description: "AI writing tool for creative and technical content.",
        logo: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=100&h=100&fit=crop"
      },
      {
        id: "quillbot",
        name: "Quillbot",
        url: "https://quillbot.com",
        description: "AI paraphrasing tool for rewriting and summarizing text.",
        logo: "https://images.unsplash.com/photo-1517842536056-48d1d48f7cfd?w=100&h=100&fit=crop"
      },
      {
        id: "rytr",
        name: "Rytr",
        url: "https://rytr.me",
        description: "AI writing assistant for creating high-quality content fast.",
        logo: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=100&h=100&fit=crop"
      },
      {
        id: "sudowrite",
        name: "Sudowrite",
        url: "https://www.sudowrite.com",
        description: "AI writing partner for novelists and screenwriters.",
        logo: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=100&h=100&fit=crop"
      },
      {
        id: "writesonic",
        name: "Writesonic",
        url: "https://writesonic.com",
        description: "AI writer for articles, blog posts, and marketing copy.",
        logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=100&fit=crop"
      }
    ]
  },
  {
    id: "spreadsheet",
    name: "AI SPREADSHEET",
    color: "text-green-600",
    tools: [
      {
        id: "bricks",
        name: "Bricks",
        url: "https://www.bricks.ai",
        description: "Spreadsheet with AI that creates visuals and insights.",
        logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop"
      },
      {
        id: "formula-bot",
        name: "Formula Bot",
        url: "https://formulabot.com",
        description: "AI that converts text to Excel formulas and SQL queries.",
        logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop"
      },
      {
        id: "gigasheet",
        name: "Gigasheet",
        url: "https://www.gigasheet.com",
        description: "Big data spreadsheet with AI-powered analysis.",
        logo: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=100&h=100&fit=crop"
      },
      {
        id: "rows-ai",
        name: "Rows AI",
        url: "https://rows.com",
        description: "Spreadsheet with AI assistant and data integrations.",
        logo: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=100&h=100&fit=crop"
      },
      {
        id: "sheet-ai",
        name: "SheetAI",
        url: "https://www.sheetai.app",
        description: "AI functions for Google Sheets to automate tasks.",
        logo: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=100&h=100&fit=crop"
      }
    ]
  },
  {
    id: "meeting",
    name: "AI MEETING NOTES",
    color: "text-pink-600",
    tools: [
      {
        id: "avoma",
        name: "Avoma",
        url: "https://www.avoma.com",
        description: "AI meeting assistant for note-taking and conversation intelligence.",
        logo: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=100&h=100&fit=crop"
      },
      {
        id: "equal-time",
        name: "Equal Time",
        url: "https://www.equaltime.io",
        description: "AI that ensures balanced speaking time in meetings.",
        logo: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=100&h=100&fit=crop"
      },
      {
        id: "fathom",
        name: "Fathom",
        url: "https://fathom.video",
        description: "Free AI meeting recorder and note-taker for video calls.",
        logo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop"
      },
      {
        id: "fellow-app",
        name: "Fellow.App",
        url: "https://www.fellow.app",
        description: "AI meeting management for agendas, notes, and action items.",
        logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&h=100&fit=crop"
      },
      {
        id: "fireflies",
        name: "Fireflies",
        url: "https://fireflies.ai",
        description: "AI notetaker that transcribes and analyzes meetings.",
        logo: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=100&h=100&fit=crop"
      },
      {
        id: "krisp",
        name: "Krisp",
        url: "https://krisp.ai",
        description: "AI-powered noise cancellation and meeting transcription.",
        logo: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?w=100&h=100&fit=crop"
      },
      {
        id: "otter",
        name: "Otter",
        url: "https://otter.ai",
        description: "AI meeting transcription and collaboration tool.",
        logo: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=100&h=100&fit=crop"
      }
    ]
  },
  {
    id: "scheduling",
    name: "AI SCHEDULING",
    color: "text-indigo-600",
    tools: [
      {
        id: "calendly",
        name: "Calendly",
        url: "https://calendly.com",
        description: "Automated scheduling tool for meetings and appointments.",
        logo: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=100&h=100&fit=crop"
      },
      {
        id: "clockwise",
        name: "Clockwise",
        url: "https://www.getclockwise.com",
        description: "AI calendar assistant that optimizes your schedule.",
        logo: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=100&h=100&fit=crop"
      },
      {
        id: "motion",
        name: "Motion",
        url: "https://www.usemotion.com",
        description: "AI calendar and project manager that auto-schedules tasks.",
        logo: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=100&h=100&fit=crop"
      },
      {
        id: "reclaim-ai",
        name: "Reclaim AI",
        url: "https://reclaim.ai",
        description: "AI scheduling for habits, tasks, and meetings in your calendar.",
        logo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
      },
      {
        id: "taskade",
        name: "Taskade",
        url: "https://www.taskade.com",
        description: "AI-powered workspace for tasks, notes, and collaboration.",
        logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=100&h=100&fit=crop"
      },
      {
        id: "trevor-ai",
        name: "Trevor AI",
        url: "https://trevorai.com",
        description: "AI task scheduling that plans your perfect day.",
        logo: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=100&h=100&fit=crop"
      }
    ]
  },
  {
    id: "video",
    name: "AI VIDEO GENERATION",
    color: "text-purple-600",
    tools: [
      {
        id: "descript",
        name: "Descript",
        url: "https://www.descript.com",
        description: "Video editor with AI transcription and voice cloning.",
        logo: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=100&h=100&fit=crop"
      },
      {
        id: "heiper-ai",
        name: "Heiper AI",
        url: "https://www.heiper.ai",
        description: "AI video creation platform for marketing content.",
        logo: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=100&h=100&fit=crop"
      },
      {
        id: "invideo-ai",
        name: "InVideo AI",
        url: "https://invideo.io",
        description: "Create videos from text prompts with AI automation.",
        logo: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=100&h=100&fit=crop"
      },
      {
        id: "kling",
        name: "Kling",
        url: "https://klingai.com",
        description: "Advanced AI video generation from text and images.",
        logo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=100&h=100&fit=crop"
      },
      {
        id: "krea-ai",
        name: "Krea AI",
        url: "https://www.krea.ai",
        description: "Real-time AI image and video generation platform.",
        logo: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=100&h=100&fit=crop"
      },
      {
        id: "ltx-studio",
        name: "LTX Studio",
        url: "https://ltx.studio",
        description: "AI filmmaking platform for complete video production.",
        logo: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=100&h=100&fit=crop"
      },
      {
        id: "luma-ai",
        name: "Luma AI",
        url: "https://lumalabs.ai",
        description: "AI-powered 3D capture and video generation.",
        logo: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=100&h=100&fit=crop"
      },
      {
        id: "pika-ai",
        name: "Pika AI",
        url: "https://pika.art",
        description: "Text-to-video AI that creates and edits videos.",
        logo: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=100&h=100&fit=crop"
      },
      {
        id: "runway",
        name: "Runway",
        url: "https://runwayml.com",
        description: "AI-powered video editing and generation suite.",
        logo: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=100&h=100&fit=crop"
      },
      {
        id: "sora",
        name: "Sora",
        url: "https://openai.com/sora",
        description: "OpenAI's video generation model creating realistic scenes.",
        logo: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=100&h=100&fit=crop"
      }
    ]
  },
  {
    id: "knowledge",
    name: "AI KNOWLEDGE MANAGEMENT",
    color: "text-red-600",
    tools: [
      {
        id: "mem",
        name: "Mem",
        url: "https://get.mem.ai",
        description: "AI-powered note-taking that organizes itself.",
        logo: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=100&h=100&fit=crop"
      },
      {
        id: "notion",
        name: "Notion",
        url: "https://www.notion.so",
        description: "All-in-one workspace with AI writing and organization.",
        logo: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=100&h=100&fit=crop"
      },
      {
        id: "tettra",
        name: "Tettra",
        url: "https://tettra.com",
        description: "AI-powered internal knowledge base for teams.",
        logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&h=100&fit=crop"
      }
    ]
  },
  {
    id: "workflow",
    name: "AI WORKFLOW AUTOMATION",
    color: "text-violet-600",
    tools: [
      {
        id: "integrately",
        name: "Integrately",
        url: "https://integrately.com",
        description: "Automation platform connecting 1000+ apps with AI.",
        logo: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=100&h=100&fit=crop"
      },
      {
        id: "make",
        name: "Make",
        url: "https://www.make.com",
        description: "Visual workflow automation with AI integrations.",
        logo: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=100&h=100&fit=crop"
      },
      {
        id: "monday-com",
        name: "Monday.Com",
        url: "https://monday.com",
        description: "Work OS with AI-powered project management.",
        logo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=100&h=100&fit=crop"
      },
      {
        id: "n8n",
        name: "N8n",
        url: "https://n8n.io",
        description: "Open-source workflow automation with AI nodes.",
        logo: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=100&h=100&fit=crop"
      },
      {
        id: "wrike",
        name: "Wrike",
        url: "https://www.wrike.com",
        description: "Project management platform with AI automation.",
        logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=100&h=100&fit=crop"
      },
      {
        id: "zapier",
        name: "Zapier",
        url: "https://zapier.com",
        description: "Connect and automate apps with AI-powered workflows.",
        logo: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=100&h=100&fit=crop"
      }
    ]
  },
  {
    id: "graphic",
    name: "AI GRAPHIC DESIGN",
    color: "text-amber-600",
    tools: [
      {
        id: "autodraw",
        name: "AutoDraw",
        url: "https://www.autodraw.com",
        description: "Google's AI that turns sketches into professional drawings.",
        logo: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=100&h=100&fit=crop"
      },
      {
        id: "canva",
        name: "Canva",
        url: "https://www.canva.com",
        description: "Design platform with AI-powered tools and templates.",
        logo: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=100&h=100&fit=crop"
      },
      {
        id: "design-com",
        name: "Design.Com",
        url: "https://www.design.com",
        description: "AI logo maker and brand identity designer.",
        logo: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=100&h=100&fit=crop"
      },
      {
        id: "framer",
        name: "Framer",
        url: "https://www.framer.com",
        description: "Web design tool with AI-powered site generation.",
        logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop"
      },
      {
        id: "microsoft-designer",
        name: "Microsoft Designer",
        url: "https://designer.microsoft.com",
        description: "Microsoft's AI design tool for social media and presentations.",
        logo: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=100&h=100&fit=crop"
      },
      {
        id: "uizard",
        name: "Uizard",
        url: "https://uizard.io",
        description: "AI-powered UI design tool that generates interfaces.",
        logo: "https://images.unsplash.com/photo-1545665225-b23b99e4d45e?w=100&h=100&fit=crop"
      }
    ]
  },
  {
    id: "data-viz",
    name: "AI DATA VISUALIZATION",
    color: "text-blue-600",
    tools: [
      {
        id: "deckpilot",
        name: "Deckpilot",
        url: "https://www.deckpilot.com",
        description: "AI-powered data visualization for presentations.",
        logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop"
      },
      {
        id: "flourish",
        name: "Flourish",
        url: "https://flourish.studio",
        description: "Create stunning data visualizations and stories.",
        logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop"
      },
      {
        id: "julius",
        name: "Julius",
        url: "https://julius.ai",
        description: "AI data analyst that creates insights and visualizations.",
        logo: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=100&h=100&fit=crop"
      },
      {
        id: "visme",
        name: "Visme",
        url: "https://www.visme.co",
        description: "Visual content creation with data visualization tools.",
        logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=100&h=100&fit=crop"
      },
      {
        id: "zing-data",
        name: "Zing Data",
        url: "https://getzingdata.com",
        description: "Mobile-first business intelligence with AI insights.",
        logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop"
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

