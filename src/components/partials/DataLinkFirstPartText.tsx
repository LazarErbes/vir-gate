interface DataLinkFirstPartTextProps {
    title: string;
    text_one: string;
    text_two?: string;
    text_tree?: string;
    text_four?: string;
    append_class?: string;
}
const DataLinkFirstPartText = ({
    text_one,
    append_class,
    text_two,
    title,
    text_four,
    text_tree,
}: DataLinkFirstPartTextProps) => (
    <div className={`dlt-data-link__main ${append_class}`}>
        <h1 className="dlt-data-link__title">{title}</h1>
        <p className="dlt-data-link__subtitle mt-80">{text_one}</p>
        {text_two && <p className="dlt-data-link__subtitle mt-20">{text_two}</p>}
        {text_tree && <p className="dlt-data-link__subtitle mt-20 mb-20">{text_tree}</p>}
        {text_four && <p className="dlt-data-link__subtitle">{text_four}</p>}
    </div>
);
export default DataLinkFirstPartText;
