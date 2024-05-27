// Authentication token for accessing the Pexels API
const auth = "nWyUn0h0FmnDePqoeO86Iheim92k4G4nLW1zyGYuxA9KUHQKMiSlTX6y";

// DOM elements
const gallery = document.querySelector(".gallery");
const searchInput = document.querySelector(".search-input");
const form = document.querySelector(".search-form");
const more = document.querySelector(".more");
const opePopup = document.getElementById("openPopup");
let items = document.querySelectorAll(".slider .list .item");
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let popupContent = document.getElementById("popup");
let modalBackdrop = document.querySelector(".modal-backdrop");
let modalNameInput = document.querySelector("#formName");
let modalEmailInput = document.querySelector("#formEmail");
let modalMessageInput = document.querySelector("#formMessage");

// Variables
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
opePopup.addEventListener("click", openPopup);
modalBackdrop.addEventListener("click", closePopupOutside);

// Animation on first screen

// Next and Previous button click handlers
nextBtn.onclick = () => {
  active = active + 1;
  setSlider();
};
prevBtn.onclick = () => {
  active = active - 1;
  setSlider();
};

/** Function to set active slider item */
const setSlider = () => {
  let oldActive = document.querySelector(".slider .list .item.active");
  if (oldActive) oldActive.classList.remove("active");
  items[active].classList.add("active");
  nextBtn.classList.remove("d-none");
  prevBtn.classList.remove("d-none");
  if (active == lastPosition) nextBtn.classList.add("d-none");
  if (active == firstPosition) prevBtn.classList.add("d-none");
};

/** Function to calculate and set diameter of the slider */
const setDiameter = () => {
  let slider = document.querySelector(".slider");
  let widthSlider = slider.offsetWidth;
  let heightSlider = slider.offsetHeight;
  let diameter = Math.sqrt(
    Math.pow(widthSlider, 2) + Math.pow(heightSlider, 2)
  );
  document.documentElement.style.setProperty("--diameter", diameter + "px");
};

// Gallery

// Form submission event listener for searching photos
form.addEventListener("submit", (e) => {
  e.preventDefault();
  currentSearch = searchValue;
  if (currentSearch) {
    searchPhotos(searchValue);
    window.scroll({
      top: window.scrollY + 300,
      behavior: "smooth",
    });
  }
});

/** Function to update search value */
function apdateInput(e) {
  searchValue = e.target.value;
}

/** Function to fetch data from API */
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

/** Function to fetch curated photos */
async function curatedPhotos() {
  fetchLink = `https://api.pexels.com/v1/curated?per_page=15&page=1`;
  const data = await fetchAPI(fetchLink);
  generatePictures(data);
}

/** Function to search for photos based on query */
async function searchPhotos(query) {
  clear();
  fetchLink = `https://api.pexels.com/v1/search?query=${query}&per_page=15&page=1`;
  const data = await fetchAPI(fetchLink);
  if (query != undefined && data.total_results) {
    generatePictures(data);
  } else {
    const galleryImg = document.createElement("div");
    galleryImg.innerHTML = `<p>Nothing was found for your request</p>`;
    gallery.appendChild(galleryImg);
  }
}

/** Function to generate pictures in the gallery */
function generatePictures(data) {
  data.photos.forEach((photo) => {
    const galleryImg = document.createElement("div");
    galleryImg.classList.add("gallery-img");
    galleryImg.innerHTML = `<div class = 'gallery-info'>
        <p>${photo.photographer}</p>
        <a href='' download=${photo.src.original}>Download</a></div>
        <a href=${photo.src.original} target='_blank'><img src=${photo.src.large} alt=${photo.alt}/></a>`;
    gallery.appendChild(galleryImg);
  });
}

/** Function to clear the gallery and search input */
function clear() {
  gallery.innerHTML = "";
  searchInput.value = "";
}

/** Function to fetch more photos */
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

/** Function to open the popup */
function openPopup() {
  modalBackdrop.style.display = "block";
  popupContent.style.display = "block";
  document.body.style.position = "fixed";
  document.body.style.width = "100vw";
  modalNameInput.value = "";
  modalEmailInput.value = "";
  modalMessageInput.value = "";
}

/** Function to close the popup */
function closePopup() {
  modalBackdrop.style.display = "none";
  popupContent.style.display = "none";
  document.body.style.position = "";
  document.body.style.width = "";
}

/** Function to close the popup if clicked outside */
function closePopupOutside(event) {
  console.log(event.target);
  if (event.target !== popupContent && popupContent.style.display == "block") {
    popupContent.style.display = "none";
    modalBackdrop.style.display = "none";
    document.body.style.position = "";
    document.body.style.width = "";
  }
}

// Initial setup
setSlider();
curatedPhotos();
setDiameter();
