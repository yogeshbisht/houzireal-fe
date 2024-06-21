const salePrices = (): string[] => {
  const priceValues: string[] = [];
  for (let value = 50000; value < 500000; value += 50000) {
    priceValues.push(value.toString());
  }
  for (let value = 500000; value < 1000000; value += 100000) {
    priceValues.push(value.toString());
  }
  for (let value = 1000000; value < 6000000; value += 1000000) {
    priceValues.push(value.toString());
  }
  return priceValues;
};

const rentPrices = (): string[] => {
  const priceValues: string[] = [];
  for (let value = 500; value <= 1500; value += 200) {
    priceValues.push(value.toString());
  }
  for (let value = 2000; value <= 5000; value += 1000) {
    priceValues.push(value.toString());
  }
  priceValues.push("10000");
  priceValues.push("15000");
  priceValues.push("20000");
  return priceValues;
};

export { salePrices, rentPrices };
