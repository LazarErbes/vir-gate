import BaseModel from './BaseModel';

export default class BaseSearchModel extends BaseModel {
    constructor(pageIdx: number, itemsPerPage: number) {
        super();

        this.pageIdx = pageIdx;
        this.itemsPerPage = itemsPerPage;
    }

    pageIdx: number = 0;
    itemsPerPage: number = 10;
}
