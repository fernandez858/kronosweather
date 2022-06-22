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
        'lat': e.latlng.lat,
        'lon': e.latlng.lng
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

getData();

async function getData() {
    const response = await fetch('/api');
    const data = await response.json();

    for (item of data) {
        const marker = L.marker([item.lat, item.lon]).addTo(map);
        let txt = `<p><b>Temperatura</b>: ${item.temp}&deg; C.</p>
        <p><b><b>Humedad</b>: ${item.humedad}%</b></p>
        <a href="/delete_favorite?id=${item.name}&source=mapa">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-400" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
    </a>`;
/* <a href="/delete_favorite?id=${item.name}&source=mapa><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg></a> 
              <b>${item.name}</b>
      <b>Temperatura</b>: ${item.temp}&deg; C.
      <b>Humedad</b>: ${item.humedad}%
      <a  href="/delete_favorite?id=${item.name}&source=mapa>Remove</a>: ${item.humedad}%
      */
        marker.bindPopup(txt);
    }
    console.log(data);
}


//map.locate({setView: true, maxZoom: 8});