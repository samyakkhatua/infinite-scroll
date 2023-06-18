const container = document.querySelector('.container')
const URL = 'http://xsgames.co/randomusers/assets/avatars/female/'


function getRandom() {
    return Math.floor(Math.random()*75)
}

function loadImages(numImages = 20){
    let i=0;
    while(i<numImages){
        const img = document.createElement('img')
        img.src = `${URL}${getRandom()}.jpg`
        container.appendChild(img)
        i++
    }
}

loadImages()

window.addEventListener('scroll', () => {
    
    if ((window.scrollY + window.innerHeight >= document.documentElement.scrollHeight)) {
        // loadImages()
        setTimeout(loadImages, 3000)
    }
})