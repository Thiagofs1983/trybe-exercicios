import express from 'express';
import 'express-async-errors';
import 'dotenv/config';
import HttpErrorMiddleware from './middlewares/http.midleware.erro';
import routers from './routers/router';


const app = express();

app.use(express.json());
app.use(HttpErrorMiddleware);
app.use(routers);

export default app;