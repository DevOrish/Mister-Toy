'use strict';

import axios from 'axios'

const CLOUD_NAME = 'almightyjesus'
const PRESET_NAME = 'dej3d2zu'
const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
const fd = new FormData();

function uploadImg(ev) {    
    fd.append('file', ev)
    fd.append('upload_preset', PRESET_NAME)

    return axios.post(UPLOAD_URL, fd)
        .then(imgPrm => imgPrm.data.url)
        .catch(err => console.error(err))
}

export default {
    uploadImg
}