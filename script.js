let email = document.querySelector("#email").value;
let password = document.querySelector("#password").value;
let emailBox = document.querySelector("#email");
let passwordBox = document.querySelector("#password");
let button = document.querySelectorAll("button")[0];
let create = document.querySelectorAll("button")[1];
let red = document.querySelector("#red");
let error = document.querySelector(".red");
let container = document.querySelector(".container");
let article = document.querySelector(".article");
let para = document.querySelector(".ist");
let logo = document.querySelector(".logo");

function checkinput(){
    let regex = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    if(email == "" || regex.test(email) != true){
        red.style.visibility = "visible";
        error.style.display = "block";
        emailBox.style.border = "2px solid red";
        container.style.display = "flex";
        container.style.flexDirection = "column";
        container.style.justifyContent = "center";
        container.style.alignItems = "center";
        article.style.margin = "0";
        container.style.width = "100%";
        para.style.display = "none";
        logo.style.width = "100%";
        logo.style.margin = "0";
    }else if(password == "" || password <= 6){
        red.style.visibility = "visible";
        error.style.display = "block";
        passwordBox.style.border = "2px solid red";
        container.style.display = "flex";
        container.style.flexDirection = "column";
        container.style.justifyContent = "center";
        container.style.alignItems = "center";
        article.style.margin = "0";
        container.style.width = "100%";
        para.style.display = "none";
        logo.style.width = "100%";
        logo.style.margin = "0";
    }
    else{
        red.style.visibility = "hidden",
        error.style.display = "none",
        console.log("success"),
        alert("success")
        // href = "www.facebook.com"
    }
    console.log(emailBox,passwordBox,button,create, email)
}

button.addEventListener("click", checkinput);


let CreatePage = document.querySelector(".create-container");
let close = document.querySelector(".fa-xmark");
let exclamation = document.querySelectorAll(".fa-circle-exclamation");
let radioGender = document.querySelector(".check label");
 let gender = [];

 function displayCreate(){
     if(CreatePage.style.display === "block"){
         CreatePage.style.display = "none";
     }else{
         CreatePage.style.display = "block"
     }
 }

create.addEventListener("click", displayCreate);

function closeDisplay(){
    if(CreatePage.style.display === "none"){
        CreatePage.style.display = "block"
    }else{
        CreatePage.style.display = "none"
    }
}

close.addEventListener("click", closeDisplay);


let firstNameBox = document.querySelector(".create-container #fName");
let surNameBox = document.querySelector(".create-container #sName")
let createEmailBox = document.querySelector(".create-container .email");
let createPasswordBox = document.querySelector(".create-container #password");

let gFemaleBox = document.querySelector(".create-container #female");
let gMaleBox = document.querySelector(".create-container #Male");
let gCustomBox = document.querySelector(".create-container #custom");
let gCustomContent = document.querySelector(".call")
let signBtn = document.querySelector(".sign-up")

function checkInputOnCreate(){
    let gFemale = document.querySelector(".create-container #female").value;
    let createEmail = document.querySelector(".create-container .email").value;
    let createPassword = document.querySelector(".create-container #password").value;
    let gMale = document.querySelector(".create-container #Male").value;
    let gCustom = document.querySelector(".create-container #custom").value;
    let firstName = document.querySelector(".create-container #fName").value;
    let surName = document.querySelector(".create-container #sName").value;
    let regex = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // if(firstName == "" || firstName == null && surName == "" || surName == null && createEmail == "" || createEmail == null || regex.test(createEmail) != true && password == "" || createPassword < 6){
    //     firstNameBox.style.border = "1px solid red";
    //     exclamation[0].style.display = "block";
    //     console.log(exclamation);
    //     surNameBox.style.border = "1px solid red";
    //     exclamation[1].style.display = "block";
    //     createEmailBox.style.border = "1px solid red";
    //     exclamation[2].style.display = "block";
    //     createPasswordBox.style.border = "1px solid red";
    //     exclamation[3].style.display = "block";
    // }else
    if(firstName == "" || firstName == null){
        firstNameBox.style.border = "1px solid red";
        exclamation[0].style.display = "block";
    }else if(surName == "" || surName == null){
        surNameBox.style.border = "1px solid red";
        exclamation[1].style.display = "block";
    }else if(createEmail == "" || createEmail == null || regex.test(createEmail) != true){
        createEmailBox.style.border = "1px solid red";
        exclamation[2].style.display = "block";
    }else if(createPassword <= 6 || createPassword == "" || createPassword == null){
        createPasswordBox.style.border = "1px solid red";
        exclamation[3].style.display = "block";
        alert("Password should be greater than 6")
    }else if(gFemale == checked){
        gMale != checked;
        gCustom != checked
    }else if(gMale == checked){
        gFemale != checked;
        gCustom != checked;
    }else if(gCustom == checked){
        gFemale!= checked;
        gMale != checked;
        gCustomContent.style.display = "block";
    }else{
        alert("Fill")
        exclamation.style.display = "none";
    }
}

signBtn.addEventListener("click", checkInputOnCreate);
