
import {NextFunction, Router, Request, Response} from 'express';
import { login } from '../controllers/authController';

const authRouter:Router = Router();

authRouter.get('/login', login);

export default authRouter;