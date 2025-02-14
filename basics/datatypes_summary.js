//  primitive 
// call by value - copy
//  7 types: String , Number , Boolean ,null , undefined ,Symbol(value ko uniq bnane ke liye) ,BigInt(big values);



// statically or dynamically?

const score = 100
const scoreValue = 100.3


const isloggedin = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 347934878597348975n


// Reference(Non-Pimitive)
// call by reference
// Arrays , Objects,Functions

const heros = ["ironman","thor","cap"]
let myObj = {
    name: "uwaish",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof outsideTemp);

console.log(typeof myFunction);

