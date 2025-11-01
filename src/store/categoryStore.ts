import { create } from "zustand";
import type { Category } from "src/types/category.type";

interface CategoryState {
    categories: Category[];
    loading: boolean;
    error: string | null;
    setCategories: (cats: Category[]) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
}

export const useCategoryStore = create<CategoryState>((set) => ({
    categories: [],
    loading: false,
    error: null,
    setCategories: (cats) => set({ categories: cats }),
    setLoading: (loading) => set({ loading }),
    setError: (error) => set({ error }),
}));
