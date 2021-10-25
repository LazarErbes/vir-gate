import TwoPartComponent from '../pages/DataLinkAndTransaction/Components/TwoPartComponent';
import DataLinkFirstPartText from '../components/partials/DataLinkFirstPartText';
import DataLinkSecondPartImg from '../components/partials/DataLinkSecondPartImg';

export const defaultTabs = [
    {
        id: 10,
        icon: '',
        name: 'Property Summary',
        component: (
            <div>
                <TwoPartComponent
                    className="py-50"
                    firstPart={
                        <DataLinkFirstPartText
                            title="Property Summary"
                            text_one="Tailor your marketing and present your opportunity in the best way by choosing from one of our many tailored templates, which include location mapping, image galleries, analysis and much more"
                            text_two="As a seller choose what information you want buyers to know when. Choose to show information before and after the NDA has been signed so you never give away confidential information. "
                        />
                    }
                    secondPart={
                        <DataLinkSecondPartImg src="https://virgatedev.blob.core.windows.net/companyimage/image006_1633599290.png" />
                    }
                />
            </div>
        ),
    },
    {
        id: 20,
        icon: '',
        name: 'Cashflow',
        component: (
            <TwoPartComponent
                className="py-50"
                firstPart={
                    <DataLinkFirstPartText
                        title="Cashflow"
                        text_one="Upload your Rent Roll and get an instant stacking plan that is dynamic to mobile and desktop devices. Gain insights and run cashflow analysis quickly, adjust the assumptions, market rents, stabilised occupancy, downtime, lease renewal, cost of debt etc."
                        text_two="Get a quick view of the investment metrics."
                    />
                }
                secondPart={
                    <DataLinkSecondPartImg src="https://virgatedev.blob.core.windows.net/companyimage/image001_1633599045.png" />
                }
            />
        ),
    },
    {
        id: 30,
        icon: '',
        name: 'Data Room',
        component: (
            <TwoPartComponent
                className="py-50"
                firstPart={
                    <DataLinkFirstPartText
                        title="Data Room"
                        text_one="Have full access to the deal room where you can present relevant files and folders that relate to the opportunity. Have full confidence that the files are secure with the latest in encryption and security features."
                    />
                }
                secondPart={
                    <DataLinkSecondPartImg src="https://virgatedev.blob.core.windows.net/companyimage/image002_1633599130.png" />
                }
            />
        ),
    },

    {
        id: 40,
        icon: '',
        name: 'Transaction',
        component: (
            <TwoPartComponent
                className="py-50"
                firstPart={
                    <DataLinkFirstPartText
                        title="Transaction"
                        text_one="Monitor deal timelines, bid submissions and performance on bids. Based on several parameters understand if you are competitive in the process and understand what may boost your chance of success.  "
                    />
                }
                secondPart={
                    <DataLinkSecondPartImg src="https://virgatedev.blob.core.windows.net/companyimage/image008_1633599350.png" />
                }
            />
        ),
    },
    {
        id: 50,
        icon: '',
        name: 'Research',
        component: (
            <TwoPartComponent
                className="py-50"
                firstPart={
                    <DataLinkFirstPartText
                        title="Research"
                        text_one="Present the sales story for each opportunity so buyers can understand the benefits. Tailor your screens and choose from a variety of templates."
                        text_two="Use Virgates advanced analytics to access relevant comparables, leases, pricing benchmarks and market insights to identify true value."
                    />
                }
                secondPart={
                    <DataLinkSecondPartImg src="https://virgatedev.blob.core.windows.net/companyimage/image007_1633599316.png" />
                }
            />
        ),
    },

    {
        id: 60,
        icon: '',
        name: 'FAQ',
        component: (
            <TwoPartComponent
                className="py-50"
                firstPart={
                    <DataLinkFirstPartText
                        title="FAQ"
                        text_one="Manage queries from buyers by answering questions on the public page, so everyone can see the answers to the most recently asked questions."
                        text_two="Use the private questions section to answer specific buyer questions that they do not wish to share with other buyers in the deal room"
                    />
                }
                secondPart={
                    <DataLinkSecondPartImg src="https://virgatedev.blob.core.windows.net/companyimage/image003_1633599165.png" />
                }
            />
        ),
    },
    {
        id: 70,
        icon: '',
        name: 'Investors',
        component: (
            <TwoPartComponent
                className="py-50"
                firstPart={
                    <DataLinkFirstPartText
                        title="Investors"
                        text_one={
                            'Manage the deal team, seller and brokers as well as your buyer team so you know who is working with you on underwriting the opportunity. Have access to contact information at your fingertips so you can easily contact the people you need to.'
                        }
                    />
                }
                secondPart={
                    <DataLinkSecondPartImg src="https://virgatedev.blob.core.windows.net/companyimage/image004_1633599215.png" />
                }
            />
        ),
    },

    {
        id: 90,
        icon: '',
        name: 'Newsletter',
        component: (
            <TwoPartComponent
                className="py-50"
                firstPart={
                    <DataLinkFirstPartText
                        title="Newsletter"
                        text_one="Create EDM’s to send to members of the deal room, simply select and tailor your email list so you can keep everyone updated on the latest developments within the transaction."
                    />
                }
                secondPart={
                    <DataLinkSecondPartImg src="https://virgatedev.blob.core.windows.net/companyimage/image005_1633599260.png" />
                }
            />
        ),
    },
];
