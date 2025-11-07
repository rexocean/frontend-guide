// app.js
const express = require('express');
const app = express();

// 解析 JSON 请求体
app.use(express.json());

// 定义路由
app.get('/', (req, res) => res.send('Hello Express!'));

app.post('/user', (req, res) => {
    res.json({ data: req.body });
});

// 启动服务
app.listen(3000, () => console.log('Server running at http://localhost:3000'));
