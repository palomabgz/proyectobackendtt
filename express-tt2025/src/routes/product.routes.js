import { Router } from "express";
import productController from "../controllers/product.controller.js";
import { authenticateJWT } from "../middlewares/auth.js";

const router = Router();

router.get('/', authenticateJWT, productController.getProducts);

router.post('/', authenticateJWT, productController.createProduct);

router.get('/:id', authenticateJWT, productController.getProductById);

router.put('/:id', authenticateJWT, productController.productUpdated);

router.delete('/:id', authenticateJWT, productController.productDeleted);

export default router;