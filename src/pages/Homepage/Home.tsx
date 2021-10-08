import Header from './components/Header';
import About from './components/About';
import header_video from '../../assets/videos/header-video.mp4';
import PropertyContainer from '../../components/PropertyContainer';
import TwoPartComponent from '../DataLinkAndTransaction/Components/TwoPartComponent';
import DataLinkFirstPartText from '../../components/partials/DataLinkFirstPartText';
import { twoPartContent } from '../../constants/HomePageText';
import WindowsLogo from './components/WindowsLogo';

export const Home = () => (
    <>
        <div className="home-page-header d-flex flex-direction-center justify-content-center align-items-center">
            <Header />
            <video src={header_video} autoPlay muted loop className="home-page-header__video" />
        </div>
        <About />
        <TwoPartComponent
            className="mr-50 ml-50 mt-80 mb-80 align-items-center"
            firstPart={<DataLinkFirstPartText title={twoPartContent.title} text_one={twoPartContent.text_one} />}
            secondPart={<WindowsLogo />}
        />
        <PropertyContainer />
    </>
);
