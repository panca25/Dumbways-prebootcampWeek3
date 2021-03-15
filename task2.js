// Task 2 week 3
// - Input: “hello”, “hello world oke lorem ipsum dolor. 
// Aku mau belajar react.js. 
// Hey kamu mau kemana?. 
// Kapan kita jalan bareng lagi. 
// Hello all.

// - Output: hello world oke lorem ipsum dolor, Hello all.

let inputWord = "hello"
let inputSentences = [
    "hello world oke lorem ipsum dolor.", "Aku mau belajar react.js.",
    "Hey kamu mau kemana?.", "Kapan kita jalan bareng lagi.", "hello all."
]
let isInclude = (arr) = inputSentences.map(sentence => sentence.includes(inputWord)? document.write(sentence + " "): 0);

isInclude();


