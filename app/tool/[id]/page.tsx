import { getToolById, allTools, aiToolsData } from "@/data/ai-tools";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Globe } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// 生成静态路径
export async function generateStaticParams() {
  return allTools.map((tool) => ({
    id: tool.id,
  }));
}

// 生成动态metadata（SEO关键）
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const tool = getToolById(params.id);

  if (!tool) {
    return {
      title: "Tool Not Found",
    };
  }

  return {
    title: `${tool.name} - AI Productivity Tools`,
    description: tool.description,
    keywords: [tool.name, "AI tools", "productivity", "artificial intelligence"],
    openGraph: {
      title: `${tool.name} - AI Productivity Tools`,
      description: tool.description,
      siteName: "AI Productivity Tools",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${tool.name} - AI Productivity Tools`,
      description: tool.description,
    },
  };
}

export default function ToolDetailPage({ params }: { params: { id: string } }) {
  const tool = getToolById(params.id);
  
  if (!tool) {
    notFound();
  }

  // 获取同类别工具
  const categoryTools = aiToolsData.find(cat => cat.tools.some(t => t.id === tool.id))?.tools || [];

  return (
    <main className="min-h-screen bg-[#e8e6e1]">
      {/* Container with max width and padding */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <header className="pt-6 md:pt-8 pb-4 md:pb-6">
          <Link href="/">
            <Button variant="ghost" className="mb-4 md:mb-6 hover:bg-gray-200 text-sm md:text-base">
              <ArrowLeft className="w-3 h-3 md:w-4 md:h-4 mr-2" />
              Back to All Tools
            </Button>
          </Link>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center tracking-tight">
            <span className="text-[#d97642]">AI</span>{" "}
            <span className="text-[#2c2c2c]">PRODUCTIVITY TOOLS</span>
          </h1>
        </header>

        {/* Tool Detail Card */}
        <div className="pb-12 md:pb-16 flex items-center justify-center">
        <article className="max-w-2xl w-full bg-white rounded-xl md:rounded-2xl shadow-xl p-6 md:p-12 border border-gray-200">
          {/* Logo */}
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl md:rounded-3xl overflow-hidden border-2 md:border-4 border-gray-100 shadow-lg bg-white flex items-center justify-center p-4">
              <img
                src={`https://www.google.com/s2/favicons?domain=${new URL(tool.url).hostname}&sz=256`}
                alt={`${tool.name} logo`}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Tool Name */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-3 md:mb-4">
            {tool.name}
          </h2>

          {/* Website URL */}
          <div className="flex items-center justify-center gap-2 text-gray-600 mb-6 md:mb-8">
            <Globe className="w-3 h-3 md:w-4 md:h-4" />
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-xs md:text-sm hover:text-[#d97642] transition-colors break-all"
            >
              {tool.url.replace(/^https?:\/\//, "")}
            </a>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center mb-8 md:mb-10">
            {tool.description}
          </p>

          {/* Visit Button */}
          <div className="flex justify-center">
            <a href={tool.url} target="_blank" rel="noopener noreferrer nofollow">
              <Button
                size="lg"
                className="bg-[#d97642] hover:bg-[#c26635] text-white font-semibold px-6 py-5 md:px-8 md:py-6 text-base md:text-lg rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Visit Website
                <ExternalLink className="w-4 h-4 md:w-5 md:h-5 ml-2" />
              </Button>
            </a>
          </div>

          {/* Related Tools */}
          {categoryTools.length > 1 && (
            <nav className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200">
              <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-3 md:mb-4">
                Related AI Tools
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                {categoryTools
                  .filter((t) => t.id !== tool.id)
                  .slice(0, 4)
                  .map((relatedTool) => (
                    <Link
                      key={relatedTool.id}
                      href={`/tool/${relatedTool.id}`}
                      className="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
                    >
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 p-1">
                        <img
                          src={`https://www.google.com/s2/favicons?domain=${new URL(relatedTool.url).hostname}&sz=128`}
                          alt={`${relatedTool.name} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-xs md:text-sm font-medium text-gray-700 hover:text-[#d97642]">
                        {relatedTool.name}
                      </span>
                    </Link>
                  ))}
              </div>
            </nav>
          )}
        </article>
        </div>

        {/* Footer */}
        <footer className="py-8 md:py-10 text-center text-xs md:text-sm text-gray-600 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span>Powered by</span>
            <a 
              href="https://promptpack.net" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold text-[#d97642] hover:text-[#c26635] transition-colors inline-flex items-center gap-1 group"
            >
              PromptPack.net
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
          <p>AI Productivity Tools © 2025</p>
        </footer>
      </div>
    </main>
  );
}
