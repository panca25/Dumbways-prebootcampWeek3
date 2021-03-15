// week 1 task 6 odd even 
let input = [1,2,3,4,5,6,7,8]
let isOddEven = (arr) = input.map(number => number % 2 !== 0 ? document.write("ganjil,") : document.write("genap,"));

isOddEven(input);


// -----------------------------------------------------------------------------------------------------------------

// week 1 task 11 study case 2
// - Input : [80,45,30,45,70,70,80,90,91,88,80,83]
// - Output : Nilai Min, Nilai Max, Nilai Rata-rata

// let input = [80,45,30,45,70,70,80,90,91,88,80,83]
// const arrMin = (arr) => Math.min(...arr);
// const arrMax = (arr) => Math.max(...arr);
// const arrAverage = arr => arr.reduce((a,b) => a + b, 0) / arr.length

// document.write("Nilai Min: " + (arrMin(input)) + "<br>" + "Nilai Max: " + (arrMax(input)) + "<br>" + "Nilai rata-rata: " + (arrAverage(input)))


// -----------------------------------------------------------------------------------------------------------------

// week 2 task 5 vowel check
// const vowels = ["a", "i", "u", "e", "o"];

// let isVowel = (char) => vowels.includes(char) ? `${char} adalah huruf vokal` : `${char} adalah huruf vokal`;

// document.write(isVowel("O".toLowerCase()));

// -----------------------------------------------------------------------------------------------------------------

// week 2 task 7
// Buatlah sebuah function untuk menghilangkan sebuah array sesuai dengan inputan kedua.

// ```
// Input-1 : [“a”,“b”,“c”,“d”,“e”]
// Input-2 : c
 
// Output: [“a”,“b”,“d”,“e”]
// ```

// let input1 = ["a", "b", "c", "d", "e"];
// let input2 = "c";

// document.write(input1.filter((index) => index != input2))
