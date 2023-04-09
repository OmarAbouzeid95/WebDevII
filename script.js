// importing the Database array from the db.js file
import database from './db.js'

// Selecting product container to populate with data from the DB.
const $ = (selector) => document.querySelector(selector)
const productsContainer = $('.products-container')
const productInfoContainer = $('.productInfo-container')
const welcomeTitle = $('#welcome-title')
const searchBtn = $('.searchIcon')
const searchBar = $('#searchbar')
const allProducts = $('.allProducts-link')

// check localStorage for the logged-in user name
const loggedUser = localStorage.getItem("loggedUser")
if (loggedUser)
    welcomeTitle.innerText = `Welcome, ${loggedUser}`

// hiding the productInfo-container
function hideProductInfo(){
    productInfoContainer.classList.add("hidden")
    productInfoContainer.innerHTML = ''
}

// populating the product-details container with data.
function updateProductInfo(id){
    // toggle hide class from the productInfo-container
    productInfoContainer.classList.remove("hidden")
    let item = {}
    for(let i = 0; i < database.length; i++){
        if(database[i].id === id){
            item = database[i]
            break
        }
    }
    console.log(item)
    productInfoContainer.classList.remove("hidden")
    productInfoContainer.innerHTML = `<div class="productInfo-wrapper">
                                        <img class="closeIcon" src="./images/closeIcon.png" alt="close icon"/>
                                        <div class="productInfo-images">
                                            <img class="productInfo-currentImg" src=${item.productImg} alt="current image">
                                            <div class="productInfo-otherImgs">
                                                <img class="productInfo-imgList" src=${item.productImgList[0]} alt="img 1">
                                                <img class="productInfo-imgList" src=${item.productImgList[1]} alt="img 2">
                                                <img class="productInfo-imgList" src=${item.productImgList[2]} alt="img 3">
                                                <img class="productInfo-imgList" src=${item.productImgList[3]} alt="img 3">
                                            </div>
                                        </div>
                                        <div class="productInfo-details">
                                            <div class="productUser-details">
                                                <img class="productUser-pp" src=${item.profilePicture} alt="profile picture"/>
                                                <h4>${item.name}</h4>
                                            </div>
                                            <p class="productInfo-description">${item.productDescription}</p>
                                            <div class="productInfo-textArea">
                                                <textarea class="productInfo-msg" placeholder="Send a message..."></textarea>
                                                <img class="submitIcon" src="./images/sendIcon.png" alt="submit btn">
                                            </div>
                                        </div>
                                      </div>`
    
    // selecting the close icon
    $('.closeIcon').addEventListener("click", hideProductInfo)
    
    // updating the current image when another image from the list is clicked
    const currentImg = $('.productInfo-currentImg')
    const images = document.querySelectorAll(".productInfo-imgList")
    images.forEach(img => {
        img.addEventListener("click", (e) => {
            // changing the src attribute of the currentImg
            const src = e.target.attributes[1].value
            currentImg.setAttribute("src", src)
        })
    })
}

// function to populate the products container with products from the DB
function displayProducts(str){
    // populating the products-container with data from the DB.
    let htmlData = ''
    database.forEach(item => {
        if ((str === 'all') || (item.productName.toLowerCase() === str.toLowerCase())){
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

// calling the displayProducts to display all products upon page load
window.onload = displayProducts('all')

