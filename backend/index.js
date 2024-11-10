const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();

// Environment variables (for security)
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';
const mongoURI = process.env.MONGO_URI || 'mongodb+srv://skshaafiya:cPvEUgHbdgqQuQ80@mern-vercell.ac0dl.mongodb.net/?retryWrites=true&w=majority&appName=mern-vercell';


// Middleware
app.use(cors({
  origin: ["https://mern-vercell-tp4t-nine.vercel.app"],
  methods: ["GET", "POST", "OPTIONS"], // Make sure OPTIONS is included
  credentials: false // Set to true only if necessary
}));
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Atlas connected'))
  .catch(err => console.log('Error connecting to MongoDB Atlas:', err));

// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  phone: String,
  age: String,
  email: String,
  pin: String,
  city: String,
  sub_area: String,
  password: String,
});
const User = mongoose.model('User', userSchema);

// Root Route
app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});

// Registration Route
app.post('/register', async (req, res) => {
    console.log('Received request to register:', req.body); // Add logging here
  try {
    const { name, phone, age, email, pin, city, sub_area, password } = req.body;

    if (!name || !phone || !age || !email || !pin || !city || !sub_area || !password) {
      return res.status(400).json({ message: 'All fields are required!' });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already registered!' });
    }

    const newUser = new User({ name, phone, age, email, pin, city, sub_area, password });
    await newUser.save();
    res.status(201).json({ message: 'Registration successful!' });

  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// Login Route
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Both email and password are required!' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found! Please register.' });
    }

    if (user.password !== password) {
      return res.status(400).json({ message: 'Invalid password!' });
    }

    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Login successful!', token });

  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
