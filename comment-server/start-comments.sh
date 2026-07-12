#!/bin/bash
# Genshin Wiki 评论区启动器
# 双击运行即可开启评论区服务

echo "========================================"
echo "  Genshin Wiki 评论区服务启动中..."
echo "========================================"

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

# 1. 启动评论服务器
echo "[1/2] 启动评论服务器..."
cd "$SCRIPT_DIR/comment-server"
node server.js &
SERVER_PID=$!
sleep 1

# 检测是否启动成功
if curl -s -o /dev/null -w '%{http_code}' http://localhost:3456/api/comments 2>/dev/null | grep -q 200; then
    echo "  ✅ 评论服务器已启动! (端口 3456)"
else
    echo "  ❌ 评论服务器启动失败!"
    exit 1
fi

# 2. 建立公网隧道
echo "[2/2] 建立公网隧道..."
ssh -o StrictHostKeyChecking=no -o ServerAliveInterval=30 -R 80:localhost:3456 nokey@localhost.run 2>/dev/null &
SSH_PID=$!
sleep 5

# 获取公网地址
TUNNEL_URL=$(curl -s http://127.0.0.1:4040/api/tunnels 2>/dev/null | grep -o 'https://[a-z0-9]*\.lhr\.life' | head -1)
if [ -n "$TUNNEL_URL" ]; then
    echo "  ✅ 公网地址: $TUNNEL_URL"
    echo "  ✅ API 地址: $TUNNEL_URL/api/comments"
else
    echo "  ⚠️  公网地址获取失败，请检查网络"
fi

echo ""
echo "========================================"
echo "  评论区已开启！"
echo "  关闭此窗口即可关闭评论区服务"
echo "========================================"

# 保持脚本运行
wait
