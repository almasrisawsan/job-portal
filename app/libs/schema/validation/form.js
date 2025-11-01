import { z } from "zod";

// Zod validation schema
export const jobFormSchema = z.object({
  company: z.string().min(2, "Company name must be at least 2 characters"),
  logo: z
    .string()
    .refine(
      (val) => val === "" || /^https?:\/\/.+/.test(val),
      "Please enter a valid URL"
    ),
  title: z.string().min(3, "Job title must be at least 3 characters"),
  category: z.string().min(1, "Category is required"),
  type: z.string().min(1, "Job type is required"),
  location: z.string().min(2, "Location must be at least 2 characters"),
  salary: z.string().optional(),
  description: z.string().min(10, "Description must be at least 10 characters"),
  postedAt: z.string(),
});