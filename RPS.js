let userScore = 0;
let computerScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorep = document.querySelector("#user-score");
let computerScorep = document.querySelector("#computer-score");

let computerchoise = () => {
    let options = ["rock","paper","scissors"];
    let randomidx =  Math.floor(Math.random() * 3);
    return options[randomidx];
    //computer choise 

};
let draw = ()=>{
    
    msg.innerText=("Game Was Draw, Play Again");
    msg.style.background="blue"; 
};
let showWinner = (userwin, userchoice,compchoice) =>{
    if(userwin){
        userScore++;
        userScorep.innerText = userScore;
        msg.innerText =  `You Win  ${userchoice} Beats ${compchoice}`;
        msg.style.background="Green";   
        
        
    }else{
        computerScore++;
        computerScorep.innerText = computerScore;
        
        msg.innerText = `You Lose  ${compchoice} Beats Yours ${userchoice}`;
        msg.style.background="red";
    };
};
let playGame = (userchoice)=>{
    console.log("user Choice=",userchoice);//user select his choise

    let compchoice = computerchoise();
    console.log("computer Choise=",compchoice);//choise selected by computer 
   
    if (userchoice === compchoice){
        //game Draw
        draw();
    }else{
        let userwin=true;
        if(userchoice === "rock"){
            //scissors,paper
            userwin = compchoice === "paper" ?false : true;
        }else if (userchoice === "paper"){
            //rock,scissors
            userwin = compchoice === "scissors" ? false: true;
        } else{
            //rock,paper
            userwin = compchoice ==="rock" ?false:true;
        
        }
        
        showWinner(userwin,userchoice,compchoice);
    };

};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        let userchoice = choice.getAttribute("Id");
        playGame(userchoice);
    });
});