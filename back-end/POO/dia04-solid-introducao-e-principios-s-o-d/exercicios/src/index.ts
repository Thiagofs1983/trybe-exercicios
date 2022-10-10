import express from 'express';
import 'dotenv';

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Ouvindo a porta ${PORT}`));