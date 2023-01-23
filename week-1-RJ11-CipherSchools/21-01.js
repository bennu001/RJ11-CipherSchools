
// in case of var we can re assign and re deaclare from one type to another herre most strict os const and then let and then comes var these var are gobally scoped
// were let and const are blocked scoped

// var myName = "bennu";
// console.log(myName);
//created an array

// const myName =[];
// console.log(myName);
// myName.append("john");
// console.log(myName);

// let myName ="bennu";
// console.log(myName);

// here let is same as const but in let we can re assign the value

// myName ="alex";
// console.log(myName); 


// ************** String interpolation *************

// let firstName ="Bennu";
// let lastName ="Sai";
// console.log(firstName + " " +lastName);
// let fullName=`${firstName} ${lastName}`;
// console.log(fullName);


// ********** Default params ************

// function addTwoNumbers(num1, num2) {
//     return num1 + num2;

// }
// console.log(addTwoNumbers(1,2));


// ----Arrow functions----

// let addTwoNumbers =(num1, num2) =>  num1 + num2;

// console.log(addTwoNumbers(1,2));


// ########### Rest and Spread Operator #########
// These rest and operatorrs are applicable to arrays and objects

// let array =[5,10,15,20,25];
// //spread opera--> ...
// console.log(...array);


//rest ---> ... 
// let testFunction =(...args) =>{
//     console.log(args)
// };


// $$$$$$$$$$$$$  Objects $$$$$$$$$$$$

let objects = {
    name:"bennu",
    age:20,
    city:"new york",
};

let object2 ={...objects}

console.log(object2);