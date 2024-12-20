import Router from "express-promise-router";
import {
    addOrderItems,
    deleteOrderItemById,
    getAllOrderItems,
    getOrderItemsByOrderId,
    updateOrderItem
} from "../controller/orderItems.js";

const router = Router();

router.get("/all", getAllOrderItems);
router.get("/:id", getOrderItemsByOrderId);
router.post("/", addOrderItems);
router.patch("/", updateOrderItem);
router.delete("/:order_id/:product_id", deleteOrderItemById);

export default router;