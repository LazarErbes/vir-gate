import TwoPartComponent from './TwoPartComponent';
import gif from '../../../assets/images/GIF1.gif';
import PropertyContainer from '../../../components/PropertyContainer';
import ContentTabs from '../../../components/partials/ContentTabs';

const Transaction = () => {
    return (
        <div className="dlt-transaction">
            <div className="mt-100"></div>
            <TwoPartComponent
                className="mx-50"
                firstPart={
                    <div className="dlt-data-link__main dlt-data-link__main--pr-50">
                        <h1 className="dlt-data-link__title">
                            Imagine managing your global assets on a fully automated transaction platform.
                        </h1>
                        <p className="dlt-data-link__subtitle mt-100">
                            A platform where you can research commercial real estate, measure capital performance,
                            market deals, and acquire property securely.
                        </p>
                        <p className="dlt-data-link__subtitle mt-20">
                            Our technology speeds up an often time-consuming and labour-intensive process, allowing you
                            to close deals fast and efficiently. At Virgate, we know the market, the properties, and the
                            people. It’s our job to get you the best information, connect you with key players,
                            and conclude deals that fuel your success.
                        </p>
                    </div>
                }
                secondPart={
                    <div className="dlt-data-link__secondary d-flex align-items-center">
                        <img src={gif} alt="fist Gif" />
                    </div>
                }
            />
            <TwoPartComponent
                className="mt-50"
                firstPart={
                    <div className="dlt-data-link__main d-flex align-items-center">
                        <h1 className="dlt-transaction__quote" id="quote">
                            “A smart deal room where buyers, sellers, and brokers all collaborate in real-time,
                            accessing information across desktop and mobile devices.”
                        </h1>
                    </div>
                }
                secondPart={
                    <div className="dlt-data-link__secondary dlt-data-link__secondary--grey">
                        <h1 className="dlt-data-link__title dlt-data-link__title--light-grey">
                            A new way to transact and manage commercial real estate
                        </h1>
                        <p className="dlt-data-link__subtitle dlt-data-link__subtitle--light-grey mt-40">
                            Virgate is a virtual gateway for global commercial real estate transactions. A place where
                            high-profile brokers, wealth managers, investors, and debt financiers come together to
                            trade in one place.
                        </p>
                        <p className="dlt-data-link__subtitle dlt-data-link__subtitle--light-grey  mt-20">
                            Our all-in-one transaction management platform allows you to tailor your campaigns and
                            manage your property portfolio efficiently and quickly. Virgate gives you access to a global
                            audience while simplifying the end-to-end process.
                        </p>
                    </div>
                }
            />
            <ContentTabs />
            <PropertyContainer />
        </div>
    );
};
export default Transaction;
