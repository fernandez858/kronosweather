var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);

var popup = L.popup();

function onMapClick(e) {  
    console.log(e.latlng)  
    const cord = {
        'lat' : e.latlng.lat,
        'lon' : e.latlng.lng
    }
    console.log(cord)
    const htmpop = `<p> <b>Latitud</b>: ${cord.lat} </p>
                    <p> <b>Longitud</b>: ${cord.lon} </p>
                    <form method="post" action="/guarda_cordenada" class="box">
                    <input id="lat" name="lat" type="hidden" value=${cord.lat}>
                    <input id="lon" name="lon" type="hidden" value=${cord.lon}>
                    <button id='salvaciud' name='salvaciud' class="rounded-md bg-green-500 w-full text-lg text-white font-semibold p-1
                    my-1 hover:bg-green-600 focus:bg-green-700">Agrega a Favoritos</button>
                    </form>`
    popup
        .setLatLng(e.latlng)
        .setContent(htmpop)
        .openOn(map);
}

map.on('click', onMapClick);


//map.locate({setView: true, maxZoom: 8});