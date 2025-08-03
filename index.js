// let choices=document.querySelectorAll(".choice");
// let msg=document.querySelector("#msg");
// let msgContainer=document.querySelector(".msgContainer");
// let userScore=document.getElementById("userScore");
// let compScore=document.getElementById("computerScore");
// let reset=document.querySelector(".reset");
// let resetbtn=document.getElementById("resetButton");
// let userCount=0;
// let compCount=0;
// choices.forEach((choice)=>{
//     choice.addEventListener("click",()=>{
//         let userChoice=choice.getAttribute("id");
//         console.log("user clicked",userChoice);
//         reset.classList.add("reset");
//         (compMove(userChoice));
//     })
// })
// let compMove=((userChoice)=>{
//     let options=["Rock","Scissor","Paper"];
//     let compChoice=options[Math.floor((Math.random())*3)];
//     console.log(compChoice);
//     winner(userChoice,compChoice)
// })
// let winner=((userChoice,compChoice)=>{
//     let userWin=true;
//     if (userChoice===compChoice){
//         draw();
//     }
//     else{
//         if(userChoice==="Rock"){
//             if(compChoice==="Paper"){
//                 userWin=false;
//             }
//             else{
//                 userWin=true;
//             }
//         }
//         else if(userChoice==="Paper"){
//             if(compChoice==="Rock"){
//                 userWin=true;
//             }
//             else{
//                 userWin=false;
//             }
//         }
//         else{
//             if(compChoice==="Rock"){
//                 userWin=false;
//             }
//             else{
//                 userWin=true;
//             }
//         }
//     winName(userWin,userChoice,compChoice);
//     }
// })
// let draw=(()=>{
//     msgContainer.classList.remove("msgContainer");
//     msg.innerHTML=`Game is Draw<br>Play Again`;
//     msg.style.backgroundColor="blue";
// })
// let winName=((userWin,userChoice,compChoice)=>{
//     if(userWin){
//         msgContainer.classList.remove("msgContainer");
//         msg.innerHTML=`You Win!!! <br>Your ${userChoice} beats ${compChoice}`;
//         msg.style.backgroundColor="green";
//         userCount++;
//         userScore.innerText=`${userCount}`;
//     }
//     else{ 
//         msgContainer.classList.remove("msgContainer");
//         msg.innerHTML=`You Lose <br>${compChoice} beats your ${userChoice}`;
//         msg.style.backgroundColor="red";
//         compCount++;
//         compScore.innerText=`${compCount}`;
//     }

//     if((userCount==10)||(compCount==10)){
//         resetFeature();
//     }
// })

// let resetFeature=(()=>{
//     reset.classList.remove("reset");
//     choices.forEach((choice)=>{
//         choice.classList.add("disabled");
//     })
// })
// resetbtn.addEventListener("click",()=>{
//     compCount=0;
//     userCount=0;
//     compScore.innerText="0";
//     userScore.innerText="0";
//     msgContainer.classList.add("msgContainer");
//     choices.forEach((choice)=>{
//         choice.classList.remove("disabled");
//     })
// })

let choices=document.querySelectorAll(".choices");
choices.forEach((choice)=>{
    choice.addEventListener("mouseenter",()=>{
        choice.style.opacity="0.9";
        choice.style.cursor="pointer";
        choice.style.border="15px solid #081b31";
    })
})
choices.forEach((choice)=>{
    choice.addEventListener("mouseleave",()=>{
        choice.style.opacity="1";
        choice.style.cursor="default";
        choice.style.border="none";
    }) 
})
let userScore=document.querySelector("#userScore");
let computerScore=document.querySelector("#computerScore");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msgContainer");
let over=document.querySelector(".over");
let newGame=document.querySelector("#newGame");
let userCount=0;
let computerCount=0;
let compMove;
let userMove;
let gameOver=true;
let options=["rock","paper","scissors"];
let compChoice=()=>{
    compMove=options[Math.floor((Math.random())*3)];
    return (compMove);
}
let computerWon=()=>{
    computerCount++;
    computerScore.innerText=computerCount;
    msg.innerText="You Lose";
    msg.style.backgroundColor="red";
}
let userWon=()=>{
    userCount++;
    userScore.innerText=userCount;
    msg.innerText="You Won";
    msg.style.backgroundColor="green";
}
let draw=()=>{
    msg.innerText="The game is draw";
    msg.style.backgroundColor="#0f1111";
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        if (gameOver){userMove=choice.getAttribute("id");
            compChoice();
            if(userMove==="rock"&& compMove==="paper"){
                computerWon();
            }
            else if(userMove==="rock"&& compMove==="scissors"){
                userWon();
            }
            else if(userMove==="paper"&& compMove==="rock"){
                userWon();
            }
            else if(userMove==="paper"&& compMove==="scissors"){
                computerWon();
            }
            else if(userMove==="scissors"&& compMove==="paper"){
                computerWon();
            }
            else if(userMove==="scissors"&& compMove==="rock"){
                userWon();
            }
            else{
                draw();
            }
    
            if(userCount===5 || computerCount===5){
                if(userCount>computerCount){
                    msg.innerText="Congratulations !!!!!!\nYou won the game ";
                    msg.style.backgroundColor="green";
                    over.setAttribute("class","over");
                    gameOver=false;
                }
                else{
                    msg.innerText="Sorry \nComputer won the game !!!!!!";
                    msg.style.backgroundColor="red";
                    over.setAttribute("class","over");
                    gameOver=false;
                }
            }}
    })
})
newGame.addEventListener("click",()=>{
    gameOver=true;
    userCount=0;
    computerCount=0;
    over.setAttribute("class","over hide");
    userScore.innerText=userCount;
    computerScore.innerText=computerCount;
    msg.innerText="Play Your Move";
    msg.style.backgroundColor="#0f1111";
})
