import { Route, Switch } from 'react-router-dom';

import AllMeetups from './pages/AllMetups';
import NewMeetup from './pages/NewMeetup';
import Favorites from './pages/Favorites';
import MainNavigation from './components/layouts/MainNavigation';
import Layout from './components/layouts/Layout';

function App() {
    return (
        <div>
            <MainNavigation />
            <Layout>
                <Switch>
                    <Route path="/" exact>
                        <AllMeetups />
                    </Route>
                    <Route path="/new-meetup" exact>
                        <NewMeetup />
                    </Route>
                    <Route path="/favorites" exact>
                        <Favorites />
                    </Route>
                </Switch>
            </Layout>
        </div>
    );
}

export default App;
