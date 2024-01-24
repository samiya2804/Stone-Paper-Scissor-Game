let youscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userscorecard = document.querySelector("#user");
const compscorecard = document.querySelector("#comp");

//computer's choice
const generatecomputerchoice =() =>{
    const options =["rock","paper","scissors"];
   const randomidx= Math.floor(Math.random()*3);
   return options[randomidx];
};
const draw =() => {
    console.log("game is draw.");
    msg.innerText =" Game Draw! Play Again";
    msg.style.backgroundColor = "blue";
}
const showwin = (userwin,userchoice,compchoice) =>{
    if(userwin){
        msg.innerText =`You Win! Your ${userchoice} wins ${compchoice}`;
        msg.style.backgroundColor = "green";
        youscore++;
        userscorecard.innerText= youscore;
       }
    else{
        msg.innerText =`You Lose! ${userchoice} lose then ${compchoice}`;
        msg.style.backgroundColor = "red";
        compscore++;
        compscorecard.innerText = compscore;
    }
};
const playgame= (userchoice) =>{
   console.log("user choice =", userchoice);
   //Generated computer choice
   const compchoice = generatecomputerchoice();
   console.log("comp choice =", compchoice);
   //user and computer fighting
   if(userchoice===compchoice){
    draw();
   } else {
    let userwin = true;
    if(userchoice === "rock"){
        //paper,scissors
     userwin = compchoice === "paper" ? false : true;
    }else if(userchoice==="paper") {
         //rock,scissors
     userwin = compchoice=== "scissors" ? false: true;
    } else {
        //paper,rock
        userwin= compchoice ==="rock" ? false:true;
    }
    //user win or computer
    showwin(userwin,userchoice,compchoice);
   }
};
//userchoice
choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});