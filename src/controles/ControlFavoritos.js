const session = require("express-session");

function registraCordenadas(req,res){
    const data = req.body
    //console.log(data);
    const data2={
        'idfavoritos': 0,
        "usuario":  req.session.name ,
        "lat": data.lat,
        "lon": data.lon
     };
                     req.getConnection((err,conn) => {
                         conn.query('INSERT INTO favoritos SET ?',[data2],(err,rows) =>{
                             //res.redirect('/');
                         });
                     });               
}

module.exports = {
    registraCordenadas
}
 //guarda_cordenada