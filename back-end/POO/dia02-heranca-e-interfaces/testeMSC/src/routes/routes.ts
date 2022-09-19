import { Router } from "express";
import PostControllers from "../controllers/posts.controllers";

const router = Router();

const postControllers = new PostControllers()

router.get('/posts', postControllers.getAll);
router.get('/posts/:id', postControllers.getById);

export default router;