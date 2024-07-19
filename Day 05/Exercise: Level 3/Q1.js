/*
The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

1) Sort the array and find the min and max age
2) Find the median age(one middle item or two middle items divided by two)
3) Find the average age(all items divided by number of items)
4) Find the range of the ages(max minus min)
5) Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
*/

// 1)
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log(ages)

//sorted array:- [19, 19, 20, 22, 24, 24, 24, 25, 25, 26]

//min age
console.log(ages[0])                  //19

//max age
let lastIndex = ages.length-1
console.log(ages[lastIndex])          //26


// 2)
console.log(ages[4,5])                //24


// 3) 
let sum = ages[0]+ages[1]+ages[2]+ages[3]+ages[4]+ages[5]+ages[6]+ages[7]+ages[8]+ages[9]
let avg = sum/10;
console.log(avg)                       //22.8


// 4)
let range = ages[lastIndex] - ages[0]
console.log(range)                     //7


// 5)
