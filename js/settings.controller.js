'use strict'


function onInIt() {
    setByUserLastSettings()
}

function setByUserLastSettings() {
    const userSettings = loadFromStorage('userSettings')
    if(!userSettings) return
    document.querySelector('[name="email"]').value = userSettings.userEmail
    document.querySelector('[name="age"]').value = userSettings.userAge
    document.querySelector('[name="color-background"]').value = userSettings.userBackgroundColor
    document.querySelector('[name="color-text"]').value = userSettings.userTextColor
    document.querySelector('[name="dob"]').value = userSettings.userDOB

}

function onSet(ev) {
    ev.preventDefault()
    const userEmail = document.querySelector('[name="email"]').value
    const userAge = document.querySelector('[name="age"]').value
    const userBackgroundColor = document.querySelector('[name="color-background"]').value
    const userTextColor =document.querySelector('[name="color-text"]').value
    const userDOB = document.querySelector('[name="dob"]').value
    setUserSettings({userEmail, userAge, userBackgroundColor, userTextColor, userDOB})
}

function onShowAge(newVal) {
    document.getElementById('sAge').innerHTML = newVal
}