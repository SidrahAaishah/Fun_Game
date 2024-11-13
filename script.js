let boxes = document.querySelectorAll(".box");
let reset = document.getElementById("reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.getElementById("msg");
let newBtn = document.getElementById("new-btn");
let turnX =true //playerX playerY
/* winning patterns
0,1,2
3,4,5
6,7,8
0,3,6
1,4,7
2,5,8
0,4,8
2,4,6*/
const winpatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnX){
            box.innerText = "X";
            turnX=false;
        }else{
            box.innerText = "O";
            turnX=true;
        }
        box.disabled = true;
        checkWinner();
    })
});

const enable =() =>{
 boxes.forEach((box) =>{
 box.disabled=false;
 box.innerText="";
 });
}

const resetGame = () =>{
    turnX=true;
    enable();
    msgContainer.classList.add("hide");
}

const showWinner = () =>{
    msg.innerText = "Congratulations you won!";
    msgContainer.classList.remove("hide");
}

const checkWinner = () =>{
    for(let pattern of winpatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                boxes.forEach((box)=>{
                    box.disabled=true;
                    showWinner(pos1Val);
                });

            }
        }
    }
}

newBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);