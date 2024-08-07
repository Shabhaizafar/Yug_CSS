// What a String in a JS : 
// - Collection of Multiple Charcters.


// Double Quote : 
var str1 = "Javascript";
console.log(str1);
console.log(typeof(str1));


// Single Quote : 
var str2 = 'This a Javascript';
console.log(str2);
console.log(typeof(str2));


//Back-tick  - ``
var str3 = `Hello Everyone`;
console.log(str3);
console.log(typeof(str3));



// Index : 
//length    12345678910
var str4 = "Javascript zafar";
//index     0123456789

console.log(str4[0]);  //J
console.log(str4[5]); //c


//Length : 
console.log(str4.length); //10

console.log(str4[9]);//t


// Access Last Char : 
console.log(str4[str4.length-1]);//t



var str5 = "Raj";
var str6 = "Sharma";


//Concatination of Multiple String
var str7 = str5 + str6;
console.log(str7);




///////////////////
// String Template : 

var fname = "Raj";
var lname = "Shah";
var age = 13;

console.log("My name is Aryan Shah.and I am 13 years old.");
console.log("My name is",fname,lname,".and I am",age," years old.");

console.log(`My name is ${fname} ${lname}.and I am ${age} years old. `);