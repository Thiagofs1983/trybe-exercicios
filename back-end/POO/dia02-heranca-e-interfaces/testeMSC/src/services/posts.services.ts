import { IPosts } from "../interfaces";
import connection from "../models/connection";
import Posts from "../models/posts.models";
import HttpExeption from "../shared/http.exeption";

export default class PostsService {
  public model: Posts;

  constructor() {
    this.model = new Posts(connection);
  }
  
  public async getAll(): Promise<IPosts[]> {
    const result = await this.model.getAll();
    return result
  }

  public async getById(id: number) {
    const result = await this.model.getById(id);
    if (!result) throw new HttpExeption(400, 'Post inexistente')
    
    return result;
  }
}