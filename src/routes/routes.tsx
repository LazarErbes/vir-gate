import { Home } from '../pages/Homepage/Home';
import { Switch, Route } from 'react-router-dom';
import DataLinkAndTransaction from '../pages/DataLinkAndTransaction/DataLinkAndTransaction';
import TermsOfUse from '../pages/static/TermsOfUse';
import PrivacyPolicy from '../pages/static/PrivacyPolicy';

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/data-link-or-transaction" component={DataLinkAndTransaction} />
                <Route exact path="/terms-of-use" component={TermsOfUse} />
                <Route exact path="/privacy-policy" component={PrivacyPolicy} />
            </Switch>
        </div>
    );
};

export default Routes;
