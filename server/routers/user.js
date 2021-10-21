const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const router = express.Router();
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  // console.log('req.body', req.body);

  let user = await User.findOne({ email });

  if (user) {
    return res.status(400).send('User with the provided email already exist.');
  }

  try {
    user = new User(req.body);
    user.password = await bcrypt.hash(password, 8);

    await user.save();
    res.status(201).send();
  } catch (e) {
    res.status(500).send('Something went wrong. Try again later');
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user.company !== req.body.company) {
      return res.status(400).send('Company with provided email does not match.');
    }

    if (!user) {
      return res.status(400).send('User with provided email does not match.');
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);

    if (!isMatch) {
      return res.status(400).send('Invalid credentials.');
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    const { password, ...rest } = user.toObject();

    return res.json({
      token,
      rest,
    });
  } catch (error) {
    return res.status(500).send('Something went wrong. Try again later');
  }
});

router.post('/tokenIsValid', async (req, res) => {
  try {
    const token = req.header('x-auth-token');
    if (!token) return res.json(false);
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);
    const user = await User.findById(verified.id);
    if (!user) return res.json(false);
    return res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/user', auth, async (req, res) => {
  const user = await User.findById(req.user);
  res.json(user);
});

module.exports = router;
