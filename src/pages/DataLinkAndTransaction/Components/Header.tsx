import { FunctionComponent } from 'react';
import header_video from '../../../assets/videos/data-link-hero-video.mp4';

interface Props {
    title: string;
    subtitle: string;
    params: string;
}

const Header: FunctionComponent<Props> = ({ params, title, subtitle }) => (
    <div className={`dlt-header-page ${params === '#20' ? 'dlt-header-page--bg-color' : ''}`}>
        <div className="mx-50 d-flex align-items-center dlt-header-page__full-height">
            <div className="dlt-header-page__main">
                <h1 className="dlt-header-page__title mt-100">{title}</h1>
                <p className="dlt-header-page__subtitle mt-40 mb-100">{subtitle}</p>
            </div>
            {params === '#10' && <video src={header_video} autoPlay muted className="home-page-header__video" />}
        </div>
    </div>
);

export default Header;
