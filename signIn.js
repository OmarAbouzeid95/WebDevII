
// selectors
const $ = (id) => document.getElementById(id)
const submitBtn = document.querySelector(".submit-btn")
const email = $("email")
const password = $("password")

// email and password values as if they're from a DB
const db = [
    {
        name: 'Prashant',
        email: 'prashant@admin.com',
        password: 'Helloworld100*',
        profilePicture: './user_images/michael.jpeg'
    },
    {
        name: 'Omar',
        email: 'omar@admin.com',
        password: 'Helloworld100*',
        profilePicture: './user_images/john.jpeg'
    },
    {
        name: 'Nisha',
        email: 'nisha@admin.com',
        password: 'Helloworld100*',
        profilePicture: './user_images/lisa.jpeg'
    },
    {
        name: 'Iram',
        email: 'iram@admin.com',
        password: 'Helloworld100*',
        profilePicture: './user_images/sarah.jpeg'
    },
    {
        name: 'Nitin',
        email: 'nitin@admin.com',
        password: 'Helloworld100*',
        profilePicture: './user_images/michael.jpeg'
    },

]

const signedUpUser = JSON.parse(localStorage.getItem("users"))
db.push(signedUpUser)

// function to validate user inputs and compare results to the DB
function validate(){

    let validUser = false

    if (email.value.trim(" ") === "" || password.value.trim(" ") === ""){
        alert("email and password fields need to be filled")
    }
    // validating email and password values are correct
    else if(!(email.value.includes("@")) || !(email.value.includes(".com"))){
        alert("please enter a valid email")
    // loop through db to check for email and password
    }else {
        for(let i = 0; i < db.length; i++){
            const user = db[i]
            if (email.value === user.email && password.value === user.password){
                validUser = true
                // adding logged in user name to the local storage
                localStorage.setItem("loggedUser", JSON.stringify(user))
                break
            }
        }
        if (validUser) {
            // alert success and redirect to home page
            alert("successfully logged in")
            location.href="products.html"
        }else {
            alert("email or password are incorrect. Try again")
        }
    }
}

// adding event listener to the submit button
submitBtn.addEventListener("click", (e) => {
    // to prevent the page from reloading
    e.preventDefault()
    // calling the validate function
    validate()
})


export default db