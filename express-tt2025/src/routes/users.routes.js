import { Router } from "express";
import usersController from "../controllers/users.controller.js";

const router = Router();

router.get('/', usersController.getAllUsers);

router.post('/', usersController.createUser);

router.put('/:id', usersController.updateUser);

router.get('/:id', usersController.getUserById);

router.delete('/:id', usersController.deleteUser);

export default router;