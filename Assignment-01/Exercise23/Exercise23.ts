let age = 18;
let isCitizen = true;
let hasID = false;
let Name = "Agha";
let grade = 80;

console.log("Is age greater than or equal to 18? I predict True.");
console.log(age >= 18);

console.log("Is the person a citizen and has an ID? I predict False.");
console.log(isCitizen && hasID);

console.log("Is the person's name John? I predict True.");
console.log(Name == "John");

console.log("Is the person's grade greater than or equal to 60? I predict True.");
console.log(grade >= 60);

console.log("Is the person's age less than 21? I predict True.");
console.log(age < 21);

console.log("Is the person's name not John? I predict False.");
console.log(Name != "Agha");

console.log("Is the person's grade less than 50? I predict False.");
console.log(grade < 50);

console.log("Is the person not a citizen or does not have an ID? I predict True.");
console.log(!isCitizen || !hasID);

console.log("Is the person's age equal to 21? I predict False.");
console.log(age == 21);