/*
First remove all the punctuations and change the string to array and count the number of words in the array

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(words)
console.log(words.length)

["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

13
*/

let txt = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const arr = txt.split(' ')
console.log(arr)

//output:- ['I', 'love', 'teaching', 'and', 'empowering', 'people.', 'I', 'teach', 'HTML,', 'CSS,', 'JS,', 'React,', 'Python.']


console.log(arr.length)            //output:- 13
