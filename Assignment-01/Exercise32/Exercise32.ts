let current_users: string[] = ['Eric', 'Agha', 'Sarah', 'Alice', 'Bob'];
let new_users: string[] = ['Mary', 'agha', 'David', 'sarah', 'Mark'];

for (let i = 0; i < new_users.length; i++) {
  let username_taken: boolean = false;
  for (let j = 0; j < current_users.length; j++) {
    if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
      username_taken = true;
      break;
    }
  }
  if (username_taken) {
    console.log(`Sorry, ${new_users[i]} is already taken. Please choose a different username.`);
  } else {
    console.log(`Congratulations, ${new_users[i]} is available.`);
  }
}