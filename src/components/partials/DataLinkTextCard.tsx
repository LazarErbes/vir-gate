interface DataLinkTextCardProps {
    title: string;
    text: string;
    append_class?: string;
}

const DataLinkTextCard = ({ text, title, append_class }: DataLinkTextCardProps) => (
    <div
        className={`dlt-data-link__single-card dlt-data-link__single-card--fixed d-flex flex-direction-column ${append_class}`}
    >
        <h1 className="dlt-data-link__title">{title}</h1>
        <p className="dlt-data-link__subtitle mt-50">{text}</p>
    </div>
);

export default DataLinkTextCard;
