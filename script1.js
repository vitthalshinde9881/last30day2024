const passwordBox = document.getElementById("password");
const length = 12;

const number = "123456789";
const symbol = "!@#$%^&*()_+{}[|\]";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const allChars = number + symbol + lowerCase + upperCase;

function createPassword(){
    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];   
    }
    passwordBox.value = password;
}


function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}


