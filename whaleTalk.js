// Project (Whale talk)
// This project converts users speech to that of a whale

// This is a project on loops
let input = "Diva under the umbrella";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

// Nested for loops for comparison
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(vowels[j]);
      console.log(resultArray);

      //   An if statement to double the vowel 'e' and 'u'
      if (input[i] === "e" || input[i] === "u") {
        resultArray.push(input[i]);
        console.log(resultArray);
        console.log(resultArray.join("").toUpperCase());
      }

      // console.log('i is ' + i);
      // console.log('j is ' + j);
    }
  }
}
