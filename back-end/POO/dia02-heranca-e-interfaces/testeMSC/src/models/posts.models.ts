import { OkPacket, Pool, RowDataPacket } from "mysql2/promise";
import { IPosts } from "../interfaces";

export default class Posts {
  public connection: Pool;
  
  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IPosts[]> {
    const [result] = await this.connection.execute<RowDataPacket[]>('SELECT * FROM TypeScriptExpress.Posts;');
    return result as IPosts[];
  }

  public async getById(id: number): Promise<IPosts> {
    const [[result]] = await this.connection.execute<RowDataPacket[]>('SELECT * FROM TypeScriptExpress.Posts WHERE id = ?;', [id]);
    return result as IPosts;
  }
}