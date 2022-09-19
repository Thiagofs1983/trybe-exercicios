import { NextFunction, Request, Response } from "express";
import HttpExeption from "../shared/http.exeption";

const HttpMiddlewareErro = (err: Error, req: Request, res: Response, next: NextFunction) => {
  const { status, message } = err as HttpExeption;
  res.status(status || 500).json({ message })
}

export default HttpMiddlewareErro;