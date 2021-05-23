// //greeting, input name, greet player
var person = prompt("Welkom! wat is je naam?");
alert("Hey " + person);

//function math random - create a function with a number between 0-25
var random = Math.floor(Math.random()*25) + 1;
console.log(random);

// // //input number 
var number = prompt("Voer een nummer in van 0 tot 25 om te beginnen met raden...");
console.log(number);

if (number==random){
    alert("gefeliciteerd je hebt gewonnen");
    alert("Dag " + person + "tot de volgende keer");
   
} else {
    input = false;
    while (input===false){
    alert("Jammer, probeer het opnieuw");
    message=prompt('Enter een nieuw nummer');
} }