import { FunctionComponent } from 'react';
import header_video from '../../../assets/videos/data-link-hero-video.mp4';

interface Props {
    title: string;
    subtitle: string;
    params: string;
}

const Header: FunctionComponent<Props> = ({ params, title, subtitle }) => (
    <div className={`dlt-header-page dlt-header-page--bg-color`}>
        <div className="mx-50 row-flex-clear align-items-center dlt-header-page__full-height">
            <div className={`col-xs-12 col-lg-4 ${params === '#10' ? 'dlt-header-page__main--data-link' : ''}`}>
                <h1 className="dlt-header-page__title">{title}</h1>
                <p className="dlt-header-page__subtitle mt-40">{subtitle}</p>
            </div>
            {params === '#10' && <video src={header_video} autoPlay muted className="col-xs-12 col-lg-8" />}
        </div>
    </div>
);

export default Header;
