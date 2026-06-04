class CelsiusSensor {
  constructor(private celsius: number) {}
  getCelsius(): number {
    return this.celsius;
  }
}

interface FahrenheitReader {
  fahrenheit(): number;
}

class CelsiusToFahrenheitAdapter implements FahrenheitReader {
  constructor(private source: CelsiusSensor) {}
  fahrenheit(): number {
    return (this.source.getCelsius() * 9) / 5 + 32;
  }
}

const reader: FahrenheitReader = new CelsiusToFahrenheitAdapter(new CelsiusSensor(100));
console.log(reader.fahrenheit());
