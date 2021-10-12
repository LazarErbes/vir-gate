import { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ContactFormModal from '../../../components/shared/ContactForm';
import { text } from '../../../constants/HomePageText';

const Header: FunctionComponent = () => {
    const { t } = useTranslation(['f', 'b']);
    const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

    const handleOnClickOpenModal = useCallback(() => {
        setIsModalOpened(true);
    }, []);

    useEffect(() => {
        var i = 0;
        const div: any = document.getElementById('roll-me');
        const h1 = document.createElement('h1');
        h1.classList.add('home-page-header__rolling-text');

        function myLoop() {
            div.innerHTML = '';
            h1.innerText = '';
            h1.innerText = `${text[i]}`;
            div.append(h1);
            setTimeout(function () {
                i++;
                if (i === text.length - 1) {
                    i = 0;
                    myLoop();
                } else {
                    myLoop();
                }
            }, 8000);
        }
        window.addEventListener('load', myLoop);
        return () => window.removeEventListener('load', myLoop);
    }, []);

    return (
        <div className="home-page-header__main d-flex flex-direction-column justify-content-center align-items-center">
            <div className="home-page-header__rolling-text-container mb-20" id="roll-me"></div>
            <button className="navigation__top-btn" onClick={handleOnClickOpenModal}>
                {t('f:menu.requestDemo')}
            </button>
            <ContactFormModal isModalOpened={isModalOpened} setIsModalOpened={setIsModalOpened} />
        </div>
    );
};

export default Header;
