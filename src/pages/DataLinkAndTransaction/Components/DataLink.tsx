import TwoPartComponent from './TwoPartComponent';
import { useEffect } from 'react';
import DataLinkTextCard from '../../../components/partials/DataLinkTextCard';
import DataLinkCardIconCard from '../../../components/partials/DataLinkCardIconCard';
import { IconCard, TextCard } from '../../../constants/DataLinkContent';
import DataLinkSecondPartImg from '../../../components/partials/DataLinkSecondPartImg';
import DataLinkFirstPartText from '../../../components/partials/DataLinkFirstPartText';
import { HeroInfo } from '../../../constants/DataLinkContent';

const DataLink = () => {
    useEffect(() => {
        const showUp = () => {
            const first = document.querySelector(`.dlt-data-link__cards--no-bg`);
            const second = document.querySelector(`.dlt-data-link__cards--grid`);
            const firstContent = document.querySelectorAll(`.dlt-data-link__single-card--animate`);
            const secondContent = document.querySelectorAll(`.dlt-data-link__single-card--fixed`);

            let firstImagePosition = first?.getBoundingClientRect().top;
            let secondImagePosition = second?.getBoundingClientRect().top;

            let screenPosition = window.innerHeight / 1;
            let screenPositionLater = window.innerHeight / 1.5;

            if (firstImagePosition && firstImagePosition < screenPosition) {
                let i = 0;
                const myLoop = () => {
                    setTimeout(() => {
                        firstContent[i].classList.add('dlt-data-link__single-card--animate--show');
                        i++;
                        if (i < firstContent.length) {
                            myLoop();
                        }
                    }, 500);
                };
                myLoop();
            }

            if (secondImagePosition && secondImagePosition < screenPositionLater) {
                let i = 0;
                const myLoop = () => {
                    setTimeout(() => {
                        secondContent[i].classList.add('dlt-data-link__single-card--fixed--show');
                        i++;
                        if (i < secondContent.length) {
                            myLoop();
                        }
                    }, 500);
                };
                myLoop();
            }
        };

        window.addEventListener('scroll', showUp);
        return () => window.removeEventListener('scroll', showUp);
    }, []);

    return (
        <div className="dlt-data-link">
            <TwoPartComponent
                className="mx-50"
                firstPart={
                    <DataLinkFirstPartText
                        title={HeroInfo.title}
                        text_one={HeroInfo.text_one}
                        text_two={HeroInfo.text_two}
                        text_tree={HeroInfo.text_tree}
                        text_four={HeroInfo.text_four}
                        append_class="pr-30"
                    />
                }
                secondPart={<DataLinkSecondPartImg src={HeroInfo.image} append_class="pl-30" />}
            />

            <div className="dlt-data-link__cards d-flex mt-80">
                {IconCard.map(({ text, title, icon }) => (
                    <DataLinkCardIconCard text={text} title={title} icon={icon} />
                ))}
            </div>

            <div className="dlt-data-link__cards dlt-data-link__cards--grid dlt-data-link__cards--no-bg">
                {TextCard.map(({ text, title }, i) => (
                    <DataLinkTextCard text={text} title={title} append_class={i % 2 === 0 ? ' ml-auto' : ''} />
                ))}
            </div>
        </div>
    );
};
export default DataLink;
