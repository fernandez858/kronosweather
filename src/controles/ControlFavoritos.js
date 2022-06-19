const session = require("express-session");
const axios = require('axios')


const APIKeys = {
    owm: "f54e25966b3b8496eeb1544cc9979325",
    positionstack: '96351ddde4b6b8d3834949f5726e58cb'
}

function registraCordenadas(req, res) {
    const data = req.body
    //console.log(data);

    // get city
    apiposcall = `http://api.positionstack.com/v1/reverse?access_key=${APIKeys.positionstack}&query=${data.lat},${data.lon}&limit=10&output=json`
    axios.get(apiposcall)
        .then(function (response2) {

            const dataRegistro = {
                'idfavoritos': 0,
                "usuario": req.session.name,
                //"ciudad": response2.data.data[0].label,
                'ciudad': response2.data.data[0].label,
                'countrycode': response2.data.data[0].country_code,
                'country': response2.data.data[0].country,
                "lat": data.lat,
                "lon": data.lon
            };

            console.log(dataRegistro.ciudad)

            req.getConnection((err, conn) => {
                conn.query('INSERT INTO favoritos SET ?', [dataRegistro], (err, rows) => {
                    //res.redirect('/');
                });
            });
        })




}



function dbtoMeteo(rows) {
    return new Promise((resolve2, reject) => {
        var ciudades = []
        var ciudPromises = []
        console.log('Length of db:' + rows.length)
        for (const row of rows) {
            //console.log(row.lat)
            //apicall = `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${APIKeys.owm}`

            //console.log(data);
            ciudPromises.push(
                new Promise((resolve, reject) => {
                    apicall = `https://api.openweathermap.org/data/2.5/weather?lat=${row.lat}&lon=${row.lon}&units=metric&lang=es&appid=${APIKeys.owm}`
                    axios.get(apicall)
                        .then(function (response) {
                            // console.log(response);
                            let ciudad = {
                                lon: response.data.coord.lon,
                                lat: response.data.coord.lat,
                                temp: response.data.main.temp,
                                tmax: response.data.main.temp_max,
                                tmin: response.data.main.temp_min,
                                humedad: response.data.main.humidity,
                                tiempo: response.data.weather[0].main,
                                tiempo_desc: response.data.weather[0].description,
                                icon: response.data.weather[0].icon,
                                name: row.ciudad
                            }
                            resolve(ciudad)
                        })

                })
            )

            Promise.all(ciudPromises)
                .then((cds) => {
                    //console.log(cds)
                    resolve2(cds)
                })

            // ciudades.push(ciudad)
        }

    })



}

function getCiudadesFavoritas(req, res) {
    return new Promise(
        (resolve, reject) => {
            var ciudades = []
            req.getConnection((err, conn) => {
                usr_input = 'fernandez858@gmail.com'
                conn.query('SELECT * FROM favoritos WHERE usuario = ?', [usr_input], (err, userdata) => {


                    resolve(userdata)
                })
            })

        }

    )

}

function meteoCordenadas(req, res) {
    //const data = req.body
    const lat = 33.44
    const lon = -94.04


    // usr_input = req.session.name
    usr_input = 'fernandez858@gmail.com'
    // Get all ciudades for current user

    console.log('Hola 1')
    // aFunction().then(res.send);
    getCiudadesFavoritas(req, res)
        .then(dbtoMeteo)
        .then(cds => {
            console.log(cds)
            res.send(cds)
         })
    /*getCiudadesFavoritas(req, res).then(myArray => {
        console.log('Resultado from Promise')
        console.log(myArray)

        cds = dbtoMeteo(myArray)


        //res.send(myArray)
        console.log(cds)
        res.send(cds)
    })
    */
    //const ciuddd =  obtenciudades(usr_input, req,res)


}

module.exports = {
    registraCordenadas,
    meteoCordenadas
}
 //guarda_cordenada