let userCount=0;
let compCount=0;

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");


let userScore=document.querySelector("#user-score");
let compScore=document.querySelector("#comp-score");


const generateCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randomIndex=Math.floor(Math.random()*3);
    return options[randomIndex];
}

const drawGame=()=>{
    msg.innerText="Game is Draw.";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin==true){
        msg.innerText=`You Win. ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userCount+=1;
        userScore.innerText=userCount;

    }
    else{
        msg.innerText=`You Loose. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
        compCount+=1;
        compScore.innerText=compCount;
    }

};

const palyGame=(userChoice)=>{
    let compChoice=generateCompChoice();
    // consol.log("userchoice= ",userChoice);
    // console.log("comp choice= ",compChoice);
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //comp choice=paper,scissors
            userWin=(compChoice==="paper")?false:true;
        }
        else if(userChoice==="paper"){
             //comp choice=rock,scissors
             userWin=(compChoice==="scissors")?false:true;
        }
        else{
             //comp choice=paper,rock
             userWin=(compChoice==="rock")?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
        
    }

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        palyGame(userChoice);
    })
})