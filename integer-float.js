var number1 = 20;
var number2 = "20.5";
number2 = parseFloat(number2);
console.log(number1+number2);


var number3 = 30;
var number4 = "30.6";
number4 = parseInt(number4);
console.log(number3+number4);


var number5 = 5;
number5 = ""+number5;
console.log(typeof number5);

var number6 = 0.1;
var number7 = 0.8;
var total = number6+number7;
total = total.toFixed(1);
console.log(total);

