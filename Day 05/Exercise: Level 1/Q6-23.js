// 6) Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']


// 7) Print the array using console.log()
console.log(itCompanies)            //output:- (7) ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']


// 8) Print the number of companies in the array
console.log(itCompanies.length)     //output:- 7


// 9) Print the first company, middle and last company
let firstCom = itCompanies[0]
let lastCom = itCompanies[6]
let midCom = itCompanies[3]

console.log(firstCom)                //output:- Facebook
console.log(lastCom)                 //output:- Amazon
console.log(midCom)                  //output:- Apple

// 10) Print out each company
console.log(itCompanies[0])          //output:- Facebook
console.log(itCompanies[1])          //output:- Google
console.log(itCompanies[2])          //output:- Microsoft
console.log(itCompanies[3])          //output:- Apple
console.log(itCompanies[4])          //output:- IBM
console.log(itCompanies[5])          //output:- Oracle
console.log(itCompanies[6])          //output:- Amazon


// 11)Change each company name to uppercase one by one and print them out
console.log(itCompanies[0].toUpperCase())          //output:- FACEBOOK
console.log(itCompanies[1].toUpperCase())          //output:- GOOGLE
console.log(itCompanies[2].toUpperCase())          //output:- MICROSOFT
console.log(itCompanies[3].toUpperCase())          //output:- APPLE
console.log(itCompanies[4].toUpperCase())          //output:- IBM
console.log(itCompanies[5].toUpperCase())          //output:- ORACLE
console.log(itCompanies[6].toUpperCase())          //output:- AMAZON


// 12) Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]} and ${itCompanies[6]} are big IT companies.`)
//output:- Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.


// 13) Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let company = itCompanies.indexOf('Facebook')
if (company === -1)
{
    console.log('company is not found')
}
else
{
    console.log(`company is ${itCompanies[0]}`)
}
//output:- company is Facebook


// 14) Filter out companies which have more than one 'o' without the filter method


// 15) Sort the array using sort() method
itCompanies.sort()
console.log(itCompanies)          //output:- (7) ['Amazon', 'Apple', 'Facebook', 'Google', 'IBM', 'Microsoft', 'Oracle']


// 16) Reverse the array using reverse() method
itCompanies.reverse()
console.log(itCompanies)          //output:- (7) ['Oracle', 'Microsoft', 'IBM', 'Google', 'Facebook', 'Apple', 'Amazon']


// 17) Slice out the first 3 companies from the array
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies.slice(0,3))        //output:- (3) ['Facebook', 'Google', 'Microsoft']


// 18) Slice out the last 3 companies from the array
console.log(itCompanies.slice(4,7))        //output:- (3) ['IBM', 'Oracle', 'Amazon']


// 19) Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(2,5))        //output:- (3) ['Microsoft', 'Apple', 'IBM']


// 20) Remove the first IT company from the array
itCompanies.shift()
console.log(itCompanies)                  //output:- ['Google', 'Microsoft', 'Apple', 'IBM', 'Oracle'


// 21) Remove the middle IT company or companies from the array
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
itCompanies.splice(2,3)
console.log(itCompanies)                  //output:- ['Facebook', 'Google', 'Oracle', 'Amazon']


// 22) Remove the last IT company from the array
itCompanies.pop()
console.log(itCompanies)                  //output:-  ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle']


// 23) Remove all IT companies
itCompanies.splice()
console.log(itCompanies)
