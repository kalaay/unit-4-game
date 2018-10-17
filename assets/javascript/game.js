$(document).ready(function() {

   var randomNum = 0;
   var blueChrystal = 0;
   var greenChrystal =0;
   var redChrystal =0;
   var purpleChrystal =0;
   var wins = 0;
   var loses = 0;
   var totalScore = 0;

   //generate random number at the start of the game 
   randomNum = document.getElementById("randomNumDislpay").innerHTML =Math.floor(Math.random() * 101) + 19;

    
   blueChrystal = Math.floor((Math.random() * 12) + 1);
   console.log(blueChrystal);

   $("#bluestone").on ("click", function(){
    totalScore = totalScore + blueChrystal;
    $("#totalScoreDislpay").text(totalScore);
    console.log(totalScore)

    if (totalScore == randomNum) {
    winner();
    }
    
    else if (totalScore > randomNum)  {
        loser();
        
    }

})
   
   greenChrystal = Math.floor((Math.random() * 12) + 1);
   console.log(greenChrystal);

   $("#greenstone").on ("click", function(){
    totalScore = totalScore + greenChrystal;
    $("#totalScoreDislpay").text(totalScore);
    console.log(totalScore)
    if (totalScore == randomNum) {
        winner();
        }
        
        else if (totalScore > randomNum)  {
            loser();
            
        }
})

   redChrystal = Math.floor((Math.random() * 12) + 1);
   console.log(redChrystal);

   $("#red").on ("click", function(){
    totalScore = totalScore + redChrystal;
    $("#totalScoreDislpay").text(totalScore);
    console.log(totalScore)
    if (totalScore == randomNum) {
        winner();
        }
        
        else if (totalScore > randomNum)  {
            loser();
            
        }
})

   purpleChrystal = Math.floor((Math.random() * 12) + 1);
   console.log(purpleChrystal);

   $("#purple").on ("click", function(){
    totalScore = totalScore + purpleChrystal;
    $("#totalScoreDislpay").text(totalScore);
    console.log(totalScore)
    if (totalScore == randomNum) {
        winner();
        }
        
        else if (totalScore > randomNum)  {
            loser();
            
        }
})

// Displays the number of wins and loses on the screen

   $("#winsDislpay").append (wins);
   console.log(wins);

   $("#losesDislpay").append(loses);
   console.log(loses);

  // $("#totalScoreDislpay").append(totalScore);
   console.log(totalScore);
});

function winner(){
    alert("WINNER-GAGNON!!");
    win++;
    $("#winsDislpay").text(wins);
}

function loser(){
    alert("YOU LOSE!");
    loses++;
    $("#losesDislpay").text(loses);
}

function compare(){

    if (totalScore == randomNum) {
        winner();
        }
        
        else if (totalScore > randomNum)  {
            loser();
            
        }
}


