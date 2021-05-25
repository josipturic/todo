import React, { ComponentType, createContext, useState } from "react";
import { ICategory } from "../../types/ICategory";
import { ICategoryContext } from "./ICategoryContext";

export const CategoryContext = createContext<ICategoryContext>({
  categories: [],
  setCategories: (categories: ICategory[]) => null,
});

export const CategoryContextProvider: ComponentType<React.ReactNode> = (
  props
) => {
  const [categories, setCategoriesState] = useState<ICategory[]>([]);

  const setCategories = (categories: ICategory[]) => {
    setCategoriesState(categories);
  };

  return (
    <CategoryContext.Provider value={{ categories, setCategories }}>
      {props.children}
    </CategoryContext.Provider>
  );
};

export default CategoryContextProvider;
