# 历史档案馆设计 · Archive Museum

> 基于 Figma Make 生成的 React + Vite + Tailwind CSS 档案馆项目，接入通义千问 API。

## 预览

部署后访问：https://chaflin-evan.github.io/Archive/

## 本地运行

```bash
npm install
npm run dev
```

本地开发时，Vite 会自动代理 DashScope API 请求，无需额外配置。

## 构建

```bash
npm run build
```

构建产物输出到 `dist/` 目录。

## 自动部署

每次推送 `main` 分支，GitHub Actions 会自动构建并部署到 GitHub Pages 的 `gh-pages` 分支。

## AI 功能与 CORS 代理

项目集成了通义千问 API，但由于浏览器 CORS 限制，生产环境需要通过代理访问 DashScope API。

### 方案一：Cloudflare Workers 代理（推荐）

1. 打开 https://workers.cloudflare.com 创建新 Worker
2. 复制 `proxy/cloudflare-worker.ts` 的内容粘贴到 Worker 编辑器
3. 点击 Deploy，获得 Worker URL（如 `https://your-worker.your-subdomain.workers.dev`）
4. 在网站 **设置** 页面，将 **API ENDPOINT** 改为：
   ```
   https://your-worker.your-subdomain.workers.dev/compatible-mode/v1/chat/completions
   ```

### 方案二：自建代理

如果你有服务器，可以部署 `proxy/cloudflare-worker.ts` 作为反向代理，逻辑相同。

### 配置 API Key

1. 在[阿里云 DashScope 控制台](https://dashscope.console.aliyun.com/)获取 API Key
2. 在网站 **设置** 页面输入 API Key
3. 选择模型（qwen-max / qwen-plus / qwen-turbo / qwen-long）
4. 保存后，在 **报告** 页面即可使用 AI 生成功能

## 原始设计

Figma 原稿：https://www.figma.com/design/epvHlwAb4GYhim3NBsHKPw/
