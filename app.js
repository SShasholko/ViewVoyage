const auth = 'nWyUn0h0FmnDePqoeO86Iheim92k4G4nLW1zyGYuxA9KUHQKMiSlTX6y'
const gallery = document.querySelector('.gallery')
const searchInput = document.querySelector('.search-input')
const form = document.querySelector('.search-form')
const bgImageForHeader = document.querySelector('header')
console.log(bgImageForHeader)
let searchValue;

//Event listeners
searchInput.addEventListener('input', apdateInput)


function changeBgImageForHeader(){
    const bgImage = ['/img/pexels1.jpg', '/img/pexels2.jpg', '/img/pexels3.jpg', '/img/pexels4.jpg', '/img/pexels5.jpg']
    const index = Math.floor(Math.random() * bgImage.length)
    bgImageForHeader.style.backgroundImage = `url(${bgImage[index]})`;
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    searchPhotos(searchValue)
})

function apdateInput(e){
    searchValue = e.target.value
}

async function fetchAPI(url){
    const dataFetch = await fetch(url,{
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: auth
        }
    })
    const data = await dataFetch.json()
    return data
}


async function curatedPhotos(){
    const data = await fetchAPI('https://api.pexels.com/v1/curated?per_page=15&page=1')
    generatePictures(data)
}

async function searchPhotos(query){
    clear()
    const data = await fetchAPI(`https://api.pexels.com/v1/search?query=${query}&per_page=15&page=1`)
    generatePictures(data)
}

function generatePictures(data){
    data.photos.forEach(photo => {
        const galleryImg = document.createElement('div')
        galleryImg.classList.add('gallery-img')
        galleryImg.innerHTML = `<div class = 'gallery-info'>
        <p>${photo.photographer}</p>
        <a href=${photo.src.original} target='_blank'>Download</a> </div>
        <img src=${photo.src.large}/>`;
        gallery.appendChild(galleryImg)
    });
}

function clear(){
    gallery.innerHTML = '';
    searchInput.value = ''
}

changeBgImageForHeader()
curatedPhotos()