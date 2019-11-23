'use strict';

import httpService from './http.service.js'

export default {
    query,
    remove,
    add,
}

const BASE_URL = (process.env.NODE_ENV !== 'development')
    ? '/api/toy'
    : '//localhost:3000/api/toy/';

function _getUrl(id = '') {
    return BASE_URL + id
}

function query() {
    return httpService.get(_getUrl())
}

function remove(toyId) {
    return httpService.delete(_getUrl(toyId))
}

function add(toy) {
    if (toy._id) {
        return httpService.put(_getUrl(toy._id), toy)
    } else {
        if (!toy.imgUrl) toy.imgUrl = 'https://s7d1.scene7.com/is/image/PETCO/petco-no-image-available-0815-img-d'
        return httpService.post(_getUrl(), toy)
    }
}