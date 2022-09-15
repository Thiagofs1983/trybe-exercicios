import { Router } from 'express';
import * as userController from '../controllers/user.controllers';

const routers = Router();

routers.get('/users', userController.getAll);
routers.get('/users/:id', userController.getById);
routers.post('/login', userController.login);

export default routers;