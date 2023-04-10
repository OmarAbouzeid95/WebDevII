import database from './db.js'

// selectors
const $ = (id) => document.getElementById(id)
const wrapperDiv = $("uploadWrapper")

let htmlContent = ''
// checking if there's a user logged in
if(localStorage.getItem("loggedUser") === null) {
    htmlContent = `<div class="signIn-msg-container">
                                <p>You need to sign in first.</p>
                                <a class="allProducts-link" href="./index.html">Go to Sign in</a>
                           </div>`
    wrapperDiv.innerHTML = htmlContent
}else {
    htmlContent =  `<h2 class="heading">List an item</h2>
                    <form class="list-form">
                        <label for="item-name">Product name<span class="req"> *</span></label>
                        <input class="input" type="text" id="item-name" name="item-name" placeholder="iPhone 13" required>
                        <label for="item-price">Price<span class="req"> *</span></label>
                        <input class="input" type="text" id="item-price" placeholder="$1400" name="item-price" required>
                        <label style="display: inline; padding-right:10em;"for="item-photo1">Product photo 1<span class="req"> *</span></label>
                        <input class="input" type="file" id="item-photo1" name="item-photo1" accept="image/png, image/jpeg, image/jpg" required>
                        <label style="display: inline; padding-right:10em;"for="item-photo2">Product photo 2<span class="req"> *</span></label>
                        <input class="input" type="file" id="item-photo2" name="item-photo2" accept="image/png, image/jpeg, image/jpg" required>
                        <label style="display: inline; padding-right:10em;"for="item-photo3">Product photo 3<span class="req"> *</span></label>
                        <input class="input" type="file" id="item-photo3" name="item-photo3" accept="image/png, image/jpeg, image/jpg" required>
                        <label style="display: inline; padding-right:10em;"for="item-photo4">Product photo 4<span class="req"> *</span></label>
                        <input class="input" type="file" id="item-photo4" name="item-photo4" accept="image/png, image/jpeg, image/jpg" required>
                        <label for="description">Product description<span class="req"> *</span></label>
                        <textArea class="list-textArea" id = "item-description" placeholder="write a description for your product..." required></textArea>
                        <div class="form-btns">
                            <button style="background-color: #12CB34;" class="form-btn" id="submit-btn">Submit</button>
                            <input style="background-color: #E01C1C;"class="form-btn" type="reset" value="Clear All">
                        </div>
                    </form>`

    wrapperDiv.innerHTML = htmlContent

    // selectors
    const itemName = $("item-name")
    const itemPrice = $("item-price")
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
        
        // validate name of the prodcut and price values
        const isAlpha = str => /^[a-zA-Z0-9 ]+$/.test(str);
        
        // validating that all input fields are inserted
        if(itemName.value.trim(' ') === '' || itemPhoto1.value === '' || itemPhoto2.value === '' || itemPhoto3.value === '' || itemPhoto4.value === '' ||
        itemDescription.value.trim(' ') === '' || itemPrice.value.trim(' ') === ''){
            alert("Please fill out all the fields in the form before submitting")
        }    
        else if(!isAlpha(itemName.value)){
            alert("Please enter a valid product name")
        }else if(isNaN(itemPrice.value)){
            alert("Please enter a valid price for the product")
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
    
        const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
    
        // initializing the item to be pushed
        const item = {
            id: id,
            name: loggedUser.name,
            profilePicture: loggedUser.profilePicture,
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
        location.href = "./products.html"
    
    }
}


