"use strict";

const form= document.getElementById("form");
const inputFields= document.querySelectorAll('.input-field');
const error= document.querySelector(".error");

const firstName= document.getElementById("first_name");
const lastName= document.getElementById("last_name");
const email= document.getElementById("email");
const phoneNumber= document.getElementById("phone_number");
const password= document.getElementById("password");
const confirmPassword= document.getElementById("confirm_password");


const submit= document.getElementById("submit-btn");






form.addEventListener("submit", function(e){
    e.preventDefault();

    if(password.value!=confirmPassword.value || password.value===''){
        password.style.border= '2px solid red'
        confirmPassword.style.border= '2px solid red'
        error.innerText= `Password doesn't match!`
        error.style.display= 'block'
    }
})



