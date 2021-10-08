import BaseSearchModel from './BaseSearchModel';

export default class PropertySearchModel extends BaseSearchModel {
    constructor(
        searchText: string,
        propertyTypeIds: Array<number>,
        countryIds: Array<number>,
        pageIdx: number = 0,
        itemsPerPage: number = 10
    ) {
        super(pageIdx, itemsPerPage);

        this.searchText = searchText;
        this.propertyTypeIds = propertyTypeIds;
        this.countryIds = countryIds;
    }

    searchText: string;
    propertyTypeIds: Array<number>;
    countryIds: Array<number>;
}
