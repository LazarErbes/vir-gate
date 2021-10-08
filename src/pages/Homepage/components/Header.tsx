import { FunctionComponent, useEffect } from 'react';
import { text } from '../../../constants/HomePageText';

const Header: FunctionComponent = () => {
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
            <div className="home-page-header__rolling-text-container" id="roll-me"></div>
        </div>
    );
};

export default Header;
