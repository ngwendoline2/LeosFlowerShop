import express from 'express';
const router = express.Router();
import { registerUser, loginUser, getUserProfile } from '../controllers/userController.js';

// Register a new user
router.post('/register', registerUser);

// Login user
router.post('/login', loginUser);

// Get user profile
router.get('/profile', getUserProfile);

// Update user profile
// router.put('/profile', updateUserProfile);

export default router;