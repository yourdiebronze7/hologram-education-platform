const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/students');
const courseRoutes = require('./routes/courses');

const app = express();
app.use(express.json()); // To parse JSON data

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/hologram-education', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

app.use('/api/students', studentRoutes);
app.use('/api/courses', courseRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});