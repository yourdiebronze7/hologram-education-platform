const express = require('express');
const router = express.Router();
const Course = require('../models/course');

router.post('/', async (req, res) => {
  const course = new Course(req.body);
  try {
    await course.save();
    res.status(201).send(course);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/', async (req, res) => {
  const courses = await Course.find();
  res.send(courses);
});

module.exports = router;