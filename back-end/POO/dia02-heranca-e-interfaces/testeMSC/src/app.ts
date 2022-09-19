import express from 'express';
import 'express-async-errors';
import HttpMiddlewareErro from './middlewares/http.middleware.erro';
import router from './routes/routes';

const app = express();

app.use(express.json());

app.use(router);
app.use(HttpMiddlewareErro);

export default app;