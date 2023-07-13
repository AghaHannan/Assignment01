type CarOptions = {
    [key: string]: any;
  };
  
  type Car = {
    manufacturer: string;
    modelName: string;
    options?: CarOptions;
  };
  
  function createCar(manufacturer: string, modelName: string, options?: CarOptions): Car {
    return { manufacturer, modelName, options };
  }
  
  const carInfo = createCar("Toyota", "Camry", { color: "blue", features: ["backup camera", "sunroof"] });
  
  console.log(carInfo);