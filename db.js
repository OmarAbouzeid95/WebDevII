
// DB 
const database = [
    {
        id: 1,
        name: 'Lisa Johns',
        profilePicture: '../user_images/lisa.jpeg',
        productName: 'iPhone 12',
        productImg: '../electronics_imgs/iphone12.jpeg',
        productType: 'iphone12',
        productImgList: ['../electronics_imgs/iphone12.jpeg', '../electronics_imgs/iphone12(1).jpg', '../electronics_imgs/iphone12(2).jpg', '../electronics_imgs/iphone12(3).jpg'],
        productPrice: 1199,
        productDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur hic officia cumque mollitia facere aliquid! Veniam fugiat earum quasi. A.'
    },
    {
        id: 2,
        name: 'Michael Kane',
        profilePicture: '../user_images/michael.jpeg',
        productName: 'Macbook',
        productImg: '../electronics_imgs/macbook.jpeg',
        productType: 'macbook',
        productImgList: ['../electronics_imgs/macbook.jpeg', '../electronics_imgs/macbook(1).jpeg', '../electronics_imgs/macbook2.jpeg', '../electronics_imgs/macbook3.jpg'],
        productPrice: 2299,
        productDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur hic officia cumque mollitia facere aliquid! Veniam fugiat earum quasi. A.'
    },
    {
        id: 3,
        name: 'John Mayer',
        profilePicture: '../user_images/john.jpeg',
        productName: 'Google pixel 4A',
        productImg: '../electronics_imgs/googlepixel4a.jpeg',
        productType: 'google pixel 4a',
        productImgList: ['../electronics_imgs/googlepixel4a.jpeg', '../electronics_imgs/googlepixel4a1.jpeg', '../electronics_imgs/googlepixel4a2.jpeg', '../electronics_imgs/googlepixel4a3.jpeg'],
        productPrice: 999,
        productDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur hic officia cumque mollitia facere aliquid! Veniam fugiat earum quasi. A.'
    },
    {
        id: 4,
        name: 'Sarah Hudson',
        profilePicture: '../user_images/sarah.jpeg',
        productName: 'Apple watch',
        productImg: '../electronics_imgs/applewatch.jpeg',
        productType: 'apple watch',
        productImgList: ['../electronics_imgs/applewatch.jpeg', '../electronics_imgs/applewatch1.jpeg', '../electronics_imgs/applewatch2.jpg', '../electronics_imgs/applewatch3.jpeg'],
        productPrice: 499,
        productDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur hic officia cumque mollitia facere aliquid! Veniam fugiat earum quasi. A.'
    }
]

// Checking if localStorage has additional items
const localStorageDb = JSON.parse(localStorage.getItem("db"))
if (localStorageDb !== null){
    localStorageDb.forEach(item => {
        database.push(item)
    })
}

export default database

