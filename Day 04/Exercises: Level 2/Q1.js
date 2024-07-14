/*
Write a code which can give grades to students according to theirs scores:
80-100, A
70-79, B
60-69, C
50-59, D
0-49, F
*/

let x = prompt("Enter your grade: ")
if (80<=x && x>=100)
{
    console.log("Grade A");
}
else if (70<=x && x<=79)
{
    console.log("Grade B");
}
else if (60<=x && x<=69)
{
    console.log("Grade C");
}
else if (50<=x && x<=59)
{
    console.log("Grade D");
}
else
{
    console.log("Grade F");
}

//output:- Grade D  (grade = 50)
