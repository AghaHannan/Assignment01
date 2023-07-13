let string1 = "hello";
let string2 = "world";
let number1 = 10;
let number2 = 5;
let array1 = [1, 2, 3, 4, 5];
let array2 = ["apple", "banana", "orange"];

console.log("Is string1 equal to 'hello'? " + (string1 == "hello"));
console.log("Is string2 not equal to 'hello'? " + (string2 != "hello"));
console.log("Is number1 greater than number2? " + (number1 > number2));
console.log("Is number2 less than or equal to 5? " + (number2 <= 5));
console.log("Is number1 between 5 and 15? " + (number1 > 5 && number1 < 15));
console.log("Is string1 equal to 'hello' and string2 equal to 'world'? " + (string1 == "hello" && string2 == "world"));
console.log("Is the number 3 in array1? " + (array1.includes(3)));
console.log("Is the string 'grape' in array2? " + (array2.includes("grape")));