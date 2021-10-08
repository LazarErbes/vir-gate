import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface DataLinkCardIconCardProps {
    icon: IconProp;
    text: string;
    title: string;
}

const DataLinkCardIconCard = ({ icon, title, text }: DataLinkCardIconCardProps) => (
    <div className="dlt-data-link__single-card d-flex flex-direction-column dlt-data-link__single-card--animate">
        <div className="d-flex justify-content-center">
            <FontAwesomeIcon icon={icon} className="dlt-data-link__single-card-icon" />
        </div>
        <h1 className="dlt-data-link__single-card-title mt-40">{title}</h1>
        <p className="dlt-data-link__single-card-subtitle">{text}</p>
    </div>
);

export default DataLinkCardIconCard;
