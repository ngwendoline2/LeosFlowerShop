import Order from '../models/Order.js';

// POST create an order
export const createOrder = async (req, res) => {
    try {
        const newOrder = new Order({
            user: req.user._id, // Assuming req.user is populated by a middleware
            product: req.body.product,
            quantity: req.body.quantity,
            address: req.body.address,
            status: req.body.status
        });
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// GET all orders by user
export const getOrdersByUser = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user._id });
        res.json(orders);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// DELETE all orders by user
export const deleteOrder = async (req, res) => {
    try {
        const orders = await Order.findByIdAndDelete({ user: req.user._id });
        res.json(orders);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// GET orderDetails by user
export const getOrderDetails = async (req, res) => {
    try {
        const orders = await Order.findByIdAndDetail({ user: req.user._id });
        res.json(orders);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// UPDATEOrderStatus 
export const updateOrderStatus = async (req, res) => {
    try {
        const orders = await Order.findByIdAndUpdateStatus({ user: req.user._id });
        res.json(orders);
    } catch (error) {
        res.status(500).send(error.message);
    }
};