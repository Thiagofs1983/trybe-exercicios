import Ilogin from "../interfaces/login.interface";
import Joi from 'joi';
import { NextFunction, Request, Response } from "express";

export const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    
  })
}
