let guestlists: string[] = ["Albert Einstein", "Nikola Tesla", "Ada Lovelace"];

let newGuests: string[] = ["Murie Curie", "Stefen Hawkings", "Rional Messi"];
guestlists.unshift(newGuests[0])
guestlists.splice(Math.floor(guestlists.length / 2), 0, newGuests[1]);
guestlists.push(newGuests[2]);

console.log("\nFound a bigger dinner table!\n")
for(let i = 0; i < guestlists.length; i++){
    console.log("Dear",guestlists[i],"\nYou are cordially invited to dinner at my place on Saturday. Please let me know if you can make it.\nBest regards,\nHannan\n");
  }

