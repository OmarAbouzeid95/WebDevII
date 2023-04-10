// importing the Database array from the db.js file
import database from './db.js'

// Selecting product container to populate with data from the DB.
const $ = (selector) => document.querySelector(selector)
const productsContainer = $('.products-container')
const welcomeTitle = $('#welcome-title')
const searchBtn = $('.searchIcon')
const searchBar = $('#searchbar')
const allProducts = $('.allProducts-link')

// check localStorage for the logged-in user name
const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
if (loggedUser)
    welcomeTitle.innerText = `Welcome, ${loggedUser.name}`

// populating the product-details container with data.
function updateProductInfo(id){
    // toggle hide class from the productInfo-container
    let item = {}
    for(let i = 0; i < database.length; i++){
        if(database[i].id === id){
            item = database[i]
            break
        }
    }

    // set the product Info in the local storage
    localStorage.setItem("productInfo", JSON.stringify(item))

    // redirect to the productInfo.html page
    location.href = "./productInfo.html"
    
}

// function to populate the products container with products from the DB
function displayProducts(str){
    // populating the products-container with data from the DB.
    let htmlData = ''
    database.forEach(item => {
        if ((str === 'all') || (item.productName.toLowerCase().includes(str.toLowerCase()))){
            htmlData += `<div class="product-test">
                        <img src=${item.productImg} alt=${item.productType}>
                        <div class="product-info-test">
                            <p>${item.productName}</p>
                            <p class="product-price">$${item.productPrice}</p>
                        </div>
                        <a class="buy-now">More details<span class="hidden">${item.id}</span></a>
                    </div>`
        }
    })
    // no data found
    if (htmlData === ''){
        htmlData = `<p>No prodcuts found matching your search "${str}"</p>`
    } 
    productsContainer.innerHTML = htmlData

    // view all products button 
    if (str !== 'all'){
        allProducts.classList.remove("hidden")
    }
    
    // adding event listener to each details button
    const moreDetailsBtns = document.querySelectorAll(".buy-now")
    moreDetailsBtns.forEach(button => {
        button.addEventListener("click", (e) => {
            // id of the clicked item
            const id = parseInt(e.target.lastChild.innerText)
            updateProductInfo(id)
        })
    })
}


// adding event listener to the search bar icon
searchBtn.addEventListener("click", () => {
    const searchItem = searchBar.value
    displayProducts(searchItem)
})

// adding event listener to the enter button
document.addEventListener("keypress", (e) => {
    if (e.key === 'Enter' && (searchBar.value.trim(" ") !== "")){
        displayProducts(searchBar.value)
        console.log(searchBar.value.trim(" "))
    }
})

// calling the displayProducts to display all products upon page load
window.onload = displayProducts('all')

