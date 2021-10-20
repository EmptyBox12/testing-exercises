function capitalize(text) {
  let textArray = text.split("");
  let firstLetter = textArray.shift();
  let upperCase = firstLetter.toUpperCase();
  textArray.unshift(upperCase);
  let newText = textArray.join("");
  return newText;
}

function reverseString(text) {
  let textArray = text.split("").reverse().join("");
  return textArray;
}

let calculator = {
  add: (number1, number2) => {
    return number1 + number2;
  },
  subtract: (number1, number2) => {
    return number1 - number2;
  },
  multiply: (number1, number2) => {
    return number1 * number2;
  },
  divide: (number1, number2) => {
    return number1 / number2;
  },
};

function ceaser(text) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let checkUpperCase = false;
  let newText = "";
  for (let i = 0; i < text.length; i++) {
    let letter = text.charAt(i);
    if (!/[a-zA-Z]/.test(letter)) {
      newText += letter;
    } else {
      if (letter == letter.toUpperCase()) {
        checkUpperCase = true;
        letter = letter.toLowerCase();
      }
      let index = alphabet.indexOf(letter);
      let newLetter = "";
      if (index + 1 >= alphabet.length) {
        newLetter = "a";
      } else {
        newLetter = alphabet[index + 1];
      }
      if (checkUpperCase == true) {
        newText += newLetter.toUpperCase();
        checkUpperCase = false;
      } else {
        newText += newLetter;
      }
    }
  }
  return newText;
}
function analyze(array) {
  let sum = array.reduce((prev,curr)=>{
    return prev+curr;
  },0);
  let average = sum/array.length;
  let min = Math.min(...array);
  let max = Math.max(...array);
  let length = array.length;
  return {average,min,max,length};
}

export { capitalize, reverseString, calculator, ceaser, analyze };
