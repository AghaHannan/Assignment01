let guestLists: string[] = ["Albert Einstein", "Nikola Tesla", "Ada Lovelace"];

let newGuest: string[] = ["Murie Curie", "Stefen Hawkings", "Rional Messi"];
guestLists.unshift(newGuest[0])
guestLists.splice(Math.floor(guestLists.length / 2), 0, newGuest[1]);
guestLists.push(newGuest[2]);



console.log("Sorry, can invite only two people for dinner!!\n");
var i:number;
for( i = ((guestLists.length)-1) ; i >= 2  ; i--)
{
    console.log("Sorry ",guestLists[i],"No Space Available\n"); guestLists.pop();
}

for(let i = 0; i < guestLists.length; i++){
    console.log("Dear",guestLists[i],"\nYou are still invited\nBest regards,\nHannan\n"); 
  }
  guestLists.pop();guestLists.pop();