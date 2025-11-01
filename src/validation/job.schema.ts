import { z } from "zod";

export const JobTypeEnum = ["Full Time", "Part Time", "Project Based"] as const;
export const FeaturedEnum = ["Yes", "No"] as const;

export function createJobSchema(categories: string[]) {
    const categoryEnum = categories.length > 0 ? (categories as [string, ...string[]]) : ["Other"];
    return z.object({
        companyName: z.string().min(1, "Company Name is required"),
        companyWebsite: z.string().min(1, "URL is required").url("Invalid URL"),
        jobTitle: z.string().min(1, "Job Title is required"),
        jobCategory: z.enum(categoryEnum),
        jobType: z.enum(JobTypeEnum),
        jobLocation: z.string().min(1, "Location is required"),
        salaryRange: z.string().min(1, "salaryRange is required"),
        experience: z.string().min(1, "salaryRange is required"),
        featured: z.enum(FeaturedEnum),
        description: z.string().min(1, "Description is required"),
    });
}

export type JobFormData<T extends string[]> = z.infer<ReturnType<typeof createJobSchema>>;
