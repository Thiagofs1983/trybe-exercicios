import * as userModel from '../models/user.model';
import Ilogin from '../interfaces/login.interface';

export const getAll = async () => {
  const result = await userModel.getAll();
  return result;
}

export const getById = async (id: number) => {
  const result = await userModel.getById(id);
  return result;
}

export const login = async (user: Ilogin) => {
  const result = await userModel.login(user);
  return result;
}