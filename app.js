const auth = 'nWyUn0h0FmnDePqoeO86Iheim92k4G4nLW1zyGYuxA9KUHQKMiSlTX6y'
const gallery = document.querySelector('.gallery')
const searchInput = document.querySelector('.search-input')
const form = document.querySelector('.search-form')
let searchValue;

//Event listeners
searchInput.addEventListener('input', apdateInput)

form.addEventListener('submit', (e) => {
    e.preventDefault()
    searchPhotos(searchValue)
    searchInput.value = ''
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
    const data = await fetchAPI(`https://api.pexels.com/v1/search?query=${query}&per_page=15&page=1`)
    generatePictures(data)
}

function generatePictures(data){
    data.photos.forEach(photo => {
        const galleryImg = document.createElement('div')
        galleryImg.classList.add('gallery-img')
        galleryImg.innerHTML = `<img src=${photo.src.large}/>
        <p>${photo.photographer}</p>`;
        gallery.appendChild(galleryImg)
    });
}

curatedPhotos()