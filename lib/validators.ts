import { z } from "zod";

export const searchInputValidator = z.object({
  address: z.string(),
  propertyType: z.string(),
  beds: z.string(),
  baths: z.string(),
  priceMin: z.string(),
  priceMax: z.string(),
});

export type SearchInputValidatorType = z.infer<typeof searchInputValidator>;
