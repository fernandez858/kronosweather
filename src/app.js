const express = require('express');
const {engine} = require('express-handlebars')
const myconnection = require('express-myconnection')
const mysql = require('mysql');
const session = require('express-session')
const bodyParser = require('body-parser')
const loginRutas = require('./rutas/login')
const app = express()

app.set('port', 4000)

app.set('views',__dirname + '/vistas')

app.engine('.hbs',engine({
    extname: '.hbs'
}));

app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({
    extended: true
}));



app.use(bodyParser.json())

app.use(myconnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'camatagua',
    port: 3306,
    database: 'kronostiempodb'
}));

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));


app.listen(app.get('port'),() => {
    console.log('Listenin on port ', app.get('port'));
});


app.use('/',loginRutas)



app.get('/',(req,res) => {
    console.log('Im wow')
    console.log(req.session.loggedin)
    if (req.session.loggedin){
        console.log('Im here')
        let name = req.session.name;
        res.render("home", {name});
        
    } else {
        res.redirect('/login');
    }
});
