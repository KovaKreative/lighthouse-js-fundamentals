function isOdd(num){
  return num % 2 !== 0;
}

let odd = 3;
let even = 8;

console.log(odd + " is odd: " + isOdd(odd));
console.log(even + " is odd: " + isOdd(even));
