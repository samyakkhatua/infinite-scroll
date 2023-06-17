const container = document.querySelector('.container')
const URL = 'https://xsgames.co/randomusers/assets/avatars/female/'


function getRandom() {
    return Math.floor(Math.random()*75)
}

function loadImages(numImages = 10){
    let i=0;
    while(i<numImages){
        const img = document.createElement('img')
        img.src = `${URL}${getRandom().jpg}`
        container.appendChild(img)
        i++
    }
}

loadImages()