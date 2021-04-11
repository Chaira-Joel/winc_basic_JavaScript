
const age = 25;
const isFemale = true;
const driverStatus = "bob";
const nam = "Bram";
const totalAmount = 1023;

if (age >= 18) {
  console.log("Je mag naar binnen");

} 

else {
  console.log("Nope, je mag niet naar binnen");
}

//Deel 1 - opdracht 4
if (age >=18 && age <=25){
    console.log("Je krijgt 50% korting!")
}

if (isFemale) {
  console.log("Je ticket zegt dat je een vrouw bent!");
} else {
  console.log(
    "Helaas je hebt aangegeven op je ticket dat je een man bent, je mag niet naar binnen"
  );
}

if (driverStatus === "bob") {
  console.log("Je bent de bob, je mag autorijden");
} else {
  console.log("Je bent geen bob, hier met die autosleutels");
}

//Deel 2 oefening 4
if (nam =="Sarah" || nam =="Bram" ){
    console.log("Je krijgt een gratis biertje!");
}
else{
    console.log("je krijgt geen gratis biertje");
}

//Deel 3 oefening 4
if (totalAmount >=25){
    console.log("Je krijgt gratis bitterballen");
}

if (totalAmount >=50){
    console.log("Je krijgt een gratis portie nachos");
}

if (totalAmount >=100){
    console.log("Je krijgt een gratis flesje champagne");
}