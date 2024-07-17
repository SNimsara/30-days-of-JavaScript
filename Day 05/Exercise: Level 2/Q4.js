//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

const countries = ['Sri Lanka' , 'Canada' , 'Australia']
let index = countries.indexOf('Ethiopia')
if (index === -1)
{
    countries.push('Ethiopia')
    console.log(countries)
}
else
{
    console.log(Ethiopia.toUpper)
}

/* output:-
Ethiopia doesn't exists in the array:- ['Sri Lanka', 'Canada', 'Australia', 'Ethiopia']
Ethiopia exists in the array:- ETHIOPIA
