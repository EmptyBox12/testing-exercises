const { capitalize, reverseString, calculator } = require("./main");

test("capitalize first letter", () => {
  expect(capitalize("merhaba")).toBe("Merhaba");
});
test("reverse string", () => {
  expect(reverseString("abc")).toBe("cba");
});
test("calculator works", () => {
  expect(calculator.add(5, 1)).toBe(6);
  expect(calculator.subtract(5, 1)).toBe(4);
  expect(calculator.multiply(5, 2)).toBe(10);
  expect(calculator.divide(10, 2)).toBe(5);
});
