import Layout from './components/partials/Layout';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './translations/config';
import { Helmet } from 'react-helmet';

library.add(faLinkedinIn, faFacebookF, faInstagram, faTwitter, faYoutube, faSearch);

const App = () => (
    <BrowserRouter>
        <Helmet titleTemplate="Virgate - %s" defaultTitle="Virgate">
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap"
                rel="stylesheet"
            />
        </Helmet>
        <Layout />
    </BrowserRouter>
);

export default App;
