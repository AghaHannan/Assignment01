function describe_city(city: string, country: string = "USA"): void {
    console.log(`${city} is in ${country}.`);
  }
  
  describe_city("New York"); // default country
  describe_city("Rawalpindi", "Pakistan"); // custom country
  describe_city("Los Angeles"); // default country