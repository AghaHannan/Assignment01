function showMagicians(magicians: string[]): void {
    console.log(magicians.join('\n'));
  }
  
  function makeGreat(magicians: string[]): string[] {
    const greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
      greatMagicians.push(`the Great ${magicians[i]}`);
    }
    return greatMagicians;
  }
  
  function getGreatMagicians(magicians: string[]): string[] {
    const copyOfMagicians = magicians.slice();
    return makeGreat(copyOfMagicians);
  }
  
  const magicianNames = ["Harry Houdini", "Chahat Fateh Ali Khan", "Penn Jillette", "Teller"];
  
  const greatMagicianNames = getGreatMagicians(magicianNames);
  
  console.log("Original magicians:");
  showMagicians(magicianNames);
  
  console.log("\nGreat magicians:");
  showMagicians(greatMagicianNames);