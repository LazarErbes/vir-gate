import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
    const { t } = useTranslation(['f', 'b']);

    return (
        <footer className="footer">
            <div className="row-flex-clear footer__copyright-container">
                <div className="col-sm-6">
                    <p>
                        {t(`f:footer.copyrightVirgate`)} {new Date().getFullYear()}
                    </p>
                </div>
                <div className="footer__terms-list col-sm-6 justify-content-end">
                    <p className="footer__copyright-text">
                        <Link to={'/terms-of-use'}>{t(`f:footer.termsOfUse`)}</Link>
                    </p>
                    <p className="footer__copyright-text">
                        <Link to={'/privacy-policy'}>{t(`f:footer.privacyPolicy`)}</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
