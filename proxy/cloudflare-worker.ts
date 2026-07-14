/**
 * Cloudflare Worker — DashScope CORS Proxy
 *
 * Deploy this file to Cloudflare Workers (free tier) to proxy API requests
 * from the browser to DashScope, adding the required CORS headers.
 *
 * Steps:
 *  1. Go to https://workers.cloudflare.com and create a new Worker.
 *  2. Paste the contents of this file and click Deploy.
 *     You'll get a URL like: https://your-worker.your-subdomain.workers.dev
 *  3. In the app Settings page, set API Endpoint to:
 *       https://your-worker.your-subdomain.workers.dev/compatible-mode/v1/chat/completions
 *
 * The worker forwards all headers (including Authorization) to DashScope
 * and adds CORS headers so the browser accepts the response.
 */

const DASHSCOPE_BASE = 'https://dashscope.aliyuncs.com';

const CORS_HEADERS: Record<string, string> = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, Accept',
  'Access-Control-Max-Age': '86400',
};

export default {
  async fetch(request: Request): Promise<Response> {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    const url = new URL(request.url);
    const targetUrl = DASHSCOPE_BASE + url.pathname + url.search;

    const proxied = new Request(targetUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body,
    });

    const response = await fetch(proxied);

    const newHeaders = new Headers(response.headers);
    for (const [key, value] of Object.entries(CORS_HEADERS)) {
      newHeaders.set(key, value);
    }

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders,
    });
  },
};
