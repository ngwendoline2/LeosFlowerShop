import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from'jsonwebtoken';

// POST register a new user
export const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        res.status(201).send('User registered successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// POST login user
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).send('Invalid credentials');
        }
        const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY);
        res.json({ token });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// GET user profile
export const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        res.json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
};