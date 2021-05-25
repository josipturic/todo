import { ICategory } from './../../types/ICategory';
import { api } from '../api';
import { API } from '../../constants/apiRoutes';


export default
    {
        getCategories(): Promise<ICategory[]> {
            return api.get(API.METADATA.GET_CATEGORIES);
        },
    };
