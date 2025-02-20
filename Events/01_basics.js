// 1. onlclick
// 2. ondblclick

// let btn1 = document.querySelector("")

// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a=2;
//     a++;
//     console.log(a);
// }

// let div = document.querySelector("div")
// div.onmouseover = () =>{
//     console.log("you are inside div");
// }

 

// Node.event = () =>{
//     // handle here
// }


// +++++++++++++++++++++++++
// event object

Node.event = (e) =>{
    // handle here
}
// e.target,e.type,e.clientx,e.clienty,type,timestamp
// ,defaultprevented,srcElement,altkey,etc

// ++++++++++++++++++++++++++++
// event listeners


// ++++++++
// 1. inline handling
// 2. node.event = () =>{}
// 3. eventlistener


// 3...
// Node.addeventlistener(event,callback);
// Node.removeEventListener(event,callback)

// note -> the callback reference should be same to remove


let  btn1 = document.querySelector("#btn1")
btn1.addEventListener("click",() =>{
    console.log("button1 was clicked");
})

 
// event propogation -->>>
// inside to outside

//  to stop -->> e.stopPropogation()
//  e.preventDefault
