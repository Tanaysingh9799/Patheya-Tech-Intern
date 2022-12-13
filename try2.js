
var sortJsonArray = require('sort-json-array');

console.log("Let Keyword------------------------------------------------------------")
let yx = 10;
let x = 20;
console.log(x,yx)

console.log("Spread Function -------------------------------------------------------")

const cars1 = ["Saab", "Volvo","BMW"];
const cars2 = ["Fiat", "Toyota"];

const combined = [cars1,...cars2]
console.log(combined);
console.log("Spread Function with Math.")
const numbers = [23,55,21,87,56];
const moreNumber = [88,9,7,8,3,65];
const combinenumbers = [numbers , ...moreNumber]
let maxValue = Math.max(...numbers);
let minvalue = Math.min(...numbers);
let newMinvalue = Math.min(...moreNumber);
let newmaxvalue = Math.max(...moreNumber);
console.log(numbers);
console.log(moreNumber);
console.log(combinenumbers)
console.log(maxValue);
console.log(minvalue);
console.log(newmaxvalue);
console.log(newMinvalue);

console.log("Arrow function-----------------------------------------------------------")

var xyz = (x , y) => {return  (x + y)}
console.log(xyz(20,30)) /// Printing method for Arrow Function 

console.log("For Loop------------------------------------------------------------------")/// For loop

var lang = "TANAYSINGH";
for( let x of lang)
{ /// For of Loop; in strings 
  console.log(x); ///// Prints out the Value of the objects of the string 
}

console.log("--------------------------------------------------------------------------")
var lang = "TANAYSINGH";
var lanarr = ["T","A","N","A","Y","S","I","N","G","H"];
for( let x in lang){ //// For in loop in strings
  console.log(x); ///// Prints out the index no. of the objects of the string 
}
for( let x in lanarr){ //// For in loop in array
  console.log(lanarr[x]); ///// Prints out the value no. of the objects of the string 
}


 console.log("Map function -------------------------------------------------------------")
 const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 560],
  ["mangoes", 3300],
  ["kivi", 900],
  ["watermelon", 700],
  ["tangerine", 400],
  ]);
console.log(fruits.get("watermelon"))
console.log(fruits.get("apples"))
console.log(fruits)


console.log("String and its operations------------------------------------------------- ");
let text = ("Hello world, welcome to the universe.")
console.log(text.includes("welcome"))
console.log(text.startsWith("Hello"))
console.log(text.endsWith("world"))
console.log("String and its operations--------------------------------------------------");


console.log("Array and its operations---------------------------------------------------")
let tryarray = ["tanay","dhruvi",88,99,100,"hello","yes","you"]
tryarray.pop()
console.log(tryarray)
tryarray.shift()
console.log(tryarray)
tryarray.push("Yellow")
console.log(tryarray)
tryarray.unshift()
console.log(tryarray)
const keys = tryarray.keys() /// Arrays.keys returns iterotable objects from array
for( let x of keys){
  x++;
  console.log(x)
}
for(let i=0 ; i<(tryarray.length) ; i++){
console.log(tryarray[i]);/// using for loop for printing elements of an array
}

tryarray.forEach(function(z){
  console.log(z)///using for loop forEach printing elements of an array
}) 

tryarray.splice(2, 1) /// removed 88 , or removed element starting from 2nd no.and total no. of element removed 1
console.log(tryarray)

console.log(tryarray.indexOf("dhruvi")) /// returns the index of elements of an array
const f = tryarray.entries();
for (let v in f){
  console.log(v++)
}

console.log("------------------------------------------------------------------------")

const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

for (let i = 0; i < cars.length; i++) {
 console.log(cars[i])

}
console.log("Array and its operations------------------------------------------------")

console.log("------------------------------------------------------------------------")
// JSON OBJECT USERPROFILE AND OPERATIONS ON IT 
 const UserProfile = {
      profilearr:[
        {
          userProfile1:"tanay", Age: 23, Pno : 12345654321, Address:"Baddi",
        },
        {
          userProfile2:"rushabh", Age: 22, Pno : 12345654321, Address:"Gujrat",
        },
        {
          userProfile3:"ritesh",Age: 24,Pno : 12345654321,Address:"Pune",
        },
        {
          userProfile4:"shubham", Age: 20,Pno : 12345654321,Address:"Sangli",
        },
        {
          userProfile5:"dhruvi",Age: 21,Pno : 12345654321,Address:"Baddi",
        },
        { 
          userProfile6:"divya",Age: 21,Pno : 12345654321,Address:"Baddi",
        },

       ]

 }
 console.log(UserProfile)
 console.log("Sorted Using Dependency(Array Inside of JSON object ) ",sortJsonArray(UserProfile.profilearr,'Age'));

 var NSorteddata = UserProfile.profilearr.sort((a, b) => {
  if (a.Age < b.Age) {
    return -1;
  }
 // if (a.Age > b.Age) return 1;
  return 0;
});
console.log("Sorted Using Function(Array Inside of JSON object )",NSorteddata)
 console.log("-------------------------------------------------------------------------")

  var Userprofile = 
  [
    {
      userProfile1:"tanay", Age: 23, Pno : 12345654321, Address:"Baddi", Nationality: "Indian",
    },
    {
      userProfile2:"rushabh", Age: 22, Pno : 12345654321, Address:"Gujrat",
    },
    {
      userProfile3:"ritesh",Age: 24,Pno : 12345654321,Address:"Pune",
    },
    {
      userProfile4:"shubham", Age: 20,Pno : 12345654321,Address:"Sangli",
    },
    {
      userProfile5:"dhruvi",Age: 21,Pno : 12345654321,Address:"Baddi",
    },
    { 
      userProfile6:"divya",Age: 21,Pno : 12345654321,Address:"Baddi",
    },
];
console.log("Sorted Using Dependency(JSON Object Inside of an Array) ",sortJsonArray(Userprofile,'Age'));

console.log("---------------------------------------------------------------------------")
var Sorteddata = Userprofile.sort((a, b) => {
  if (a.Age < b.Age) {
    return -1;
  }
 // if (a.Age > b.Age) return 1;
  return 0;
});
console.log("Sorted Using Function(JSON Object Inside of an Array)",Sorteddata)
 