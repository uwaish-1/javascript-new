let boxes = document.querySelectorAll(".box")
let resebtn = document.querySelector("#reset-btn")
let newbtn = document.querySelector("#new-btn")
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turnO = true;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame = () =>{
    turnO = true;
    enableboxes();
    msgcontainer.classList.add("hide")
}



boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        // console.log("box was clicked");
        if(turnO){
            box.innerText = "O"
            turnO = false;
        }
        else{
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true

        checkwinner();
    });
});

const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true
    }
}

const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    msg.innerText = `congratulations, winner is ${winner}`;
    msgcontainer.classList.remove("hide")
    disableboxes();
};

const checkwinner = () => {
    for(let pattern of winpatterns){
        // console.log(
        // boxes[pattern[0]].innerText,
        // boxes[pattern[1]].innerText,
        // boxes[pattern[2]].innerText);
        
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("winner");
                showWinner(pos1);
            }
        }
    }
};


newbtn.addEventListener("click",resetgame)
resebtn.addEventListener("click",resetgame)