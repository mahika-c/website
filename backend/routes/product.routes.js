import express from "express";
import { createProduct, getProducts, updateProduct, deleteProduct } from '../controllers/product.controllers.js';

const router = express.Router();

router.get("/", getProducts);

router.post("/", createProduct);

router.delete("/:id", deleteProduct);

router.put("/:id", updateProduct);

export default router;