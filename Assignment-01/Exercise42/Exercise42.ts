function showMagicians(magicians: string[]): void {
    console.log(magicians.join('\n'));
  }
  
  function makeGreat(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
      magicians[i] = `the Great ${magicians[i]}`;
    }
  }
  
  const magicianNames = ["Harry Houdini", "Chahat Fateh Ali Khan", "Penn Jillette", "Teller"];
  
  makeGreat(magicianNames);
  showMagicians(magicianNames);