
// selectors
const productInfoContainer = document.querySelector(".productInfo-container")



// function to add product information to the page
function updateProductInfo() {

    // fetch from local storage the current product info
    const item = JSON.parse(localStorage.getItem("productInfo"))

    productInfoContainer.innerHTML = `<div class="productInfo-wrapper">
                                        <div class="productUser-details">
                                            <img class="productUser-pp" src=${item.profilePicture} alt="profile picture"/>
                                            <h4 class="productInfo-username">${item.name}</h4>
                                        </div>
                                        <h3 class="productInfo-name">Model: ${item.productName}</h3>
                                        <h4 class="productInfo-price">Price: $ ${item.productPrice}</h4>
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
                                            <h4 class="productInfo-desc">Description</h4>
                                            <p class="productInfo-description">${item.productDescription}</p>
                                            <div class="productInfo-textArea">
                                                <textarea class="productInfo-msg" placeholder="Send a message..."></textarea>
                                                <img class="submitIcon" src="./images/sendIcon.png" alt="submit btn">
                                            </div>
                                        </div>
                                    </div>`

    // adding jQuery effect to the current image
    $('.productInfo-imgList').click(() => {
        $('.productInfo-currentImg').fadeIn(1000)
    })
    
    // updating the current image when another image from the list is clicked
    const currentImg = document.querySelector('.productInfo-currentImg')
    const images = document.querySelectorAll(".productInfo-imgList")
    images.forEach(img => {
        img.addEventListener("click", (e) => {
            // changing the src attribute of the currentImg
            const src = e.target.attributes[1].value
            currentImg.setAttribute("src", src)
        })
    })
}

// call function on page load
window.onload = updateProductInfo()

