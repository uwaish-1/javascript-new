// setTimeout(function(){
//     console.log("uwaish");
// },2000)

// const sayuwaish = function(){
//     console.log("uwaish");
// }

// const changetext = function(){
//     document.querySelector('h1').innerHTML = "best js series"
// }

// const chngeme = setTimeout(sayuwaish,2000)

// changetext(chngeme)


// const saydate = setInterval(function (){
//     console.log(str,Date.now());
// })

// const intervalid = setInterval(saydate,1000,'hi')



// +++++++++++++++++++++++++++

// generate a random colour

const randomcolor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'

    for(let i=0;i < 6;i++){
        color+= hex[(Math.floorMath.random() * 16)]
    }
    return color;
}
let intervalid
const startchangingcolor = function() {
    if(!intervalid){
    let intervalid = setInterval(changebgcolor,1000) 
    }
    function changebgcolor(){
    document.body.style.backgroundColor = randomcolor();
    }
};
const stopchangingcolor = function () {
    clearInterval(intervalid);
    intervalid = null;
};

document.querySelector('#start').addEventListener
('click',startchangingcolor);

document.querySelector('stop').addEventListener
('click',stopchangingcolor);

