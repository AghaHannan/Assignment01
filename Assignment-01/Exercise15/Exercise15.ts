let guestlist: string[] = ["Albert Einstein", "Nikola Tesla", "Ada Lovelace"];

let newGuest: string = "Marie Curie";
const index = guestlist.indexOf("Nikola Tesla");//unable to attend
if (index > -1) {
  guestlist.splice(index, 1);
}
guestlist.push(newGuest);


for(let i = 0; i < guestlist.length; i++){
    console.log("Dear",guestlist[i],"\nYou are cordially invited to dinner at my place on Saturday. Please let me know if you can make it.\nBest regards,\nHannan\n");
  }

