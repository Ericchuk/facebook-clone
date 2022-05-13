let input = document.querySelectorAll("input");
// let email = document.querySelector("#email").value;
// let password = document.querySelector("#password").value;
let emailBox2 = document.querySelector("#email2");
let emailBox = document.querySelector("#email");
let passwordBox = document.querySelector("#password");
let inputBox2 = document.querySelectorAll("input")[2];
let error = document.querySelector(".error");
let button = document.querySelector("button");
let button0 = document.querySelector("#cancel");
let button1 = document.querySelector("#search");
let regex = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

function checkinput(){  
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;


    if(email == "" && regex.test(email) != true){
        emailBox.style.border = "1px solid red"
    }else if(password == "" && password <= 6){
        alert("Password must be Minimum of 7 characters")
        passwordBox.style.border = "1px solid red"
    }else{
        emailBox.style.border = "2px solid lightgray",
        passwordBox.style.border = "2px solid lightgray"
    }
}

button.addEventListener("click", checkinput);

function checkEmailInput(){
    let email2 = document.querySelector("#email2").value;
    if(email2 == "" && regex.test(email2) != true){
        emailBox2.style.border = "2px solid red"
    }else{
        alert("Searching ...")
    }
}

button1.addEventListener("click", checkEmailInput)

function clearSearchBar(){
    let email2 = document.querySelector("#email2").value;
    if(email2 != "" && regex.test(email2) == true){
        emailBox2.style.border = "2px solid black";
        email2 = ""
    }
}

button0.addEventListener("click", clearSearchBar)