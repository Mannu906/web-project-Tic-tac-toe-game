let turnO=true;
let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newgameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msgbtn=document.querySelector("#msg");
const winPatterns =[[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]];
const resetgame =() =>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");

};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("boxes was clicked");
        if(turnO){
            box.innerText='O';
                  turnO=false;

        }
        else{
            box.innerText='X';
            turnO=true;
        }
        box.disbled=true;
            checkwinner();
    });
});
const disableBoxes =() =>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes =() =>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText="";
    }
};
const showwinner=(winner) =>{
    msg.innerText=`Congratutions, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkwinner=() =>{
    for(let pattern of winPatterns){
        pos1Val=boxes[pattern[0]].innerText;
         pos2Val=boxes[pattern[1]].innerText;
          pos3Val=boxes[pattern[2]].innerText;
          if(pos1Val!=""&& pos2Val!=""&& pos3Val!=""){
            if(pos1Val===pos2Val&& pos2Val===pos3Val){
                console.log("winner",pos1Val);
                showwinner(pos1Val);
                
            }
          }


    }

};
newgameBtn.addEventListener("click",resetgame);
resetBtn.addEventListener("click",resetgame);