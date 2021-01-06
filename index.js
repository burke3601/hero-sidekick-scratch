const http = require('http');
const express = require('express');
const morgan = require('morgan');


const PORT = 3333;
const app = express();
const server = http.createServer(app);

const logger = morgan('dev');
app.use(logger);

app.get('/', (req, res)=> {
    res.send(`<h1>greating earthlings</h1>`)
});

server.listen(PORT, () =>{
    (`listening at ${PORT}`)
});