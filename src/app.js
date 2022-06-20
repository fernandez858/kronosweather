const express = require('express');
const {engine} = require('express-handlebars')
const myconnection = require('express-myconnection')
const mysql = require('mysql');
const session = require('express-session')
const bodyParser = require('body-parser')
const loginRutas = require('./rutas/login')
const app = express()
const path = require('path')
const ControlFavoritos = require('./controles/ControlFavoritos');

app.set('port', 4000)

app.set('views',__dirname + '/vistas')

app.engine('.hbs',engine({
    extname: '.hbs'
}));

app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({
    extended: true
}));
console.log(__dirname)
//static files
app.use(express.static(path.join(__dirname,'public')))

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


app.get('/mapa',(req,res) => {
    if (req.session.loggedin){
        let name = req.session.name;
        //res.render("mapa", {name});
        ControlFavoritos.getCiudadesFavoritas(req, res)
        .then(ControlFavoritos.dbtoMeteo)
        .then(cds => {
            console.log(cds)
            //res.send(cds)
            res.render("mapa", {name: req.session.name, ciudades: cds});
         })
    //getCiudadesF
        
    } else {
        res.redirect('/login');
    }
});



app.get('/',(req,res) => {
    if (req.session.loggedin){
        let name = req.session.name;
        ControlFavoritos.meteoCordenadas(req, res) 
       /* ControlFavoritos.getCiudadesFavoritas(req, res)
        .then(ControlFavoritos.dbtoMeteo)
        .then(cds => {
            console.log(cds)
            res.render("home", {usrname: name, ciudades: cds});
         })*/

        
        
    } else {
        res.redirect('/login');
    }
});
