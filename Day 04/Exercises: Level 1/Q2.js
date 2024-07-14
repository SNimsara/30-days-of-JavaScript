/*
Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

Enter your age: 30
You are 5 years older than me.
*/

let myAge = 23
let yourAge = prompt("enter your age: ")
if ( myAge > yourAge)
{
    console.log(`I am ${myAge-yourAge} years older than you.`)
}
else
{
    console.log(`You are ${yourAge-myAge} years older than me.`)
}

//You are 10 years older than me. (your age = 30)
//I am 3 years older than you. (your age = 20)
