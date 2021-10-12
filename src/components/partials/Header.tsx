import darkLogo from '../../assets/images/logo.png';
import { useEffect, useState } from 'react';
import lightLogo from '../../assets/images/logo-w.png';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SlideInMenu from './SlideInMenu';

const MainMenu = () => {
    const { t } = useTranslation(['f', 'b']);
    const [openVideoModal, setOpenVideoModal] = useState<boolean>(false);

    return (
        <nav className="d-flex">
            <div className="navigation__lg-menu">
                <a href="/data-link-or-transaction#10" className="navigation__top-links">
                    {t('f:menu.datalink')}
                </a>
                <span className="navigation__line ml-30"></span>
                <a href="/data-link-or-transaction#20" className="navigation__top-links">
                    {t('f:menu.transaction')}
                </a>
            </div>
            <div
                className="navigation__burger"
                onClick={() => {
                    setOpenVideoModal(true);
                }}
            >
                <div className="navigation__burger-line"></div>
                <div className="navigation__burger-line"></div>
                <div className="navigation__burger-line"></div>
            </div>
            <SlideInMenu openVideoModal={openVideoModal} setOpenVideoModal={setOpenVideoModal} />
        </nav>
    );
};

const Header = () => {
    // Add pages for light header
    const [firstHalf, setFistHalf] = useState<Array<string>>(['/add-property']),
        location = useLocation();
    const pages = ['/', '/data-link-or-transaction'];

    function isLightHeader(): Boolean {
        return pages.some((page) => location.pathname === page);
    }

    function isFirstHakfLightHeader(): Boolean {
        return firstHalf.some((page) => location.pathname === page);
    }

    useEffect(() => {
        const id = location.pathname.slice(12);
        if (Number(id)) {
            const half = [...firstHalf];
            half.push(`/bid-wizard/${id}`);
            setFistHalf(half);
        }
    }, [location.pathname, firstHalf]);

    return (
        <header>
            <div className={`row-flex-clear navigation__container ${isLightHeader() ? 'light' : ''}`}>
                <figure className="logo">
                    <a href="/">
                        <img src={isLightHeader() || isFirstHakfLightHeader() ? lightLogo : darkLogo} alt="Logo" />
                    </a>
                </figure>
                <MainMenu></MainMenu>
            </div>
        </header>
    );
};

export default Header;
