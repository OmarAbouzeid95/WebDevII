
// selectors
const $ = (id) => document.getElementById(id)
const firstName = $("first-name")
const lastName = $("last-name")
const male = $("male")
const female = $("female")
const other = $("other")
const email = $("email")
const password = $("password")
const submitBtn = document.querySelector(".submit-btn")

// function to validate user inputs
function validate(){

    const validName = (str) => str.match(/^[A-Za-z]+$/)
    const validPassword = (str) => str.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)

    // making sure all input fields are filled
    if (firstName.value.trim(" ") === "" || lastName.value.trim(" ") === "" || (!male.checked && !female.checked && !other.checked) || 
        email.value.trim(" ") === "" || password.value.trim(" ") === ""){
            alert("please fillout all the fields in the form")
    // checking the validity of the first and last names
    }else if (!validName(firstName.value) || !validName(lastName.value)){
        alert("please enter a valid name in the first name and last name fields e.g Alex.")
    // validating email address
    } else if (!(email.value.includes("@")) || !(email.value.includes(".com"))){
        alert("please enter a valid email")
    // validating password entry
    } else if (!validPassword(password.value)){
        alert("please enter a valid password\n"
             +"Password rules: \n"
             +"- Min 1 Uppercase letter\n"
             +"- Min 1 Lowercase letter\n"
             +"- Min 1 Special character\n"
             +"- Min 1 Number\n"
             +"- Min 8 characters")
    } else {
        // alert user sign up is successful
        alert("Signed up successfully")
        // redirect to the sign in page
        location.href="index.html"
    }
}

// adding event listener to the submit btn
submitBtn.addEventListener("click", (e) => {
    // preventing the page from reloading
    e.preventDefault()
    // calling the validate function
    validate()
})
