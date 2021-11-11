/*1-
str = "origin"
cambiar las vocales por el numero 1
output => 1r1g1n
*/

let str = "origin"


str=str.replace(/[aeiou]/g,1);

console.log(str);