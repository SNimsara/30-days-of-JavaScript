//Use match() method to find all the a’s in 30 Days Of JavaScript

let sentence = '30 Days Of JavaScrip'
let letter = /a/gi
console.log(sentence.match(letter))

//output:- (3) ['a', 'a', 'a']
