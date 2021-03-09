var character = 'luigi';
var age = 30;
var isBlackbelt = false;
// character=20;  char cant be Number
character = 'mario';
// age='youshi'; age cant be string
age = 40;
// isBlackbelt='yes'; isBlackbelt cant be string
isBlackbelt = true;
var circ = function (diameter) {
    return diameter * Math.PI;
};
// console.log(circ('hello')); cant be string = diameter: number
console.log(circ(7.5));
