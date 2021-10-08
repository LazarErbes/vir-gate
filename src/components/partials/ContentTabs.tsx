import { FunctionComponent, useState } from 'react';
import Tabs from '../../components/shared/Tabs';
import { defaultTabs } from '../../constants/TransactionContent';

const ContentTabs: FunctionComponent<any> = () => {
    const [activTab, setActivTab] = useState<string>('10');

    const tabSelected = (value: any) => {
        setActivTab(value);
    };

    return (
        <div className="transaction-tabs py-50">
            <Tabs tabs={defaultTabs} onTabSelected={tabSelected} defaultActiveKey={activTab} />
        </div>
    );
};
export default ContentTabs;
