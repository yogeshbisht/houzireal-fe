"use client";

import { useState, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PropertySearchType, SelectOptionType } from "@/types";
import { MAX_RENT_PRICE, MAX_SALE_PRICE } from "@/constants";
import {
  SearchInputValidatorType,
  searchInputValidator,
} from "@/lib/validators";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { BED_OPTIONS, STANDARD_PROPERTY_OPTIONS } from "@/constants/search";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { rentPrices, salePrices } from "@/utilities/property-utils";

type SearchInputFormProps = {
  searchType: PropertySearchType;
};

const SearchInputForm = ({ searchType }: SearchInputFormProps) => {
  const memoizedSalePrices = useMemo(() => salePrices(), []);
  const memoizedRentPrices = useMemo(() => rentPrices(), []);

  const minPriceList =
    searchType === "sale" ? memoizedSalePrices : memoizedRentPrices;
  const [maxPriceList, setMaxPriceList] = useState<SelectOptionType[]>([]);

  const getPropertyTypeOptions = (searchType: PropertySearchType) => {
    if (searchType === "sale") {
      return [
        ...STANDARD_PROPERTY_OPTIONS,
        { text: "Multi Family", value: "multi" },
      ];
    }

    return [
      ...STANDARD_PROPERTY_OPTIONS,
      { text: "Apartment", value: "apartment" },
      { text: "Efficiency", value: "efficiency" },
    ];
  };

  const form = useForm<SearchInputValidatorType>({
    resolver: zodResolver(searchInputValidator),
    defaultValues: {
      address: "",
      propertyType: "",
      beds: "any",
      baths: "any",
      priceMin: "any",
      priceMax: searchType === "sale" ? MAX_SALE_PRICE : MAX_RENT_PRICE,
    },
  });

  const selectedPriceMin = form.watch("priceMin");
  const selectedPriceMax = form.watch("priceMax");

  useEffect(() => {
    const selectedPriceMinIndex = minPriceList.findIndex(
      (price) => price.value === selectedPriceMin
    );

    const maxPrices = minPriceList.slice(selectedPriceMinIndex + 1);
    maxPrices.push({ text: "Any", value: "any" });

    setMaxPriceList(maxPrices);
    if (
      selectedPriceMin !== "any" &&
      parseInt(selectedPriceMax) <= parseInt(selectedPriceMin)
    ) {
      const nextPrice = minPriceList[selectedPriceMinIndex + 1];
      form.setValue("priceMax", nextPrice ? nextPrice.value : "any");
    }
  }, [form, selectedPriceMin, selectedPriceMax, minPriceList]);

  const onSubmit = (data: SearchInputValidatorType) => {
    console.log(data);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter address"
                      {...field}
                      className="text-sm"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="propertyType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Property Type</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="text-sm">
                        <SelectValue placeholder="Select property type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {getPropertyTypeOptions(searchType).map((option) => (
                        <SelectItem
                          key={option.value}
                          value={option.value}
                          className="text-sm"
                        >
                          {option.text}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <div className="flex">
              <FormField
                control={form.control}
                name="beds"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Beds</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="text-sm">
                          <SelectValue placeholder="Select beds" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {BED_OPTIONS.map((bed) => (
                          <SelectItem
                            key={bed.text}
                            value={bed.value}
                            className="text-sm"
                          >
                            {bed.text}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="baths"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Baths</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="text-sm">
                          <SelectValue placeholder="Select baths" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {BED_OPTIONS.map((bath) => (
                          <SelectItem
                            key={bath.text}
                            value={bath.value}
                            className="text-sm"
                          >
                            {bath.text}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>
            <div className="flex">
              <FormField
                control={form.control}
                name="priceMin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price Min</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="text-sm">
                          <SelectValue placeholder="Select price min" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {minPriceList.map((price) => (
                          <SelectItem
                            key={price.text}
                            value={price.value}
                            className="text-sm"
                          >
                            {price.text}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="priceMax"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price Max</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="text-sm">
                          <SelectValue placeholder="Select price max" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {maxPriceList.map((price) => (
                          <SelectItem
                            key={price.text}
                            value={price.value}
                            className="text-sm"
                          >
                            {price.text}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SearchInputForm;
