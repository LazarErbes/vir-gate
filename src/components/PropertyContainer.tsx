import { useCallback, useEffect, useState } from 'react';
import SearchService from '../services/Search';
import PropertyAsserts from '../interfaces/property/PropertyAsserts';
import PropertyCard from '../components/partials/PropertyCard';

const PAGE_SIZE = 6;
const CURRENT_PAGE = 0;

interface PropertyPersistData {
    createDate: Date;
    items: Array<PropertyAsserts>;
}

export const PropertyContainer = () => {
    const [property, setProperty] = useState<Array<PropertyAsserts>>([]);
    console.log(property);

    const sendSearch = useCallback(
        async (searchInput: string, propertyTypeId: Array<any>, countryIdType: Array<number>) => {
            let searchResult = await SearchService.fetchSearchProperty(
                searchInput,
                CURRENT_PAGE,
                PAGE_SIZE,
                propertyTypeId,
                countryIdType
            );
            if (searchResult) {
                localStorage.setItem('Property', JSON.stringify({ createDate: new Date(), items: searchResult.items }));
            }
        },
        []
    );

    const setData = useCallback((data: PropertyPersistData) => {
        setProperty(data.items);
    }, []);

    const checkIfLookUpNeed = useCallback(
        (data: PropertyPersistData) => {
            const createDate: number = new Date(data.createDate).getTime();
            const now: number = new Date().getTime();

            const dataAge = Math.round((now - createDate) / (1000 * 24));
            const tooOld = dataAge >= 86400000;

            tooOld ? sendSearch('', [], [192]) : setData(data);
        },
        [sendSearch, setData]
    );

    useEffect(() => {
        const data = localStorage.getItem('Property');
        data ? checkIfLookUpNeed(JSON.parse(data)) : sendSearch('', [], [192]);
    }, [checkIfLookUpNeed, sendSearch]);

    return (
        <div className="row-clear property-card__big-conteiner d-flex f-wrap">
            {property.map((element: any) => {
                return (
                    <div className="col-xs-12-clear col-sm-6-clear col-lg-4-clear">
                        <PropertyCard property={element} key={element.id} />
                    </div>
                );
            })}
        </div>
    );
};
export default PropertyContainer;
