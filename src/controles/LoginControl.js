const bcrypt = require("bcrypt")

function login(req,res){
    console.log("pippo")
    if (req.session.loggedin != true){
        res.render("login/index");
    } else {
        console.log("pippo")
        res.redirect('/');
    }    
}

function registro(req,res){
    if (req.session.loggedin != true){
        res.render("login/registro");
    } else {
        console.log("pippo")
        res.redirect('/');
    }    
}

function registraUsuario(req,res){
    const data = req.body
    //console.log(data);
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM usuarios WHERE usuario = ?',[data.email],(err,userdata) =>{
            if(userdata.length > 0) {
                //console.log('email existe')
                res.render('login/registro', {error: 'Error: el email de usuario ya existe'})
            } else {

                bcrypt.hash(data.password, 12).then(hash => {
                    data.password = hash;
                    console.log(data);
                    const data2={
                        "usuario": data.email,
                        "hash": data.password,
                        "salt": "NADA"
                     };
                     
                     req.getConnection((err,conn) => {
                         conn.query('INSERT INTO usuarios SET ?',[data2],(err,rows) =>{
                             res.redirect('/');
                         });
                     });
                 });

                
            }
        });
    });
}


function auth(req, res) {
    console.log('hrllo')
    const data = req.body;
    //console.log(data)
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM usuarios WHERE usuario = ?', [data.email], (err, userdata) => {
            if (userdata.length > 0) {
                bcrypt.compare(data.password, userdata[0].hash, (err, isMatch) => {
                    if (!isMatch) {
                        res.render('login/index', { error: 'Error: password invalida' })
                    } else {
                        console.log('Welcome')
                        req.session.loggedin = true;
                        req.session.name = userdata[0].usuario
                        res.redirect('/');
                    }
                    console.log(data);
                });
            } else {
                res.render('login/index', { error: 'Error: el email de usuario no existe' })
            }
        });
    });
}

function logout(req, res) {
    if(req.session.loggedin == true) {
        req.session.destroy()
    } 

    res.redirect('/login')
}

module.exports = {
    login,
    registro,
    registraUsuario,
    auth,
    logout
}
