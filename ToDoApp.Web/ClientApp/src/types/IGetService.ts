import { ICategory } from './ICategory';
import { IServiceProvider } from './IServiceProvider';

export interface IGetService {
    id: string,
    name: string,
    address: string,
    servicePrice: string,
    description: string,
    contactEmail: string,
    contactPhoneNumber: string,
    categories: ICategory[],
    numOfViews: number,
    created: string,
    lastModified: string,
    serviceProvider: IServiceProvider
}