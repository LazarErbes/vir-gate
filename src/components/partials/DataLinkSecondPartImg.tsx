interface DataLinkSecondPartImgProps {
    src: string;
    append_class?: string;
}
const DataLinkSecondPartImg = ({ append_class, src }: DataLinkSecondPartImgProps) => (
    <div className={`dlt-data-link__secondary d-flex align-items-center ${append_class}`}>
        <img src={src} alt="Data Link" />
    </div>
);
export default DataLinkSecondPartImg;
