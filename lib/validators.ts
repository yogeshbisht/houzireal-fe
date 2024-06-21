import { z } from "zod";

export const searchInputValidator = z.object({
  address: z.string(),
  propertyType: z.string(),
  beds: z.number(),
  baths: z.number(),
  priceMin: z.number(),
  priceMax: z.number(),
});

export type SearchInputValidatorType = z.infer<typeof searchInputValidator>;
