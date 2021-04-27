
//Checking the age
const checkAge=function(age){
    if (age >=18){
        return true;
    } else return false;
};

//Greeting the person
const greetPerson=function(age){
    const adult = checkAge(age);
    if (adult){
        return 'Hello there';

    } else return 'Hi kiddo';{    
    }
}

// VAT CALCULATIONS 1


//Main function
const totalPrice=function(basePrice){
const vatAmount = vatCalculator(basePrice);
   return basePrice + vatAmount;
};

//Vat amount calculator
const vatCalculator=function(basePrice){
    const vatHigh = 0.21;
    return basePrice * vatHigh;
};

