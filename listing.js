import database from './db.js'

// selectors
const $ = (id) => document.getElementById(id)
const name = $("name")
const itemName = $("item-name")
const itemPrice = $("item-price")
const userPhoto = $("user-photo")
const itemPhoto1 = $("item-photo1")
const itemPhoto2 = $("item-photo2")
const itemPhoto3 = $("item-photo3")
const itemPhoto4 = $("item-photo4")
const itemDescription = $("item-description")
const submitBtn = $("submit-btn")

// adding event listener for the submit button
submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    validate()
})

// function to validate inputs to be added to the DB
function validate(){
    // validate name of the user and price values
    const isAlpha = str => /^[a-zA-Z ]*$/.test(str);
    if(!isAlpha(name.value)){
        alert("Please enter a valid full name")
    }else if(isNaN(itemPrice.value)){
        alert("Please enter a valid price for the product")
    }
    
    // validating that all input fields are inserted
    if(name.value.trim(' ') === '' || itemName.value.trim(' ') === '' || itemPhoto1.value === '' || itemPhoto2.value === '' || itemPhoto3.value === '' || itemPhoto4.value === '' ||
       userPhoto.value === '' || itemDescription.value.trim(' ') === '' || itemPrice.trim(' ') === ''){
        alert("Please fill out all the fields in the form before submitting")
       }else {
            // calling addToLocalStorage function to add to the DB
            addToLocalStorage()
       }

}

// function that adds items to the localStorage
function addToLocalStorage(){

    let localStorageData = JSON.parse(localStorage.getItem("db"))
    // using length to identify the last ID number used in the db
    let id = 0
    // check if there's any data in the local storage before adding
    if (localStorageData !== null){
        id = localStorageData.length + database.length + 1
    }else{
        id = database.length + 1
        localStorageData = []
    }

    // initializing the item to be pushed
    const item = {
        id: id,
        name: name.value,
        profilePicture: userPhoto.value.replace("C:\\fakepath\\", "./user_images/"),
        productName: itemName.value,
        productImg: itemPhoto1.value.replace("C:\\fakepath\\", "./electronics_imgs/"),
        productType: itemName.value.toLowerCase(),
        productImgList: [itemPhoto1.value.replace("C:\\fakepath\\", "./electronics_imgs/"), itemPhoto2.value.replace("C:\\fakepath\\", "./electronics_imgs/"), itemPhoto3.value.replace("C:\\fakepath\\", "./electronics_imgs/"), itemPhoto4.value.replace("C:\\fakepath\\", "./electronics_imgs/")],
        productPrice: itemPrice.value,
        productDescription: itemDescription.value
    }

    // finally adding the item to the DB
    localStorageData.push(item)
    localStorage.setItem("db", JSON.stringify(localStorageData))

    // redirecting to the homepage after
    location.href = "./index.html"

}

