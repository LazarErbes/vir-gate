import Routes from '../../routes/routes';
import Header from './Header';
import { FunctionComponent } from 'react';
import Footer from '../shared/Footer';

const Layout: FunctionComponent<any> = () => {
    return (
        <>
            <Header />
            <Routes />
            <Footer />
        </>
    );
};

export default Layout;
