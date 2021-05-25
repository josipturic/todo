import metadataApi from "./metadataApi";

export class MetadataService {

    static GetAllCategories = async () => {
        try {
            var response = await metadataApi.getCategories();
            return response;
        } catch(err) {
            console.log(err)
        }
    }
} 