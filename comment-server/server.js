// Genshin Wiki 评论服务器 - 极简版
// 数据存本地 JSON 文件，用 ngrok 暴露到公网

const http = require('http');
const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'comments.json');
const PORT = 3456;

// 读取数据
function readData() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    }
  } catch(e) {}
  return {};
}

// 写入数据
function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
}

// 获取当前时间
function now() {
  return new Date().toISOString();
}

// 随机 ID
function makeId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

const server = http.createServer(function(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  // 解析 URL
  const url = new URL(req.url, 'http://localhost:' + PORT);
  const pathname = url.pathname;

  // 只有 /api/comments 这一个端点
  if (pathname !== '/api/comments') {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found' }));
    return;
  }

  const page = url.searchParams.get('page') || 'forum';

  if (req.method === 'GET') {
    const data = readData();
    const comments = data[page] || [];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ comments: comments, page: page }));
    return;
  }

  if (req.method === 'POST') {
    let body = '';
    req.on('data', function(chunk) { body += chunk; });
    req.on('end', function() {
      try {
        const input = JSON.parse(body);
        if (!input.author || !input.text) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Missing text or author' }));
          return;
        }

        const data = readData();
        if (!data[page]) data[page] = [];

        data[page].push({
          id: makeId(),
          author: input.author,
          text: input.text,
          time: now()
        });

        writeData(data);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: true, comments: data[page] }));
      } catch(e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid JSON' }));
      }
    });
    return;
  }

  res.writeHead(405, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Method not allowed' }));
});

server.listen(PORT, function() {
  console.log('✅ Comment server running on http://localhost:' + PORT);
  console.log('   GET/POST /api/comments?page=forum');
});
