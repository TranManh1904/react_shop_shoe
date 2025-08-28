const express = require('express');
const path = require('path');

const app = express();
const HOST = '127.0.0.1';
const PORT = 3000;

// Phục vụ toàn bộ file tĩnh trong thư mục /public (CSS, ảnh, JS…)
app.use(express.static(path.join(__dirname, 'public')));

// Trang chủ → trả về public/index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// (Tùy chọn) Route healthcheck
app.get('/health', (req, res) => res.json({ ok: true }));

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
