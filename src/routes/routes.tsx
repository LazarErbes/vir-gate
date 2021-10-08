import { Home } from '../pages/Homepage/Home';
import { Switch, Route } from 'react-router-dom';
import DataLinkAndTransaction from '../pages/DataLinkAndTransaction/DataLinkAndTransaction';

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/data-link-or-transaction" component={DataLinkAndTransaction} />
            </Switch>
        </div>
    );
};

export default Routes;
