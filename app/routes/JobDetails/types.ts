export interface Job {
    id: string;
    title: string;
    company: string;
    companyUrl?: string;
    location: string;
    type: string;
    salary: string;
    tags: string[];
    description: string;
    requirements: string[];
    isFeatured: boolean;
    categoryId: number;
}