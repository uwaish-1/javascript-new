//  immediatly invoked function expressions (IIFE)


//  global scope ke polltuion se problem hoti hai
// usko remove krne ke liye IIFE ka use krte hai

(function chai(){
    console.log('DB connected');
})();

( function aurcode() {
    console.log('DB connected two');
})()



((name) =>{
    console.log(`DB ${name}`);
    
})('uwaish')