import express from "express";
import {
  createProducts,
  deleteProducts,
  getProducts,
  getSingleProducts,
  updateProducts,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/products", getProducts);
router.post("/products", createProducts);
router.get("/products/:id", getSingleProducts);
router.patch("/products/:id", updateProducts);
router.delete("/products/:id", deleteProducts);

export default router;
