export async function onRequest(context) {
  const {request, env} = context;
  const h = {'Content-Type':'application/json','Access-Control-Allow-Origin':'*','Access-Control-Allow-Headers':'*'};
  if (request.method === 'OPTIONS') return new Response(null, {headers:h});

  const token = request.headers.get('Authorization')?.replace('Bearer ','');
  if (!token) return new Response(JSON.stringify({member:false}), {headers:h});

  const fid = await env.TOKENS.get(token);
  if (!fid) return new Response(JSON.stringify({member:false}), {headers:h});

  const info = await env.MEMBERS.get(fid, 'json');
  return new Response(JSON.stringify({member:!!info, info:info||null}), {headers:h});
}
