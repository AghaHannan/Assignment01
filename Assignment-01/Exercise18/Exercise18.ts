// Define the array of locations
const locations: string[] = ["Tokyo", "New York", "Paris", "Cape Town", "Sydney","Islamabad"];

// Print the array in its original order

console.log("Original order:", locations,"\n");


// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", [...locations].sort());

// Show that the array is still in its original order by printing it
console.log("Original order:", locations,"\n");

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", [...locations].sort().reverse());

// Show that the array is still in its original order by printing it again
console.log("Original order:", locations,"\n");

// Reverse the order of the list
locations.reverse();

// Print the array to show that its order has changed
console.log("Reversed order:", locations);

// Reverse the order of the list again
locations.reverse();

// Print the list to show it’s back to its original order
console.log("Original order:", locations,"\n");

// Sort the array so it’s stored in alphabetical order
locations.sort();

// Print the array to show that its order has been changed
console.log("Alphabetical order:", locations,"\n");

// Sort the array to change it so it’s stored in reverse alphabetical order
locations.sort((a, b) => b.localeCompare(a));

// Print the list to show that its order has changed
console.log("Reverse alphabetical order:", locations);