const express = require('express');
const app = express();

app.listen(process.env.PORT || 3000, () => {
    console.log(`listening on port ${process.env.PORT || 3000}`);
});

app.get('/', async (req, res) => {
    res.send("<h1>Hello World!</h1>");
});