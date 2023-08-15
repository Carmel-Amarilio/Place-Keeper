'use strict'

function onInIt() {
    setByUserSettings()
}

function setByUserSettings() {
    const userSettings = loadFromStorage('userSettings')
    if(!userSettings) return
    const elBody = document.body
    const elIcon = document.querySelectorAll('i')
    elBody.style.color = userSettings.userTextColor
    elBody.style.backgroundColor = userSettings.userBackgroundColor
    elIcon.forEach(icon => icon.style.color = userSettings.userTextColor)
}