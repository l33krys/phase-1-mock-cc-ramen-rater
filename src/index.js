// write your code here

// Fetch ramen from the server
function getRamen() {
    fetch('http://localhost:3000/ramens')
    .then(r => r.json())
    .then(dbRamen => dbRamen.forEach(existingRamen => renderRamen(existingRamen)))
}

// Render existing rame images to the menu at the top of the page
function renderRamen(existingRamen) {
    const ramenMenuDiv = document.querySelector('#ramen-menu')
    let menuImg = document.createElement('img')
    menuImg.src = `${existingRamen.image}`

    ramenMenuDiv.appendChild(menuImg)

    menuImg.addEventListener('click', (clickedRamen) => {
        document.querySelector('#ramen-detail img').src = `${existingRamen.image}`
        document.querySelector('#ramen-detail h2').innerText = `${existingRamen.name}` //`${existingRamen.name}`
        document.querySelector('#ramen-detail h3').innerText = `${existingRamen.restaurant}` //`${existingRamen.restaurant}`
        document.querySelector('#rating-display').innerText = `${existingRamen.rating}`
        document.querySelector('#comment-display').innerText = `${existingRamen.comment}`

    })

}

// Function to initialize fetch of existing ramen
function initialize() {
    getRamen()
}

// Start
initialize()

// Create form variable
const form = document.querySelector('form')
form.addEventListener('submit', handleSubmit)

// Create new ramen objects
function handleSubmit(e) {
    e.preventDefault();
    let ramenObj = {
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment: e.target['new-comment'].value
    }
    renderNewRamen(ramenObj)
}

// Add new ramen image to menu at the top using ramen object
function renderNewRamen(ramenObj) {
    const ramenMenuDiv = document.querySelector('#ramen-menu')
    let scrollImg = document.createElement('img')
    scrollImg.src = `${ramenObj.image}`

    ramenMenuDiv.appendChild(scrollImg)
}