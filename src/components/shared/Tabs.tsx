import { Tabs } from 'antd';
import { FunctionComponent } from 'react';

const { TabPane } = Tabs;

interface Tab {
    id: number;
    icon: string;
    name: string;
    component: any;
}

interface Props {
    tabs: Tab[];
    onTabSelected?: any;
    defaultActiveKey?: string;
    tabPosition?: any;
    className?: string;
}

const Tbs: FunctionComponent<Props> = (props) => {
    return (
        <Tabs
            className={props.className}
            tabPosition={props.tabPosition}
            onChange={props.onTabSelected}
            defaultActiveKey={props.defaultActiveKey ? props.defaultActiveKey : '1'}
        >
            {props.tabs.map((tab) => (
                <TabPane
                    tab={
                        <div>
                            {tab.icon && <img src={tab.icon} alt="Tab" />}
                            <p>{tab.name}</p>
                        </div>
                    }
                    key={tab.id}
                >
                    {tab.component}
                </TabPane>
            ))}
        </Tabs>
    );
};

export default Tbs;
