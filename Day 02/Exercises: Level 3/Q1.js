//'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

let sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let word = /love/gi
console.log(sentence.match(word))

//output:- (3) ['Love', 'love', 'love']
