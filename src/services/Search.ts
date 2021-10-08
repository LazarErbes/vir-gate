import SearchApi from '../api/routes/SearchApi';
import PropertySearchModel from '../api/models/PropertySearchModel';
import PropertySearchResult from '../interfaces/property/PropertySearchResult';

const fetchSearchProperty = async (
    searchText: string,
    currentPage: number,
    pageSize: number,
    propertyTypeIds: Array<number>,
    countryIds: Array<number>
): Promise<PropertySearchResult> => {
    let searchParams = new PropertySearchModel(searchText, propertyTypeIds, countryIds, currentPage, pageSize);
    const response = await SearchApi.fetchSearchProperty(searchParams);
    return response?.data;
};

const SearchService = {
    fetchSearchProperty,
};

export default SearchService;
