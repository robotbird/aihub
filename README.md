# AI Productivity Tools 导航站

一个高质感的AI工具导航网站，收录了各类AI生产力工具。

## 功能特点

- 🎨 像素级还原设计稿，高质感UI设计
- 📱 完美适配PC和移动端
- 🚀 基于Next.js 14和React 18构建
- 💅 使用Tailwind CSS和shadcn/ui组件库
- 🔍 收录100+优质AI工具
- 🎯 分类清晰，包含13大类别
- 🌐 点击工具名称直接跳转官网（新窗口打开）
- 📄 点击Logo查看工具详情页

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **UI组件**: shadcn/ui + Radix UI
- **图标**: Lucide React
- **图片**: Unsplash

## 快速开始

### 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 运行开发服务器

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看效果。

### 构建生产版本

```bash
npm run build
npm start
```

## 项目结构

```
├── app/                    # Next.js App Router 页面
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页（工具导航）
│   ├── tool/[id]/        # 工具详情页
│   └── globals.css        # 全局样式
├── components/            # React 组件
│   └── ui/               # shadcn/ui 组件
├── data/                  # 数据文件
│   └── ai-tools.ts       # AI工具数据
├── lib/                   # 工具函数
│   └── utils.ts          # 工具函数
└── public/               # 静态资源
```

## AI工具分类

1. **AI Chatbots** - ChatGPT, Claude, Gemini等
2. **AI Presentation** - Gamma, Beautiful.AI等
3. **AI Coding Assistance** - Cursor, GitHub Copilot等
4. **AI Email Assistance** - Superhuman, Shortwave等
5. **AI Image Generation** - Midjourney, DALL-E等
6. **AI Writing Generation** - Jasper, Copy.AI等
7. **AI Spreadsheet** - Bricks, Formula Bot等
8. **AI Meeting Notes** - Otter, Fireflies等
9. **AI Scheduling** - Motion, Reclaim AI等
10. **AI Video Generation** - Runway, Sora等
11. **AI Knowledge Management** - Notion, Mem等
12. **AI Workflow Automation** - Zapier, Make等
13. **AI Graphic Design** - Canva, Framer等
14. **AI Data Visualization** - Julius, Flourish等

## 设计特点

- 采用米白色背景 (#e8e6e1)，营造优雅质感
- 橙色强调色 (#d97642)，突出品牌特色
- 简约的连接线设计，清晰的信息层级
- 悬停动效，提升交互体验
- 无滚动条设计，保持页面整洁

## License

MIT License

