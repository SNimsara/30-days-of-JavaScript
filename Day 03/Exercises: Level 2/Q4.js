//Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

const PI = 3.14
let r = prompt("Enter radius of the circle: ")
let area = (PI*r*r)
let c = (2*PI*r)

console.log(area)      //153.86 (r=7)
console.log(c)         //43.96
