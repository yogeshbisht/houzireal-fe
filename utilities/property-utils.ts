import { MAX_RENT_PRICE, MAX_SALE_PRICE } from "@/constants";
import { SelectOptionType } from "@/types";
import { PropertyInfo } from "@/types/property";

const salePrices = (): SelectOptionType[] => {
  const priceValues = [
    {
      text: "Any",
      value: "any",
    },
  ];
  for (let value = 50000; value < 500000; value += 50000) {
    priceValues.push({
      text: `$${value.toLocaleString()}`,
      value: value.toString(),
    });
  }
  for (let value = 500000; value < 1000000; value += 100000) {
    priceValues.push({
      text: `$${value.toLocaleString()}`,
      value: value.toString(),
    });
  }
  for (let value = 1000000; value < 6000000; value += 1000000) {
    priceValues.push({
      text: `$${value.toLocaleString()}`,
      value: value.toString(),
    });
  }
  for (let value = 7500000; value <= MAX_SALE_PRICE; value += 2500000) {
    priceValues.push({
      text: `$${value.toLocaleString()}`,
      value: value.toString(),
    });
  }
  return priceValues;
};

const rentPrices = (): SelectOptionType[] => {
  const priceValues = [
    {
      text: "Any",
      value: "any",
    },
  ];
  for (let value = 500; value <= 1500; value += 200) {
    priceValues.push({
      text: `$${value.toLocaleString()}`,
      value: value.toString(),
    });
  }
  for (let value = 2000; value <= 5000; value += 1000) {
    priceValues.push({
      text: `$${value.toLocaleString()}`,
      value: value.toString(),
    });
  }
  for (let value = 10000; value <= MAX_RENT_PRICE; value += 5000) {
    priceValues.push({
      text: `$${value.toLocaleString()}`,
      value: value.toString(),
    });
  }
  return priceValues;
};

const propertyFullAddress = (property: PropertyInfo): string => {
  return `${property.address}, ${property.city}, ${property.zip}`;
};

const getAmountWithCurrency = (
  amount: number,
  currency: string = "USD"
): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
};

const getAreaWithUnit = (area: number): string => {
  return `${area.toLocaleString()} sqft`;
};

export {
  salePrices,
  rentPrices,
  propertyFullAddress,
  getAmountWithCurrency,
  getAreaWithUnit,
};
