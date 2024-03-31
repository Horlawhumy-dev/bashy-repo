// this is single comment
/*
    This is
    multiline
    comment
*/
//Scoping
// Global referencing  - applies to external part of function
// Local referencing - applies to inner function
//  body
//  Stack and heap memory
 
var myName //declaration
console.log(myName);
 myName = "Arafat"; //initialization
 
 var herName = "Bashirat";
 console.log(herName);
 herName = "Halimat";
 console.log(herName);
 
 const PI = 3.142;
 
 let piValue = 3.140;
//  piValue = 3.142;
 
 function update() {
    //  piValue +=1
    console.log(piValue);
    // ++piValue; // prefix ncrement
    let samePiValue =  ++piValue;;//postfix increment
    console.log(samePiValue);
    console.log(piValue);
    let newVal = piValue;
    // {
    //     let pi = newVal;
    //     console.log(pi);
    // }
    // console.log(pi);
 }
 
 update()
 
 
 console.log(samePiValue);
 
//  console.log(piValue);
 
