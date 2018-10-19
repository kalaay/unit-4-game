
   
 var randomNum = Math.floor(Math.random() * 101) + 19;
 var blueChrystal = Math.floor((Math.random() * 11) + 1);
 var greenChrystal = Math.floor((Math.random() * 11) + 1);
 var redChrystal = Math.floor((Math.random() * 11) + 1);
 var purpleChrystal = Math.floor((Math.random() * 11) + 1);
 var wins = 0;
 var loses = 0;
 var totalScore = 0;  


    
    function winner(){
             alert("WINNER-GAGNON!!");
             wins++;
             reset();
             $("#winsDislpay").text("Wins:    " + wins);
            
    }
        
    function loser(){
             alert("YOU LOSE!");
             loses++;
             reset();
             $("#losesDislpay").text("Loses: " + loses);
    }

    function reset(){
        var randomNum = Math.floor(Math.random() * 101) + 19;
        var blueChrystal = Math.floor((Math.random() * 11) + 1);
        var greenChrystal = Math.floor((Math.random() * 11) + 1);
        var redChrystal = Math.floor((Math.random() * 11) + 1);
        var purpleChrystal = Math.floor((Math.random() * 11) + 1);
        var wins = 0;
        var loses = 0;
        var totalScore = 0;  
    }
   
$(document).ready(function() {

    $("#randomNumDislpay").text(randomNum);
    $("#totalScoreDislpay").text(totalScore);

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
        oser(); 
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
 
    $("#winsDislpay").text ("Wins:  " + wins);
    console.log("Wins:  " + wins);
 
    $("#losesDislpay").text("Loses: " + loses);
    console.log("Loses:  " + loses);
 
    $("#totalScoreDislpay").text(totalScore);
    console.log("Total Score " + totalScore);
