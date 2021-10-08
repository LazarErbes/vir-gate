import { FunctionComponent, useEffect } from 'react';
interface Props {
    firstPart: any;
    secondPart: any;
    className: string;
}
const TwoPartComponent: FunctionComponent<Props> = ({ firstPart, secondPart, className }) => {
    useEffect(() => {
        const showUp = () => {
            const first = document.querySelector(`#quote`);

            let firstImagePosition = first?.getBoundingClientRect().top;

            let screenPosition = window.innerHeight / 1.3;

            if (firstImagePosition && firstImagePosition < screenPosition) {
                first?.classList.add('dlt-transaction__quote--show');
            }
        };

        window.addEventListener('scroll', showUp);
        return () => window.removeEventListener('scroll', showUp);
    }, []);

    return (
        <div className={`d-flex ${className}`}>
            {firstPart}
            {secondPart}
        </div>
    );
};

export default TwoPartComponent;
