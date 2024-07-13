/*
Use the Date object to do the following activities

1) What is the year today?
2) What is the month today as a number?
3) What is the date today?
4) What is the day today as a number?
5) What is the hours now?
6) What is the minutes now?
7) Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/

//1)
const now = new Date()
console.log(now.getFullYear())     //2024

//2)
const now = new Date()
console.log(now.getMonth())        //6  because month is july.(0-11)

//3)
const now = new Date()
console.log(now.getDate())        //13  because the date is 13.

//4)
const now = new Date()
console.log(now.getDay())        //6   bacause today is saturday. (0-6)

//5)
const now = new Date()
console.log(now.getHours())      //21   because now time is 9.15 p.m.

//6)
const now = new Date()
console.log(now.getMinutes())    //15  because now time is 9.15 p.m.

//7)
const now = new Date()
console.log(now.getTime())       //1720885593792  this is the number of seconds passed from January 1, 1970 to July 13, 2024 09.18 p.m.
