const express = require('express');
const { createUser } = require('../controllers/signup.js');
const { loginUser, refresh, logout } = require('../controllers/authControls.js');
const { login } = require('../controllers/login.js');
const { protect } = require("../middleware/jwtVerify.js");
const User = require('../models/User'); // Import the User model
const router = express.Router();

router.post('/signup', createUser);

router.post('/login', login);

router.post('/logout', logout);

router.get('/protected', protect, async (req, res) => {
    try {
      // Use findOne to find the user by email, assuming req.user contains the email
      const user = await User.findOne({ email: req.user.email }); // Exclude the password field
      
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      // Send the user data as the response
      res.json({
        _id: user._id,      // Include _id in the response
        name: user.name,
        email: user.email,
        role: user.role,    // Include the role as well
      });
    } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });
  

module.exports = router;
