import { Request, Response } from 'express';
import * as userService from '../services/user.services';
import { StatusCodes } from 'http-status-codes';
import Ilogin from '../interfaces/login.interface';

export const getAll = async (req: Request, res: Response) => {
  const result = await userService.getAll();
  res.status(StatusCodes.OK).json(result);
}

export const getById = async (req: Request, res: Response) => {
  const id: number = Number(req.params.id)
  const result = await userService.getById(id);
  if (!result) return res.status(StatusCodes.NOT_FOUND).json({ message: 'User not found' });
  res.status(StatusCodes.OK).json(result);
}

export const login = async (req: Request, res: Response) => {
  const user: Ilogin = req.body;
  const result = await userService.login(user);
  if (!result) return res.status(StatusCodes.NOT_FOUND).json({ message: 'User not found' });
  res.status(StatusCodes.OK).json(result);
}