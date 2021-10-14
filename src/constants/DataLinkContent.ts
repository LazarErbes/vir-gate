import { faChartLine, faStopwatch, faServer } from '@fortawesome/free-solid-svg-icons';
import data_link from '../assets/images/data-link.png';
import database from '../assets/images/database.svg';
import server from '../assets/images/server.svg';
import infinite from '../assets/images/infinite.svg';
import sandwatch from '../assets/images/sandhour.svg';

export const IconCard = [
    {
        title: 'Real Time',
        text: 'Get fast answers to your underwriting assumptions, with consolidated and relevant data at the click of a button.',
        icon: faStopwatch,
    },
    {
        title: 'Standardisation',
        text: '  Gain data insights in a single format, no more having to manipulate data sets. All the information you need is at your fingertips as and when you need it.',
        icon: faServer,
    },
    {
        title: 'Market Insights',
        text: 'We aggregate data from a variety of sources, so you can make the best decisions when buying and selling commercial real estate.',
        icon: faChartLine,
    },
];

export const TextCard = [
    {
        title: 'All the data you need at your fingertips',
        text: 'Virgate puts everything you need to know at your fingertips. Merge your entire data universe andapply advanced data analytics and machine learning to gain the very best insights you need tomake data driven decisions confidently. We will do the heavy lifting, so you can empower yourteam to further identify opportunities.',
        icon: database,
    },
    {
        title: 'An edge on your competitors',
        text: 'Gain deeper understanding of the market and link previously unknown variables to your underwriting analysis. Build new powerful predictive scenario modeling to make faster and more informed decisions. Virgate enables you to maximise the value of your subscription data ensuring everything you’ll ever need is right there when you want it..',
        icon: server,
    },
    {
        title: 'Leverage internal data ',
        text: ' Integrating the internal data from your organization will provide you with comparables and insights that you may otherwise overlook. Organise, utilize and maximise the value of your data in combination with external data to give yourself an edge on your competition. With Virgate you will source off-market deals, unmask owners, research portfolios, identify key value drivers across sectors and geographies, and perform deep analysis on market performance',
        icon: infinite,
    },
    {
        title: 'Take back control of your data',
        text: ' Leverage your connected data for automated reporting, performance monitoring, and benchmarking.Reduce dependencies on manual workflows by streamlining operations and increasing scalability.Become more nimble.',
        icon: sandwatch,
    },
];

export const HeroInfo = {
    title: 'Virgate gives you the information you need to make data-driven decisions confidently',
    text_one: "Asia's first dedicated analytics and data portal for institutional grade, commercial real estate.",
    text_two:
        'Unlock the full potential of your subscription data, by merging your data subscriptions Virgate can provide you live building level insight. Combine the knowledge of all your data sources to produce the best analytics in the industry. All the data vendors such as Real Capital Analytics, Oxford Economics, REIS and many many others, are all great data vendors in their own right.',
    text_tree:
        'It’s not an either-or situation, all providers have their niche and value add elements, but they don’t speak to each other to provide the client maximum advantage.',
    text_four:
        ' We find a way to connect external and internal data that will deliver maximum advantage to our clients.',
    image: data_link,
};
