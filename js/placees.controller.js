'use strict'

let gMap
let gMarkers = []

function onInIt() {
    renderPlaces()
    initMap()
    renderMarkers()
}

function renderPlaces() {
    const places = getPlaces()
    const placesHtml = places.map(place => `
        <li>
            <span>${place.name}</span>
            <button onclick="OrRemove('${place.id}')"><i class="fa-solid fa-trash"></i></button>
            <button onclick="onPanToPlace('${place.id}')"><i class="fa-solid fa-location-dot"></i></button>
        </li>
    `).join('')
    document.querySelector('.places').innerHTML = placesHtml
}



function initMap() {
    const options = {
        center: { lat:29.495703, lng: 34.907199 },
        zoom: 10
    }

    gMap = new google.maps.Map(
        document.querySelector('.map'),
        options,
    )
    gMap.addListener('click', ev => {
        const name = prompt('Place name?', 'Place 1')
        if (!name) return
        const lat = ev.latLng.lat()
        const lng = ev.latLng.lng()
        addPlace(name, lat, lng, gMap.getZoom())
        renderMarkers()
        renderPlaces()

    })

}

function OrRemove(placeId) {
    removePlace(placeId)
    renderMarkers()
    renderPlaces()
}

function onPanToPlace(placeId) {
    const place = getPlaceById(placeId)
    gMap.setCenter({ lat: place.lat, lng: place.lng })
    gMap.setZoom(place.zoom)

}

function renderMarkers() {
    const places = getPlaces()
    if (gMarkers) gMarkers.forEach(marker => marker.setMap(null))
    gMarkers = places.map(place => {
        return new google.maps.Marker({
            position: place,
            map: gMap,
            title: place.name
        })
    })
}

function downloadCSV() {
    const places = getPlaces();
    let csvContent = "data:text/csv;charset=utf-8,"
    csvContent += places.map(place => `${place.name},${place.lat},${place.lng},${place.zoom}`).join('\n');

    const link = document.createElement('a');
    link.setAttribute('href', encodeURI(csvContent));
    // link.setAttribute('download', 'places.csv');
    // link.textContent = 'Download CSV';

    link.click();
}