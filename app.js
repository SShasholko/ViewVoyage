const auth = "nWyUn0h0FmnDePqoeO86Iheim92k4G4nLW1zyGYuxA9KUHQKMiSlTX6y";
const gallery = document.querySelector(".gallery");
const searchInput = document.querySelector(".search-input");
const form = document.querySelector(".search-form");
const more = document.querySelector(".more");
let items = document.querySelectorAll(".slider .list .item");
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");

let lastPosition = items.length - 1;
let firstPosition = 0;
let active = 0;
let searchValue;
let page = 1;
let fetchLink;
let currentSearch;

//Event listeners
searchInput.addEventListener("input", apdateInput);
more.addEventListener("click", morePhotos);
window.addEventListener("resize", () => {
  setDiameter();
});

nextBtn.onclick = () => {
  active = active + 1;
  setSlider();
};
prevBtn.onclick = () => {
  active = active - 1;
  setSlider();
};

const setSlider = () => {
  let oldActive = document.querySelector(".slider .list .item.active");
  if (oldActive) oldActive.classList.remove("active");
  items[active].classList.add("active");
  nextBtn.classList.remove("d-none");
  prevBtn.classList.remove("d-none");
  if (active == lastPosition) nextBtn.classList.add("d-none");
  if (active == firstPosition) prevBtn.classList.add("d-none");
};

const setDiameter = () => {
  let slider = document.querySelector(".slider");
  let widthSlider = slider.offsetWidth;
  let heightSlider = slider.offsetHeight;
  let diameter = Math.sqrt(
    Math.pow(widthSlider, 2) + Math.pow(heightSlider, 2)
  );
  document.documentElement.style.setProperty("--diameter", diameter + "px");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  currentSearch = searchValue;
  searchPhotos(searchValue);
});

function apdateInput(e) {
  searchValue = e.target.value;
}

async function fetchAPI(url) {
  const dataFetch = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: auth,
    },
  });
  const data = await dataFetch.json();
  return data;
}

async function curatedPhotos() {
  fetchLink = `https://api.pexels.com/v1/curated?per_page=15&page=1`;
  const data = await fetchAPI(fetchLink);
  generatePictures(data);
}

async function searchPhotos(query) {
  clear();
  fetchLink = `https://api.pexels.com/v1/search?query=${query}&per_page=15&page=1`;
  const data = await fetchAPI(fetchLink);
  generatePictures(data);
}

function generatePictures(data) {
  data.photos.forEach((photo) => {
    const galleryImg = document.createElement("div");
    galleryImg.classList.add("gallery-img");
    galleryImg.innerHTML = `<div class = 'gallery-info'>
        <p>${photo.photographer}</p>
        <a href=${photo.src.original} target='_blank'>Download</a> </div>
        <a href=${photo.src.original} target='_blank'><img src=${photo.src.large}/></a>`;
    gallery.appendChild(galleryImg);
  });
}

function clear() {
  gallery.innerHTML = "";
  searchInput.value = "";
}

async function morePhotos() {
  page++;
  if (currentSearch) {
    fetchLink = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${page}`;
  } else {
    fetchLink = `https://api.pexels.com/v1/curated?per_page=15&page=${page}`;
  }
  const data = await fetchAPI(fetchLink);
  generatePictures(data);
}

setSlider();
curatedPhotos();
setDiameter();
