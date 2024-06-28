import { z } from "zod";

export const searchInputValidator = z.object({
  address: z
    .string()
    .min(5, { message: "Address must be at least 5 characters" }),
  propertyType: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "Please select at least one property type",
    }),
  beds: z.string(),
  baths: z.string(),
  priceMin: z.string(),
  priceMax: z.string(),
});

export type SearchInputValidatorType = z.infer<typeof searchInputValidator>;
