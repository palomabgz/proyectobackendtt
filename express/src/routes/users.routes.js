import { Router } from "express";
import usersController from "../controllers/users.controller";

const router = Router();

router.get('/', usersController.getAllUsers);

router.post('/', usersController.createUser);

router.put('/:id', usersController.updateUser);

export default router;