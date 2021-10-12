import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

interface SlideInMenuProps {
    openVideoModal: boolean;
    setOpenVideoModal: (prev: boolean) => void;
}

const SlideInMenu = ({ setOpenVideoModal, openVideoModal }: SlideInMenuProps) => {
    const { t } = useTranslation(['f', 'b']);

    return (
        <div className={`slide-in-menu${openVideoModal ? ' slide-in-menu--slide' : ''}`}>
            <FontAwesomeIcon
                icon={faTimes}
                className="home-page-about__cross mr-80"
                color="#efefef"
                onClick={() => {
                    setOpenVideoModal(false);
                }}
            />
            <ul className="mt-50">
                <li className="d-flex justify-content-center">
                    <a
                        href="/data-link-or-transaction#10"
                        className="navigation__top-links navigation__top-links--slide"
                    >
                        {t('f:menu.datalink')}
                    </a>
                </li>
                <li className="d-flex justify-content-center mt-20">
                    <a
                        href="/data-link-or-transaction#20"
                        className="navigation__top-links navigation__top-links--slide"
                    >
                        {t('f:menu.transaction')}
                    </a>{' '}
                </li>
                <li className="d-flex justify-content-center mt-20">
                    <button className="navigation__top-btn">{t('f:menu.requestDemo')}</button>
                </li>
            </ul>
        </div>
    );
};

export default SlideInMenu;
