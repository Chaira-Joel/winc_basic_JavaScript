const groteKnop = document.getElementById("mybutton");

groteKnop.addEventListener("click", function(){
    alert("Button is geklikt")
});

const lichaam = document.querySelector("body");
const kleurKnop = document.getElementById("changebutton");

//functie kleur veranderen
const toggleColor = function(){
    lichaam.classList.toggle("red-background");
};

kleurKnop.addEventListener("click", toggleColor)
   
