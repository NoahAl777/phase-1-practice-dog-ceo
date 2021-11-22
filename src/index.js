//On Load
document.addEventListener('DOMContentLoaded', fetchImages);
document.addEventListener('DOMContentLoaded', fetchBreeds);

// Url's for fetching
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

// Query Selectors
const imageContainer = document.querySelector('div#dog-image-container')
const breedList = document.querySelector('body ul#dog-breeds')
const listItems = document.querySelectorAll('li')

//Handle Images
function fetchImages() {
  fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => appendImagesToContainer(json))
}

function appendImagesToContainer(json) {
  json.message.forEach(element => {
    let img = document.createElement('img')
    img.src = element
    imageContainer.appendChild(img)
  });
}

//Handle Breeds
function fetchBreeds() {
  fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => appendBreedsToUL(json))
}

function appendBreedsToUL(json) {
  Object.keys(json.message).forEach(element => {
    let li = document.createElement('li')
    li.innerText = element
    breedList.appendChild(li)
    onClickChangeColor(li)
  })
}

function onClickChangeColor(li) {
  li.addEventListener('click', (li) => li.target.style.color = 'red')
}