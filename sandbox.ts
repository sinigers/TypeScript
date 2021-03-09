let character='luigi';
let age=30;
let isBlackbelt=false;

// character=20;  char cant be Number
character='mario';

// age='youshi'; age cant be string
age=40;

// isBlackbelt='yes'; isBlackbelt cant be string

isBlackbelt=true;

const circ=(diameter:number) =>{
    return diameter*Math.PI;
}
// console.log(circ('hello')); cant be string = diameter: number
console.log(circ(7.5)); 