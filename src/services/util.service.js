'use strict';
function loadFromStorage(key) {
    const json = localStorage.getItem(key);
    const value = JSON.parse(json)
    return value;
}

function saveToStorage(key, value) {
    const json = JSON.stringify(value);
    localStorage.setItem(key, json)
}

function makeId(length = 9) {
    var num = '';
    var possible = '0123456789';
    for (var i = 0; i < length; i++) {
        num += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return num;
}

export default {
    loadFromStorage,
    saveToStorage,
    makeId
}