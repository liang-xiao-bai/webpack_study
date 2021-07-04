import '../css/img.css'
import imgUrl from '../img/zznh.png'

const oDiv = document.createElement('div')
oDiv.innerHTML = 'webpack_study'
document.body.appendChild(oDiv)

const imgDiv = document.createElement('div')
imgDiv.className = 'bgimg'
document.body.appendChild(imgDiv)

const img = document.createElement('img')
img.src = imgUrl
document.body.appendChild(img)





