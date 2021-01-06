const http = require('http');
const express = require('express');
const morgan = require('morgan');


const PORT = 3333;
const app = express();
const server = http.createServer(app);

const logger = morgan('dev');
app.use(logger);

const es6renderer = require('express-es6-template-engine');
app.engine('html', es6renderer);
app.set('views', 'templates');
app.set('view engine', 'html')

const { Hero } = require('./models');
const { layout } = require('./utils');

app.get('/list', async (req,res) => {
    const heroes = await Hero.findAll();
    console.log(JSON.stringify(heroes, null, 4));
    // console.log() of the heroes array
    //res.send('this should be a list of heroes');
    res.render('list', {
        locals: {
            heroes
        },
        ...layout
    })
});

app.get('/', (req, res)=> {
    res.send(`<h1>greating earthlings</h1>`)
});



server.listen(PORT, () =>{
    (`listening at ${PORT}`)
});