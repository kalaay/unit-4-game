$(document).ready(function() {

   var randomNum =0;
   var blueChrystal;
   var greenChrystal;
   var redChrystal;
   var purpleChrystal;
   var wins = 0;
   var loses = 1;
   var totalScore = 40;

   // generate random number at the start of the game 
   randomNum = Math.floor((Math.random() * 120) + 19);
   $("#randomNumDislpay").text(randomNum);

   console.log(randomNum);

   blueChrystal = Math.floor((Math.random() * 12) + 1);
   console.log(blueChrystal);
   $("#bluestone").text(blueChrystal);

   greenChrystal = Math.floor((Math.random() * 12) + 1);
   console.log(greenChrystal);

   redChrystal = Math.floor((Math.random() * 12) + 1);
   console.log(redChrystal);

   purpleChrystal = Math.floor((Math.random() * 12) + 1);
   console.log(purpleChrystal);

   $("#winsDislpay").text(wins);
   console.log(wins);

   $("#losesDislpay").text(loses);
   console.log(loses);

   $("#totalScoreDislpay").text(totalScore);
   console.log(totalScore);




});
