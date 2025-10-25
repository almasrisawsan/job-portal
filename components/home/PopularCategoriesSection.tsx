import React from "react";
import { Title } from "components/common/ui/Title";
import { BoxCategories } from "./BoxCategories";
import { Container } from "components/common/ui/Container";
import { popular } from "./fackData";
import type { Category } from "../../@types/category";

export const PopularCategories: React.FC = () => {
    const categories: Category[] = popular;

    // const { data, isLoading, error } = useApi<Category>( // "https://68f8f8e8deff18f212b83fba.mockapi.io/categories" // );
    return (
        <Container>
            <section className="w-full py-10 px-4 md:px-8">
                <Title title="Popular Categories" />

                {categories.length > 0 ? (
                    <div
                        className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              md:grid-cols-3 
              lg:grid-cols-4 
              xl:grid-cols-5 
              gap-6 
              justify-items-center 
              mt-8
            "
                    >
                        {categories.map((category) => (
                            <BoxCategories
                                key={category.id}
                                title={category.title}
                                id={category.id}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-gray-500 font-poppins mt-8">
                        No categories found.
                    </div>
                )}
            </section>
        </Container>
    );
};
