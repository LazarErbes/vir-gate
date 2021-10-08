import api from '../index';
import PropertySearchModel from '../models/PropertySearchModel';
import PropertySearchResult from '../../interfaces/property/PropertySearchResult';

const fetchSearchProperty = (searchModel: PropertySearchModel) => {
    return api.get<PropertySearchResult>(
        `search?SearchText=${searchModel.searchText}&pageIdx=${searchModel.pageIdx}&itemsPerPage=${
            searchModel.itemsPerPage
        }${searchModel.countryIds.length > 0 ? `${createParamsOfArray('countryIds', searchModel.countryIds)}` : ``}${
            searchModel.propertyTypeIds.length > 0
                ? `${createParamsOfArray('propertyTypeIds', searchModel.propertyTypeIds)}`
                : ``
        }`
    );
};

const createParamsOfArray = (type: string, numbers: Array<number>) => {
    let string = '';
    numbers.map((element: number, index: number) => {
        string += `&${type}[${index}]=${element}`;
        return '';
    });
    return string;
};

const SearchApi = {
    fetchSearchProperty,
};

export default SearchApi;
