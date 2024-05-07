import express from 'express';
const router = express.Router();
import { createOrder, getOrderDetails, updateOrderStatus, deleteOrder } from '../controllers/orderController.js'

// Place a new order
router.post('/', createOrder);

// Get details of an order
router.get('/:id', getOrderDetails);

// Update the status of an order
router.put('/:id', updateOrderStatus);

// Cancel/delete an order
router.delete('/:id', deleteOrder);

export default router;
