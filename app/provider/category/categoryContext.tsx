import { createContext, useState } from "react";
import type { ICategoryFromAPI } from "~/@types";

interface ICatContext {
    cats: ICategoryFromAPI[];
    setCats: React.Dispatch<React.SetStateAction<ICategoryFromAPI[]>>
}

interface IProviderProps {
    children: React.ReactNode
}

export const CategoryContext = createContext<ICatContext>(
    {
        cats:[], 
        setCats: () => { }
    }
);

export const CategoryProvider = ({children}: IProviderProps) => {
    const [cats, setCats] = useState<ICategoryFromAPI[]>([]);
    const value = {
        cats, 
        setCats
    }
    return (
        <CategoryContext.Provider value={value}>
            {children}
        </CategoryContext.Provider>
    )
}
