import { FunctionComponent } from 'react';

interface Props {
    title: string;
    subtitle: string;
    params: string;
    video: string;
}

const Header: FunctionComponent<Props> = ({ params, title, subtitle, video }) => (
    <div className={`dlt-header-page dlt-header-page--bg-color`}>
        <div className="mx-50 row-flex-clear align-items-center dlt-header-page__full-height">
            <div className="col-xs-12 col-lg-4 dlt-header-page__main--data-link">
                <h1 className="dlt-header-page__title">{title}</h1>
                <p className="dlt-header-page__subtitle mt-40">{subtitle}</p>
            </div>
            <video src={video} autoPlay muted className="col-xs-12 col-lg-8" />
        </div>
    </div>
);

export default Header;
