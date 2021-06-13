import { ICategory } from "../../types/ICategory";
import metadataApi from "./metadataApi";

export class MetadataService {

    static GetAllCategories = async () => {
        return await metadataApi.getCategories();
    }
    static SaveCategory = async (categoryId: number, category: ICategory) => {
        return await metadataApi.saveCategory(categoryId, category);
    }
    static DeleteCategory = async (categoryId: number) => {
        return await metadataApi.deleteCategory(categoryId);
    } 
    static AddNewCategory = async (categoryName: string) => {
        return await metadataApi.addNewCategory(categoryName);
    }
} 