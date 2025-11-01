#!/bin/bash

echo "🔍 SEO验证脚本"
echo "================================"
echo ""

# 颜色定义
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 检查服务器是否运行
echo "1. 检查开发服务器..."
if curl -s http://localhost:3000 > /dev/null; then
    echo -e "${GREEN}✓${NC} 开发服务器运行正常"
else
    echo -e "${RED}✗${NC} 开发服务器未运行，请先运行: npm run dev"
    exit 1
fi

echo ""
echo "2. 检查核心SEO文件..."

# 检查 sitemap
echo -n "  - Sitemap.xml: "
if curl -s http://localhost:3000/sitemap.xml | grep -q "urlset"; then
    echo -e "${GREEN}✓${NC}"
else
    echo -e "${RED}✗${NC}"
fi

# 检查 robots.txt
echo -n "  - Robots.txt: "
if curl -s http://localhost:3000/robots.txt | grep -q "User-agent"; then
    echo -e "${GREEN}✓${NC}"
else
    echo -e "${RED}✗${NC}"
fi

# 检查 manifest
echo -n "  - Manifest: "
if curl -s http://localhost:3000/manifest.webmanifest | grep -q "name"; then
    echo -e "${GREEN}✓${NC}"
else
    echo -e "${RED}✗${NC}"
fi

# 检查 icon
echo -n "  - Icon.svg: "
if curl -s http://localhost:3000/icon.svg | grep -q "svg"; then
    echo -e "${GREEN}✓${NC}"
else
    echo -e "${RED}✗${NC}"
fi

echo ""
echo "3. 检查首页SEO..."

# 获取首页HTML
homepage=$(curl -s http://localhost:3000)

echo -n "  - Meta title: "
if echo "$homepage" | grep -q "<title>"; then
    echo -e "${GREEN}✓${NC}"
else
    echo -e "${RED}✗${NC}"
fi

echo -n "  - Meta description: "
if echo "$homepage" | grep -q "meta name=\"description\""; then
    echo -e "${GREEN}✓${NC}"
else
    echo -e "${RED}✗${NC}"
fi

echo -n "  - OpenGraph tags: "
if echo "$homepage" | grep -q "property=\"og:"; then
    echo -e "${GREEN}✓${NC}"
else
    echo -e "${RED}✗${NC}"
fi

echo -n "  - JSON-LD: "
if echo "$homepage" | grep -q "application/ld+json"; then
    echo -e "${GREEN}✓${NC}"
else
    echo -e "${RED}✗${NC}"
fi

echo -n "  - Lang attribute: "
if echo "$homepage" | grep -q "lang=\"en\""; then
    echo -e "${GREEN}✓${NC} (en)"
else
    echo -e "${YELLOW}⚠${NC}"
fi

echo ""
echo "4. 检查工具详情页SEO..."

# 获取ChatGPT页面
toolpage=$(curl -s http://localhost:3000/tool/chatgpt)

echo -n "  - Dynamic title: "
if echo "$toolpage" | grep -q "ChatGPT"; then
    echo -e "${GREEN}✓${NC}"
else
    echo -e "${RED}✗${NC}"
fi

echo -n "  - Canonical URL: "
if echo "$toolpage" | grep -q "canonical"; then
    echo -e "${GREEN}✓${NC}"
else
    echo -e "${RED}✗${NC}"
fi

echo ""
echo "================================"
echo "✅ SEO验证完成！"
echo ""
echo "📋 下一步:"
echo "  1. 访问 http://localhost:3000 查看网站"
echo "  2. 查看源代码确认metadata"
echo "  3. 使用浏览器开发工具检查SEO标签"
echo ""
echo "🔗 在线验证工具:"
echo "  - Google Rich Results: https://search.google.com/test/rich-results"
echo "  - Facebook Debugger: https://developers.facebook.com/tools/debug/"
echo "  - Twitter Validator: https://cards-dev.twitter.com/validator"
echo "  - Lighthouse: Chrome DevTools > Lighthouse"
echo ""

