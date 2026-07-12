export async function onRequest(context) {
  const {request, env} = context;
  const url = new URL(request.url);
  const h = {'Content-Type':'application/json','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'GET,POST,OPTIONS','Access-Control-Allow-Headers':'*'};

  if (request.method === 'OPTIONS') return new Response(null, {headers:h});
  if (request.method !== 'GET' && request.method !== 'POST') return new Response(JSON.stringify({error:'Method not allowed'}), {status:405, headers:h});

  const page = url.searchParams.get('page') || 'home';

  if (request.method === 'GET') {
    const val = await env.COMMENTS.get(page, 'json');
    return new Response(JSON.stringify({comments:val||[], page:page}), {headers:h});
  }

  if (request.method === 'POST') {
    try {
      const body = await request.json();
      if (!body.text || !body.author) return new Response(JSON.stringify({error:'Missing text or author'}), {status:400, headers:h});
      const existing = await env.COMMENTS.get(page, 'json') || [];
      existing.push({id:Date.now().toString(36)+Math.random().toString(36).slice(2,6), author:body.author, text:body.text, time:new Date().toISOString()});
      await env.COMMENTS.put(page, JSON.stringify(existing));
      return new Response(JSON.stringify({ok:true, comments:existing}), {headers:h});
    } catch(e) {
      return new Response(JSON.stringify({error:e.message}), {status:400, headers:h});
    }
  }
}
