import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent, useState } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import video from '../../../assets/videos/home-slide-open-video.mp4';

const About: FunctionComponent = () => {
    const [openVideoModal, setOpenVideoModal] = useState<boolean>(false);

    return (
        <div className="home-page-about">
            <h1 className="home-page-about__heading mt-100">
                Analysing commercial real estate assets has never been so easy
            </h1>
            <h1 className="home-page-about__subtitle mt-80">
                Virgate is a web-based trading platform for global real estate.
            </h1>
            <h1 className="home-page-about__subtitle mt-20 mb-100">
                Our all-in-one transaction management platform allows you to tailor your campaigns and manage your
                property portfolio efficiently and quickly. Virgate gives professionals the information they need to
                make data-driven decisions confidently.
            </h1>

            {openVideoModal ? (
                <div
                    className={`home-page-about__video-container-black${
                        openVideoModal ? ' home-page-about__video-container-black--open' : ''
                    } d-flex flex-direction-column`}
                >
                    <FontAwesomeIcon
                        icon={faTimes}
                        className="home-page-about__cross"
                        onClick={() => {
                            setOpenVideoModal(false);
                        }}
                    />

                    <video className="home-page-about__video-container-video" src={video} controls autoPlay></video>
                </div>
            ) : (
                <button
                    className="home-page-about__play-button"
                    onClick={() => {
                        setOpenVideoModal(true);
                    }}
                >
                    play video
                </button>
            )}
        </div>
    );
};

export default About;
