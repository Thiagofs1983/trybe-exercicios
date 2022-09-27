import { Request, Response } from "express";
import PostsService from "../services/posts.services";

export default class PostControllers {

  constructor(private postServices = new PostsService()) {}

  public getAll = async (req: Request, res: Response): Promise<void> => {
    const result = await this.postServices.getAll();
    
    res.status(200).json(result);  
  }

  public getById = async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id);
    const result = await this.postServices.getById(id);
    res.status(200).json(result);
  }
}