const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// Kết nối đến MongoDB
mongoose.connect('mongodb://localhost/hologram-education', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Kết nối đến MongoDB thành công'))
  .catch(err => console.error('Kết nối đến MongoDB thất bại', err));

app.get('/', (req, res) => {
  res.send('Chào mừng đến với Hologram Education Platform!');
});

app.listen(PORT, () => {
  console.log(`Máy chủ đang chạy tại http://localhost:${PORT}`);
});