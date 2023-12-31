let boxes=document.querySelectorAll(".box");
let rbtn=document.querySelector("#reset");
let nbtn=document.querySelector("#newg");
let msgcontainer=document.querySelectorAll(".msgc");
let message=document.querySelector("#msg");
let turn1=true;

const winP=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const resetGame=()=>{
    turn1=true;
    enableBoxes();
    msgcontainer.forEach(container => container.classList.add("hide"));

}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn1){
            box.innerText="X";
            turn1=false;
        }
        else{
            box.innerText="O";
            turn1=true;
        }
        box.disabled=true;
        check();
    });
});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }

}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }

}
const showWinner = (w) => {
    message.innerText = 'Congratulations!! ';
    msgcontainer.forEach(container => container.classList.remove("hide"));
    message.classList.add("glitter-animation");
    disableBoxes();


};
const check=()=>{
for(let i of winP){
    let p1=boxes[i[0]].innerText;
    let p2=boxes[i[1]].innerText;
    let p3=boxes[i[2]].innerText;
    if(p1!="" && p2!="" && p3!="")
    {
        if(p1===p2 && p2===p3){
           console.log("winner"); 
          showWinner(p1);
        }
    }
}
};
nbtn.addEventListener("click",resetGame);
rbtn.addEventListener("click",resetGame);