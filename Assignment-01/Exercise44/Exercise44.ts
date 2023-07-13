function makeSandwich(...ingredients: string[]): void {
    console.log(`Sandwich with ${ingredients.join(', ')} is being ordered.`);
  }
  
  makeSandwich("lettuce", "tomato", "meat");
  makeSandwich("turkey", "cheese");
  makeSandwich("peanut butter", "jelly", "bread");