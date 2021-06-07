import metadataApi from "./metadataApi";

export class MetadataService {

    static GetAllCategories = async () => {
        return await metadataApi.getCategories();
    }
} 