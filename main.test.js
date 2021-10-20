import { capitalize, reverseString, calculator, ceaser, analyze } from "./main";

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
test("ceaser works", ()=>{
  expect(ceaser("abc")).toBe("bcd");
});
test("ceaser cares case", ()=>{
  expect(ceaser("AbC")).toBe("BcD");
});
test("ceaser cares z-a",()=>{
  expect(ceaser("z")).toBe("a");
});
test("ceaser cares punctuation and space",()=>{
  expect(ceaser("a,b c")).toBe("b,c d");
});
test("analyze works",()=>{
  expect(analyze([1,2,3])).toEqual({
    average:2,
    min:1,
    max:3,
    length:3
  });
});