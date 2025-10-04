const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/students');
const courseRoutes = require('./routes/courses');

const app = express();
app.use(express.json()); // Để parse JSON data

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/hologram-education', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Kết nối đến MongoDB thành công'))
  .catch(err => console.error('Kết nối đến MongoDB thất bại', err));

app.use('/api/students', studentRoutes);
app.use('/api/courses', courseRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Máy chủ đang chạy tại http://localhost:${PORT}`);
});