import { ICategory } from "../../types/ICategory";

export interface ICategoryContext {
  categories: ICategory[];
  setCategories: Function;
}
