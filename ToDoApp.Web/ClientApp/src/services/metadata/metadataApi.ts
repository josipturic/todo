import { ICategory } from './../../types/ICategory';
import { api } from '../api';
import { API } from '../../constants/apiRoutes';


export default
    {
        getCategories(): Promise<ICategory[]> {
            return api.get(API.METADATA.GET_CATEGORIES);
        },
        saveCategory(categoryId: number, category: ICategory): Promise<any> {
            return api.post(API.METADATA.EDIT_CATEGORY(categoryId), category);
        },
        deleteCategory(categoryId: number): Promise<any> {
            return api.delete(API.METADATA.DELETE_CATEGORY(categoryId));
        },
        addNewCategory(name: string): Promise<any> {
            return api.post(API.METADATA.ADD_NEW_CATEGORY, { categoryName: name})
        }
    };
