let guestlists: string[] = ["Albert Einstein", "Nikola Tesla", "Ada Lovelace"];

let newGuests: string[] = ["Murie Curie", "Stefen Hawkings", "Rional Messi"];
guestlists.unshift(newGuests[0])
guestlists.splice(Math.floor(guestlists.length / 2), 0, newGuests[1]);
guestlists.push(newGuests[2]);

console.log("\nNumber of People invited to dinner is: ",guestlists.length)

