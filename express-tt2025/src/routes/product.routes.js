import { Router } from "express";
import productController from "../controllers/product.controller.js";
import { authenticateJWT } from "../middlewares/auth.js";

const router = Router();

router.get('/', authenticateJWT, productController.getProducts);

router.post('/', productController.createProduct);

router.get('/:id', productController.getProductById);

router.put('/:id', productController.productUpdated);

router.delete('/:id', productController.productDeleted);

export default router;