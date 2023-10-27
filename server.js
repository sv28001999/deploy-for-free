const express = require('express');
const logger = require('./middlewares/logger');
const app = express();

app.use(logger);

app.listen(process.env.PORT || 3000, () => {
    console.log(`listening on port ${process.env.PORT || 3000}`);
});

app.get('/', async (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

app.get('/getInfo', async (req, res) => {
    res.json({
        name: 'shivam',
        hobbie: 'programming',
        age: 24,
        willDevelopeProject: true
    })
})