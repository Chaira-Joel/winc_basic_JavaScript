
// //maximum number check
const maxCheck= function(curNum){
   if (curNum <=100){
      console.log("come in")
      return true;
   } else{
      console.log("it is too busy now, please come back later")
      return false;
   }
}

// //age check
const ageCheck= function(ageNum){
   if (ageNum >=18){
      console.log("come in")
      return true;
   } else{
      console.log("this is a club for adults")
      return false;

   }
}

maxCheck(102);
ageCheck(17);


// //Optie 2
const brendaBot=function(ageTime,busyTime,maxTime){
if (ageTime <18)
console.log('This is an adults club');
else if (busyTime <100, maxTime <100)
console.log('please enter');
else
console.log('It is too crowded, please come back another time');
}

brendaBot(18,10,10);


//average calculator
function average(nums) {
    return nums.reduce((a, b) => (a + b)) / nums.length;
}
