const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(express.json());
app.use(express.static('public'));

// 智谱 AI 配置
const AI_CONFIG = {
  url: "https://open.bigmodel.cn/api/paas/v4/chat/completions",
  key: "e46e78d133a649e5829fd6063f29d783.q7adVu8myNA3zGPi",
  model: "glm-4-flash"  // 免费高速版，也可以换成 glm-4、glm-3-turbo
};

app.post('/api/ai', async (req, res) => {
  const { prompt } = req.body;

  try {
    const resp = await fetch(AI_CONFIG.url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${AI_CONFIG.key}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: AI_CONFIG.model,
        messages: [
          { role: "user", content: prompt }
        ]
      })
    });

    const data = await resp.json();
    const answer = data.choices?.[0]?.message?.content || '未返回内容';
    res.json({ answer });

  } catch (e) {
    res.json({ answer: '请求智谱AI失败' });
  }
});

app.listen(3000, () => {
  console.log('服务已启动：http://localhost:3000');
});