// function myname(){
//     console.log("u");
//     console.log("w");
//     console.log("a");
//     console.log("i");
//     console.log("s");
//     console.log("h");

// }
// myname()


// functional parameters
// function addtwonumbers(number1,number2){
//     console.log(number1+number2);
// }
// addtwonumbers(3,null);



// function addtwonumbers(number1,number2){
//     let result = number1 + number2
//     return result
// }

// const result = addtwonumbers(3,5)

// console.log(result);


// +++++++++++++++++++++++++++++

// ... --->>> rest operator
function calculateprice(...num1){
    return num1
}

// console.log(calculateprice(200,400,500));

const user =  {
    username: "uwaish",
    price: 199
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleobject(user)

handleobject({
    username : "uwaish",
    price:399
})

const mynewarray = [200,400,600]

function returnsecondvalue(getarray){
    return getarray[1]
}
console.log(returnsecondvalue(mynewarray));
