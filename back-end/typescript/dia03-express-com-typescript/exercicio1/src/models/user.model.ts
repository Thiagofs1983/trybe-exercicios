import connection from "./connection";
import IUser from "../interfaces/user.interface";
import Ilogin from "../interfaces/login.interface";

export const getAll = async (): Promise<IUser[]> => {
  const [result] = await connection.execute('SELECT * FROM TypeScriptExpress.Users;');
  return result as IUser[];
}

export const getById = async (id: number): Promise<IUser | null> => {
  const query = 'SELECT * FROM TypeScriptExpress.Users WHERE id = ?;'
  const [result] = await connection.execute(query, [id]);
  const [user] = result as IUser[];
  return user || null;
}

export const login = async (user: Ilogin): Promise<IUser | null> => {
  const query = 'SELECT * FROM TypeScriptExpress.Users WHERE email = ? AND password = ?';
  const [result] = await connection.execute(query, [user.email, user.password]);
  const [userLogin] = result as IUser[];
  return userLogin as IUser || null;
}