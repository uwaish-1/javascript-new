//  1st method
// function hello(){
//     console.log("hello");
    
// }

// setTimeout(hello,2000);



// 2nd ..
// setTimeout (()=>{
//     console.log("hello");
// },2000)


// console.log("one");
// console.log("two");
// setTimeout (()=>{
//     console.log("hello");
// },2000)

// console.log("three")



// ++++++++++++
// CALLBACKS

// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b,sumcallback){
//     sumcallback(a,b);
// }
// calculator(1,2,sum);


// calculator(1,2,(a,b)=>{
//     console.log(a+b);
// });


//  function getdata(dataid,getnextadata){
//     setTimeout(() =>{
//         console.log("data",dataid);    
//         if(getnextadata){
//             getnextadata();
//         }
//     },2000)
//  }

// data 1
// data 2
// data 3

// +++++++++++++++++++++++++++++++++++++++++++++++++++
// callback hell
// getdata(1,()=>{
//     getdata(2,()=>{
//         getdata(3);
//     })
// });



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// promise


// let promise = new Promise((resolve,reject) =>{
//     console.log("i am a promise");
    
//     // resolve("success");
//     reject("some error occured");
// });

// function getdata(dataid,getnextdata){
//     return new Promise((resolve,reject)=>{   
//        setTimeout(()=>{
//            console.log("data",dataid);
//            resolve("success")
//            if(getnextdata){
//             getnextdata();
//             }
//         },5000);
//     });
// }




// const getpromise = () =>{
//     return new Promise((resolve,reject) =>{
//         console.log("i am a promise");
//         resolve("success")
//     })
// }
// let promise = getpromise();
// promise.then((res)=>{
//     console.log("promise fullfilled",res);
    
// })

// promise.catch((err)=>{
//     console.log("rejected");
// })




function getdata(dataid){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataid);
            resolve("success")
        },4000)
    })
}

// getdata(1).then((res)=>{
//     console.log(res);
//     getdata(2).then((res)=>{
//         console.log(res);
        
//     })
// })

getdata(1).then((res)=>{
    return getdata(2);
})
.then((res)=>{
    // console.log(res);
    return getdata(3);
})
.then((res) =>{
    console.log(res);
    
})
