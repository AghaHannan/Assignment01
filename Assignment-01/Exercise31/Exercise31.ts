let usernames: string[] = ['admin', 'Agha', 'Hanzala', 'Sarah', 'Ali'];
//uncomment to verify statement
/*if (usernames.length === 0) {
    console.log("We need to find some users!");
}*/

for (let i = 0; i < usernames.length; i++) {
  if (usernames[i] === 'admin') {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
  }
}

if (usernames.length === 0) {
    console.log("We need to find some users!");}