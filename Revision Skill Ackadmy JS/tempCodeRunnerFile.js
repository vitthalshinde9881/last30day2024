let person = {name: "Viren",age:21, city:"mubai"};

console.log(person.city)

let rectangle = {
    length : 5,
    breath : 7,
    are : function(){
        return this.length*this.breath;
    }
}

// console.log(rectangle.length);
// console.log(rectangle.breath);
// console.log("Area of Rectangle", rectangle.are());


function Car(company,model,year){
    this.company = company;
    this.model = model;
    this.model = model;
    this.year = year;
}

let myCar = new Car('Honda','civic',2019);

// console.log(myCar.company, myCar.model);


function Animal(name){
    this.name = name;
}

Animal.prototype.speak = function(){
    // console.log(this.name, "this making noice")
}

let  myDog = new Animal("tommy");
// console.log(myDog.name);
myDog.speak()


/*------class base another example ---------*/


class girlFriend{
    constructor(){
        this.name = this.name;
    }
    speak(){
        console.log(this.name ,  "is making some noice");
    }
}

let yourDog = new girlFriend("shreya");
console.log(girlFriend.name);