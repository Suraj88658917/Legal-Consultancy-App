const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const users = []; // Replace with MongoDB model in production

router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const exists = users.find(user => user.email === email);
  if (exists) return res.status(409).json({ msg: 'User already exists' });

  const hash = await bcrypt.hash(password, 10);
  users.push({ email, password: hash });
  res.json({ msg: 'Registered successfully' });
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});
