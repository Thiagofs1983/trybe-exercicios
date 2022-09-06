const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('teste')
});

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`escutando na porta ${PORT}`)
});