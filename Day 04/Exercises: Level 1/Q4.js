/*
Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

Enter a number: 2
2 is an even number

Enter a number: 9
9 is is an odd number.
*/

let a = prompt("Enter a number: ")
if (a % 2 == 0)
{
    console.log(`${a} is an even number.`)
}
else
{
    console.log(`${a} is an odd number.`)
}

//5 is an odd number. (a = 5)
//8 is an even number. (a = 8)
