// Genshin Wiki Comment Worker
// 上传到 Cloudflare Dashboard → Workers & Pages → Create Worker
// 需要绑定 KV: COMMENTS (c8fb338111004ef697b831ce353fcb47)

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // KV 健康检查
    if (path === '/api/ping') {
      return new Response(JSON.stringify({ ok: true }), {
        headers: { 'Content-Type': 'application/json', ...corsHeaders }
      });
    }

    // 评论 API
    if (path === '/api/comments') {
      const page = url.searchParams.get('page') || 'forum';

      if (request.method === 'GET') {
        const val = await env.COMMENTS.get(page, 'json');
        return new Response(JSON.stringify({ comments: val || [], page }), {
          headers: { 'Content-Type': 'application/json', ...corsHeaders }
        });
      }

      if (request.method === 'POST') {
        try {
          const body = await request.json();
          if (!body.text || !body.author) {
            return new Response(JSON.stringify({ error: 'Missing text or author' }), {
              status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders }
            });
          }
          const existing = (await env.COMMENTS.get(page, 'json')) || [];
          existing.push({
            id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
            author: body.author,
            text: body.text,
            time: new Date().toISOString()
          });
          await env.COMMENTS.put(page, JSON.stringify(existing));
          return new Response(JSON.stringify({ ok: true, comments: existing }), {
            headers: { 'Content-Type': 'application/json', ...corsHeaders }
          });
        } catch (e) {
          return new Response(JSON.stringify({ error: e.message }), {
            status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders }
          });
        }
      }

      return new Response('Method not allowed', { status: 405 });
    }

    return new Response('Not found', { status: 404 });
  }
}
