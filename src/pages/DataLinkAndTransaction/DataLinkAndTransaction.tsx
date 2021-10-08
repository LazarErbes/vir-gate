import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import NavBar from '../../interfaces/general/NavTabs';
import Tabs from '../../components/shared/Tabs';
import Header from './Components/Header';
import { useTranslation } from 'react-i18next';
import DataLink from './Components/DataLink';
import Transaction from './Components/Transaction';

const DataLinkAndTransaction = () => {
    const { t } = useTranslation(['f', 'b']),
        location = useLocation(),
        history = useHistory();
    const tabs: Array<NavBar> = [
        {
            id: 10,
            icon: '',
            name: t(`f:menu.datalink`),
            component: <DataLink />,
        },
        {
            id: 20,
            icon: '',
            name: t('f:menu.transaction'),
            component: <Transaction />,
        },
    ];
    const [act, setAct] = useState<boolean>(location.hash.replace('#', '') === '20' ? true : false);
    const [activTab, setActivTab] = useState<string>(location.hash ? location.hash.replace('#', '') : '10');

    const tabSelected = (value: any) => {
        history.push({ hash: value });
    };

    useEffect(() => {
        setActivTab(history.location.hash ? history.location.hash.replace('#', '') : '10');
        switch (history.location.hash.replace('#', '')) {
            case '10':
                setAct(false);
                break;
            case '20':
                setAct(true);
                break;
            default:
                setAct(false);
                break;
        }
    }, [history.location.hash]);

    const checkTopDisplay = () => {
        switch (history.location.hash) {
            case '#10':
                return (
                    <Header
                        params={history.location.hash}
                        title="Data Link"
                        subtitle="To meet our clients’ most demanding business use cases, we work with best-in-class data experts to unlock unparalleled insight and value"
                    />
                );
            case '#20':
                return (
                    <Header
                        params={history.location.hash}
                        title="Transaction Management"
                        subtitle="We research commercial real estate, measure capital performance, market deals and enable you to acquire property securely"
                    />
                );

            default:
                <Header
                    params={history.location.hash}
                    title="Data Link"
                    subtitle="To meet our clients’ most demanding business use cases, we work with best-in-class data experts to unlock unparalleled insight and value"
                />;
        }
    };

    return (
        <div className="data-link-transaction-page">
            {checkTopDisplay()}
            <div className="data-link-transaction-page__navigation">
                <Tabs
                    tabs={tabs}
                    onTabSelected={tabSelected}
                    defaultActiveKey={act ? '20' : '10'}
                    key={activTab}
                    className="data-link-transaction-page__navigation-content"
                />
            </div>
        </div>
    );
};
export default DataLinkAndTransaction;
