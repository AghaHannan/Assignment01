function make_album(artist: string, title: string, tracks?: number): object {
    let album = {
      artist: artist,
      title: title,
      tracks: tracks
    };

 
    return album;
  }
  
  console.log(make_album("Taylor Swift", "1989"));
  console.log(make_album("Ed Sheeran", "÷ (Divide)", 16));
  console.log(make_album("Adele", "21"));
  
  // calling with tracks parameter
  console.log(make_album("Imagine Dragons", "Night Visions", 12));