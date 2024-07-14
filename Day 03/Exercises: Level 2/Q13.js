/*
Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

Enter birth year: 1995
You are 25. You are old enough to drive

Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years.
*/

let age = prompt("enter your age: ")
if ( age >= 18)
{
    console.log(`You are ${age}. You are old enough to drive.`)
}
else
{
    console.log(`You are ${age}. You will be allowed to drive after ${18-age} years.`)
}


/*
output:- 
You are 22. You are old enough to drive. (age= 22)
You are 12. You will be allowed to drive after 6 years. (age= 12)
*/
