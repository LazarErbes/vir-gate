interface DataLinkSecondPartImgProps {
    src: string;
    append_class?: string;
}
const DataLinkSecondPartImg = ({ append_class, src }: DataLinkSecondPartImgProps) => (
    <div className={`col-xs-12 col-md-12 col-lg-6 col-xl-5 ${append_class}`}>
        <img src={src} alt="Data Link" />
    </div>
);
export default DataLinkSecondPartImg;
