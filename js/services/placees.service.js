'use strict'

var gPlaces = []
_createPlaces()

function _createPlaces() {
    var places = loadFromStorage('placesDB')
    if (!places || !places.length) {
       places= [_createPlace('Eilat', 29.495703, 34.907199, 10), _createPlace('Tel Aviv', 32.081498, 34.786221, 10)]
    }
    saveToStorage('placesDB', places)
    gPlaces = places
}

function _createPlace(name, lat, lng, zoom)  {
    return {
        id: makeId(),
        name,
        lat,
        lng ,
        zoom
    }
}

function getPlaces(){
return gPlaces
}


function addPlace(name, lat, lng, zoom) {
    gPlaces.push(_createPlace(name, lat, lng, zoom))
    saveToStorage('placesDB', gPlaces)
}


function removePlace(placeId) {
    const deleteIndex = gPlaces.findIndex(Place => Place.id === placeId)
    gPlaces.splice(deleteIndex, 1)
    saveToStorage('placesDB', gPlaces)
}


function getPlaceById(placeId){
    return gPlaces.find(Place => Place.id === placeId)
}