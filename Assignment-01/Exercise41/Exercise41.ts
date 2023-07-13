function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
  }
  
  const magician_names: string[] = ["Harry Houdini", "Chahet Fateh", "Penn Jillette", "Teller"];
  
  show_magicians(magician_names);