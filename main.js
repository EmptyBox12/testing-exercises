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
  
  
}
module.exports = { capitalize, reverseString, calculator };
