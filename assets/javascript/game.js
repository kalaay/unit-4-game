
   
 var randomNum = Math.floor(Math.random() * 101) + 19;
 var blueChrystal = Math.floor((Math.random() * 11) + 1);
 var greenChrystal = Math.floor((Math.random() * 11) + 1);
 var redChrystal = Math.floor((Math.random() * 11) + 1);
 var purpleChrystal = Math.floor((Math.random() * 11) + 1);
 var wins = 0;
 var loses = 0;
 var totalScore = 0;  


function reset(){
     randomNum = Math.floor(Math.random() * 101) + 19;
     blueChrystal = Math.floor((Math.random() * 11) + 1);
     greenChrystal = Math.floor((Math.random() * 11) + 1);
     redChrystal = Math.floor((Math.random() * 11) + 1);
     purpleChrystal = Math.floor((Math.random() * 11) + 1);
     wins = 0;
     loses = 0;
     totalScore = 0;  
}

function winner(){
             alert("WINNER-GAGNON!!");
             wins++;       
             $("#winsDislpay").text("Wins:    " + wins);
             randomNum = Math.floor(Math.random() * 101) + 19;
             $("#randomNumDislpay").text(randomNum);
             totalScore = 0;
    }

        
function loser(){
             alert("YOU LOSE!");
             loses++;
             $("#losesDislpay").text("Loses: " + loses);
             randomNum = Math.floor(Math.random() * 101) + 19;
             $("#randomNumDislpay").text(randomNum);
             totalScore = 0;
    }

   
$(document).ready(function() {

$("#randomNumDislpay").text(randomNum);

$("#totalScoreDislpay").text(totalScore);

$("#winsDislpay").text ("Wins:  " + wins);

$("#losesDislpay").text("Loses: " + loses);

    console.log("Loses:  " + loses);
 
$("#totalScoreDislpay").text(totalScore);

    console.log("Total Score " + totalScore);

    console.log("Wins:  " + wins);


    console.log("blue value is  " + blueChrystal);


$("#bluestone").on ("click", function(){

    totalScore = totalScore + blueChrystal;

    $("#totalScoreDislpay").text(totalScore);

    console.log("total score  " + totalScore)
 
    if (totalScore == randomNum) {
        winner();
    }
     
    else if (totalScore > randomNum)  {
        loser();   
    }
 
 })
    

    console.log("green value  " + greenChrystal);

    $("#greenstone").on ("click", function(){

    totalScore = totalScore + greenChrystal;

    $("#totalScoreDislpay").text(totalScore);

    console.log("total score  " + totalScore)

    if (totalScore == randomNum) {
        winner();
    }
         
    else if (totalScore > randomNum)  {
        loser(); 
    }

 })

 

    console.log("red value  " + redChrystal);
 
    $("#red").on ("click", function(){

    totalScore = totalScore + redChrystal;

    $("#totalScoreDislpay").text(totalScore);

    console.log("total score" + totalScore)

    if (totalScore == randomNum) {
        winner();
    }
         
    else if (totalScore > randomNum)  {
        loser();  
    
    }

 })
 

    console.log("purple value " + purpleChrystal);
 
    $("#purple").on ("click", function(){

    totalScore = totalScore + purpleChrystal;

    $("#totalScoreDislpay").text(totalScore);

    console.log("total score" + totalScore)

    if (totalScore == randomNum) {
        winner();
    }

    else if (totalScore > randomNum)  {
        loser(); 
    
    }
 })

}); 

 //Displays the number of wins and loses on the screen