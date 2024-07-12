//Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let sentence = 'You cannot end a sentence with because because because is a conjunction'
let word = /because/gi
console.log(sentence.match(word))

//output:- (3) ['because', 'because', 'because']
