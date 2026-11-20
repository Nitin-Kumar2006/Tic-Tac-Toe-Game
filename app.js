let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO =true;
const winPatterns = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [2,4,6]
];
const resetGame = ()=>{
  turnO=true;
  enableboxes();
  msgcontainer.classList.add("hide")
}
boxes.forEach((box) => {
  box.addEventListener("click",()=>{
    if(turnO){ //agar palayer o ka turn to O print otherwise X print on the boxes
      box.innerText = "O";
      turnO=false;
    }else{
      box.innerText="X";
      turnO=true;
    }
    box.disabled = true;
    checkwinner();
  });
});
const disabledboxes = ()=>{
  for(let box of boxes){
    box.disabled=true;
  }
}
const enableboxes =()=> {
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
}
const showwinner=(winner)=>{
  msg.innerText = `Congratulation !,Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disabledboxes();
}
const checkwinner = ()=>{
  for(let pattern of winPatterns){
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val =  boxes[pattern[1]].innerText;
    let pos3val =  boxes[pattern[2]].innerText;
    if(pos1val!=""&& pos2val!=""&& pos3val!=""){
      if(pos1val===pos2val &&pos2val===pos3val){
        showwinner(pos1val)
      }
    }
  }
}
newGamebtn.addEventListener("click",resetGame)
resetbtn.addEventListener("click",resetGame)