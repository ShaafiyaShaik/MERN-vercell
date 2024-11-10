const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();

// Middleware
app.use(cors()); // Allow cross-origin requests from frontend
app.use(bodyParser.json());

// MongoDB Atlas connection string
const mongoURI = 'mongodb+srv://skshaafiya:cPvEUgHbdgqQuQ80@mern-vercell.ac0dl.mongodb.net/?retryWrites=true&w=majority&appName=mern-vercell';

// MongoDB connection
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

// Secret key for JWT (Store this securely)
const JWT_SECRET = 'your_jwt_secret_key';

// Route for Registration
app.post('/register', async (req, res) => {
    console.log('Request received:', req.body); // Log the incoming request data
  
    const { name, phone, age, email, pin, city, sub_area, password } = req.body;
  
    if (!name || !phone || !age || !email || !pin || !city || !sub_area || !password) {
      return res.json({ message: 'All fields are required!' });
    }
  
    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.json({ message: 'User already registered!' });
    }
  
    // Create a new user
    const newUser = new User({ name, phone, age, email, pin, city, sub_area, password });
    await newUser.save();
    console.log('New user created:', newUser);
  
    // Send success message
    res.json({ message: 'Registration successful!' });
});
  
// Route for Login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.json({ message: 'Both email and password are required!' });
    }
  
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: 'User not found! Please register.' });
    }
  
    // Check if the password matches
    if (user.password !== password) {
      return res.json({ message: 'Invalid password!' });
    }
  
    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email }, 
      JWT_SECRET, 
      { expiresIn: '1h' }  // Token expires in 1 hour
    );

    // Send token to frontend
    res.json({
      message: 'Login successful!',
      token
    });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
