"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PropertySearchType } from "@/types";
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
import { STANDARD_PROPERTY_OPTIONS } from "@/constants/search";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SearchInputFormProps = {
  searchType: PropertySearchType;
};

const SearchInputForm = ({ searchType }: SearchInputFormProps) => {
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
      beds: 0,
      baths: 0,
      priceMin: 0,
      priceMax: searchType === "sale" ? MAX_SALE_PRICE : MAX_RENT_PRICE,
    },
  });

  const onSubmit = (data: SearchInputValidatorType) => {
    console.log(data);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex">
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
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SearchInputForm;
