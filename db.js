
// DB 
const database = [
    {
        id: 1,
        name: 'Lisa Johns',
        profilePicture: './user_images/lisa.jpeg',
        productName: 'iPhone 12',
        productImg: './electronics_imgs/iphone12.jpeg',
        productType: 'iphone12',
        productImgList: ['./electronics_imgs/iphone12.jpeg', './electronics_imgs/iphone12(1).jpg', './electronics_imgs/iphone12(2).jpg', './electronics_imgs/iphone12(3).jpg'],
        productPrice: 1199,
        productDescription: 'The iPhone 12 has a 6.1-inch Super Retina XDR display and is powered by the A14 Bionic chip. It features 5G connectivity and a dual-camera system with 12MP Ultra Wide and Wide cameras. The phone also includes Night mode for low-light photography and Ceramic Shield front cover for superior durability.\n' +
                            "This iPhone 12 has been gently used for approximately 6 months and is in excellent condition. The battery health is at 87%, indicating that the battery is still in good condition and can last for many hours of use. The phone has also been reset to its factory settings, so it's ready to be set up by its new owner."
    },
    {
        id: 2,
        name: 'Michael Kane',
        profilePicture: './user_images/michael.jpeg',
        productName: 'Macbook',
        productImg: './electronics_imgs/macbook.jpeg',
        productType: 'macbook',
        productImgList: ['./electronics_imgs/macbook.jpeg', './electronics_imgs/macbook(1).jpeg', './electronics_imgs/macbook2.jpeg', './electronics_imgs/macbook3.jpg'],
        productPrice: 2299,
        productDescription: 'This MacBook 2016 features a 12-inch Retina display with a resolution of 2304 x 1440, providing stunning visuals and vibrant colors. It is powered by a 1.1 GHz dual-core Intel Core m3 processor and has 8GB of memory and 256GB of SSD storage. The MacBook is also equipped with a USB-C port for charging and data transfer, and a headphone jack for audio output. Its slim and lightweight design makes it easy to carry around and work on-the-go.\n' +
                            "This MacBook 2016 has been previously owned for around 2 years and is in great condition. The device has been inspected and has a battery life of 82%, meaning it can still hold a good charge for several hours of use. The MacBook has also been reset to its factory settings, so it's ready to be set up by its new owner. When purchasing a used MacBook, it's important to inspect its physical condition and check the battery health to ensure that the device is in good working condition.."
    },
    {
        id: 3,
        name: 'John Mayer',
        profilePicture: './user_images/john.jpeg',
        productName: 'Google pixel 4A',
        productImg: './electronics_imgs/googlepixel4a.jpeg',
        productType: 'google pixel 4a',
        productImgList: ['./electronics_imgs/googlepixel4a.jpeg', './electronics_imgs/googlepixel4a1.jpeg', './electronics_imgs/googlepixel4a2.jpeg', './electronics_imgs/googlepixel4a3.jpeg'],
        productPrice: 999,
        productDescription: "This Google Pixel 4a smartphone features a 5.81-inch OLED display with a resolution of 1080 x 2340, providing clear and vibrant visuals. It is powered by a Qualcomm Snapdragon 730G processor and has 6GB of memory and 128GB of storage. The Pixel 4a also features a 12.2MP rear camera and an 8MP front camera, perfect for taking high-quality photos and videos.\n" +
                            "This Pixel 4a has been gently used for around 8 months and is in excellent condition. The battery health is at 91%, indicating that the battery is still in good condition and can last for several hours of use. The phone has also been reset to its factory settings, so it's ready to be set up by its new owner. When purchasing a used Pixel 4a, it's important to inspect its physical condition and check the battery health to ensure that the device is in good working condition."

    },
    {
        id: 4,
        name: 'Sarah Hudson',
        profilePicture: './user_images/sarah.jpeg',
        productName: 'Apple watch',
        productImg: './electronics_imgs/applewatch.jpeg',
        productType: 'apple watch',
        productImgList: ['./electronics_imgs/applewatch.jpeg', './electronics_imgs/applewatch1.jpeg', './electronics_imgs/applewatch2.jpg', './electronics_imgs/applewatch3.jpeg'],
        productPrice: 499,
        productDescription: "This Apple Watch Series 6 features a 44mm Retina display with a resolution of 368 x 448, providing clear and vibrant visuals. It is powered by an S6 dual-core processor and has 32GB of storage. The Watch also features an always-on altimeter, ECG app, and fall detection.\n" +
                            "This Watch Series 6 has been gently used for around 6 months and is in excellent condition. The battery health is at 93%, indicating that the battery is still in good condition and can last for several hours of use. The Watch has also been reset to its factory settings, so it's ready to be set up by its new owner. When purchasing a used Apple Watch, it's important to inspect its physical condition and check the battery health to ensure that the device is in good working condition."
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

