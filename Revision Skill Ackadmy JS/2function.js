const { createEntityAdapter } = require("@reduxjs/toolkit");

function SquareNumber(n){
    // console.log(n*n);
}
 SquareNumber(10);


/*-----------Scope------------------*/

function test (){
    if(true){
        var v = "i am var";
        let b = "i am let";

        // console.log(b);
    }
        // console.log(v);

}
test();

/*-----------------Data Type-------------------------- */

// Number,string , boolean , undefined , null , object, //


let message = "I love javascript";
// console.log(message.length);


let date = "27"
let month = "09"
let year = "2024"

// console.log(date+month+year); //string concatination


// let money = 1200000;
let rich = false;

if (money > 10000){
    rich = true
}

if(rich){
    // console.log("congratulations! you can now buy tata harriare")
}
else{
    // console.log("Sorry bro , work hard and earn some money next month buy it now okay")
}


// undefined

let paisa;
console.log(paisa);

let cash = null;
(cash);

// Object

let person
 = {name: "Gladden",city:"Mumbai",profession:"Developer"}

 console.log(person.name)
 console.log(person.city)
 console.log(person.profession);

 let student = {rollno:21 , class:"10th" , height: "6'25", weight:75};
 console.log(student);