import { FunctionComponent, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import FormattedAmount from '../shared/FormattedAmount';
import PropertyAsserts from '../../interfaces/property/PropertyAsserts';

interface Props {
    property: PropertyAsserts;
    addClass?: string;
}

const PropertyCard: FunctionComponent<Props> = ({ property, addClass }) => {
    const { t } = useTranslation(['f', 'b']);
    useEffect(() => {}, []);

    return (
        <div className={`row-clear property-card__container property-card__container--homepage ${addClass}`}>
            <figure className="property-card__image">
                <img src={property?.imageUrl} alt="Property" />
            </figure>
            <div className="property-card__title">
                <div className="d-flex property-card__favorite justify-content-space-between align-items-center">
                    <h3 className="main-text property-card__name">{property?.propertyName}</h3>
                </div>
                <p className="property-card__address">{property?.map?.address}</p>
            </div>
            <div>
                <div className="row-clear property-card__element-list">
                    <div className="col-xs-12-flex-clear justify-content-space-between property-card__element-item">
                        <p className="property-card__element-name">{t('f:propertyCard.yearOfCompletion')}</p>
                        <p className="property-card__element-value">{property?.yearOfCompletion}</p>
                    </div>
                    <div className="col-xs-12-flex-clear justify-content-space-between property-card__element-item">
                        <p className="property-card__element-name">{t('f:propertyCard.landTenure')}</p>
                        <p className="property-card__element-value">{'LAND TANTURE'}</p>
                    </div>
                    <div className="col-xs-12-flex-clear justify-content-space-between property-card__element-item">
                        <p className="property-card__element-name">{t('f:propertyCard.siteAreaSqft')}</p>
                        <p className="property-card__element-value">
                            {property && <FormattedAmount value={property.landArea} />}
                        </p>
                    </div>
                    <div className="col-xs-12-flex-clear justify-content-space-between property-card__element-item">
                        <p className="property-card__element-name">{t(`f:propertyCard.nla`)}</p>
                        <p className="property-card__element-value">
                            {property && <FormattedAmount value={property.netLeasableArea} />}
                        </p>
                    </div>
                    <div className="col-xs-12-flex-clear justify-content-space-between property-card__element-item">
                        <p className="property-card__element-name">{t('f:propertyCard.carparkLots')}</p>
                        <p className="property-card__element-value">
                            {property && <FormattedAmount value={property.carparkLots} />}
                        </p>
                    </div>
                    <div className="col-xs-12-flex-clear justify-content-space-between property-card__element-item">
                        <p className="property-card__element-name">{t('f:propertyCard.sectors')}</p>
                        <p className="property-card__element-value">
                            {property?.sectors
                                ? property.sectors
                                      .map((sector: number) => {
                                          return sector;
                                      })
                                      .join(', ')
                                : ''}
                        </p>
                    </div>
                    <div className="col-xs-12-flex-clear justify-content-space-between property-card__element-item">
                        <p className="property-card__element-name">{t(`f:propertyCard.majorTenants`)}</p>
                        <p className="property-card__element-value">{property?.majorTenants}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
