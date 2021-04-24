// Function 1 expressions
const methodOne=function(a, b){
   return (((a**a) + (b**b)) ** ((a**a) + (b**b)));  
};
console.log(methodOne(2,3)); //returns 1.7069174130723234e+46

//function 2 declarations
function methodTwo(x,y){
    return (((x**x) + (y**y)) ** ((x**x) + (y**y)));  
}
methodTwo(2,3); //returns 1.7069174130723234e+46

//function 3 arrow function
const methodThree =(e,z) => {
    return (((e**e) + (z**z)) ** ((e**e) + (z**z))); 
};
methodThree(2,3); // returns 1.7069174130723234e+46