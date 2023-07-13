function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`You have ordered a ${size} shirt with the message "${message}" printed on it.`);
  }
  
  make_shirt(); // large shirt with default message
  make_shirt("Medium"); // medium shirt with default message
  make_shirt("Small", "TypeScript is awesome!"); // small shirt with custom message