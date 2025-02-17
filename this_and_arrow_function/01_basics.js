const user = {
    username: "uwaish",
    age : 22,

    welcome: function(){
        console.log(`${this.username},welcome to my website`);
        // console.log(this);
        
    }
}

// user.welcome()
// user.username ="sam"
// user.welcome()

// console.log(this);

// function one(){
//     let username = "uwaish"
//     console.log(this.username);
// }

// one()



// const chai = function (){
//     let username = "uwaish"
//     console.log(this.username);
// }


// const chai = () =>{
//     let username = "uwaish"
//     console.log(this);
// }

// chai()



//  implicit return

const addtwo = (num1,num2) =>  num1 + num2
console.log(addtwo(3,4));


const addtwo2 = (num1,num2) => ( num1 + num2)
console.log(addtwo2(3,4));

