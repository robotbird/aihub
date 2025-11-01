# Vercel 部署配置检查清单

## 第一步：项目导入配置

### ✅ 必须检查的项目：

1. **Repository (仓库)**
   - 应该显示: `robotbird/aihub`
   - 分支: `main`
   - ✅ 正确

2. **Project Name (项目名称)**
   - 当前: `aihub`
   - ✅ 可以保留或改为更明确的名称，如 `aihub-promptpack-net`

3. **Framework Preset (框架预设)**
   - 必须选择: **Next.js** ✅
   - 自动检测应该是 Next.js

4. **Root Directory (根目录)**
   - 必须设置为: `./` (当前目录)
   - ✅ 正确

---

## 第二步：Build and Output Settings (构建和输出设置)

点击 "Build and Output Settings" 展开，检查以下配置：

### ✅ Build Command (构建命令)
```
npm run build
```
或者
```
npm ci && npm run build
```
- ✅ 默认应该是 `npm run build`
- 如果显示其他内容，改为 `npm run build`

### ✅ Output Directory (输出目录)
- ❌ **必须留空** 或 **删除这个字段**
- Next.js 14 App Router **不需要** Output Directory
- Vercel 会自动处理 Next.js 的输出
- ❌ **不要**设置为 `out`、`.next` 或任何其他值

### ✅ Install Command (安装命令)
```
npm install
```
或者更好的选择：
```
npm ci
```
- ✅ 默认 `npm install` 可以保留
- ✅ 推荐使用 `npm ci`（更快速、更可靠）

### ✅ Node.js Version (Node.js 版本)
- 推荐: **20.x** (根据 package.json 中的 @types/node: ^20)
- 或者: **18.x** (LTS)
- ✅ 可以保留默认值，Vercel 会自动检测

---

## 第三步：Environment Variables (环境变量)

点击 "Environment Variables" 展开，检查是否需要添加：

### 推荐的环境变量（可选）：

1. **NEXT_PUBLIC_APP_URL** (如果需要)
   - 值: `https://aihub.promptpack.net` 或您的实际域名
   - 用途: SEO metadata、sitemap、robots.txt

### ⚠️ 当前不需要的环境变量：
- 项目中没有使用敏感 API 密钥
- 数据都在本地文件 `data/ai-tools.ts` 中

---

## 第四步：部署前最终检查

### ✅ 代码检查清单：

1. ✅ **app/page.tsx** - 主页存在且没有错误
2. ✅ **app/tool/[id]/page.tsx** - 有 `dynamicParams = true`
3. ✅ **next.config.mjs** - 配置文件正确
4. ✅ **package.json** - 包含所有必要的依赖
5. ✅ **build 命令本地测试通过**

---

## 第五步：点击 "Deploy" 后的检查

### 部署过程中的关键检查点：

1. **构建日志检查**
   ```
   应该看到：
   ✓ Compiled successfully
   ✓ Linting and checking validity of types
   ✓ Collecting page data
   ✓ Generating static pages (X/X)
   ```

2. **路由生成检查**
   ```
   应该看到：
   ┌ ○ /                                     (Static)
   └ ● /tool/[id]                            (SSG)
       ├ /tool/chatgpt
       ├ /tool/claude
       └ [+X more paths]
   ```

3. **构建成功标志**
   ```
   ✓ Build Completed
   ```

---

## 常见问题排查

### ❌ 如果仍然看到 404 NOT_FOUND：

1. **检查构建日志**
   - 在 Vercel Dashboard → Deployments → 点击最新部署 → Logs
   - 查找错误信息

2. **清除 Vercel 缓存**
   - Settings → General → Clear Build Cache
   - 重新部署

3. **检查根目录**
   - 确保 Root Directory 是 `./`
   - 不是 `/` 或其他路径

4. **验证 Next.js 版本**
   - 确保使用 Next.js 14.x
   - 检查 package.json 中的版本

5. **检查环境变量**
   - 如果设置了 `NEXT_PUBLIC_APP_URL`，确保值是完整的 URL（包含 https://）

---

## 推荐配置截图检查点

### 截图 1：基本信息页面
- ✅ Framework Preset: Next.js
- ✅ Root Directory: `./`
- ✅ Project Name: `aihub` (或您选择的名字)

### 截图 2：Build and Output Settings
- ✅ Build Command: `npm run build`
- ✅ Output Directory: **留空**（重要！）
- ✅ Install Command: `npm install` 或 `npm ci`

### 截图 3：Environment Variables
- ✅ 可以留空（除非需要 NEXT_PUBLIC_APP_URL）

---

## 部署后的验证

部署成功后，访问：
- 主页: `https://aihub-promptpack-net.vercel.app`（或您的自定义域名）
- 工具页面: `https://aihub-promptpack-net.vercel.app/tool/chatgpt`

应该看到：
- ✅ 主页正常显示（不再是 404）
- ✅ 工具详情页正常显示

