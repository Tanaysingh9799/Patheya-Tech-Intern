

//var moment = require('moment');
const upperCaseP = require('upper-case');
var moment = require('moment');

const x = function Sum(a,b,c){
    return(a+b+c);
}
console.log("Sum = ",x(20,30,50))

console.log("______________________________")

function hello(string) {
    changed  = upperCaseP.upperCase(string);
    //console.log(string);
    console.log(changed);//changes string to upper-case
}
hello("tanay");

console.log("______________________________")
moment().format();//Returns Current Date Day and Time 
moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); // Returns Current date and time in (dddd, MMMM Do YYYY, h:mm:ss) Format 
moment().year(2022).month('November').date(5); // Returns 5th of November 
moment().subtract(1, 'day').subtract(1, 'months').year(2022).hours('h').minutes('mm').seconds('ss'); // Returns 5th of November 2022 , But same time as of today





