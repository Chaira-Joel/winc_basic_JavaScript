
//While loop
let colors =["yellow", "blue", "red", "Orange"];
let i =0;
let text = " ";
while (colors[i]){
    text += colors[i] + "<br>";
    i++;
}

//For Loop
let colors =["yellow", "blue", "red", "Orange"];
for (i = 0; i < colors.length; i++){
    console.log(colors[i]);
}

//For Each Method 
let colors =["yellow", "blue", "red", "Orange"];
colors.forEach(element => console.log(element));


//Vragen
/*
1 Hoeveel regels neemt mijn for loop en mijn while loop in beslag?
For loop: 4 inc. de array
While loop: 7 incl. de array

2 Hoeveel regels neemt mijn forEach method in beslag? --> 2 regels 

3 Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
- het is duidelijker leesbaar
- het is sneller
- Ik vond de for loop al makkelijker leesbaar dan de while loop, omdat het korter is en beter te begrijpen


4 Kun je een array method gebruiken op een object? Het antwoord is nee.
Een array is een object. Objects hebben key en value pairs. 
5 Stel je hebt een object met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je tóch die 45 properties kunt console.loggen met een loop: Looping through the properties of an object.
6 Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. Ben je nu aan het itereren?
Nee*/ 

const person ={
    name:'Simon Samen',
    email: 'simon.samen@voormail.com',
    leeftijd: 30,
    geboren: '1/2/1999',
    actief: true,
};

for (const key in person){
    console.log(`${key}:${person[key]}`);

}