import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation'; // This will include the MainHeader component
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './user/pages/Auth';

const App = () => {
    return (
        <Router>
            <MainNavigation />
            <main>
                <Switch>
                    <Route path="/" exact>
                        <Users />
                    </Route>
                    <Route path="/:userId/places" exact>
                        <UserPlaces />
                    </Route>
                    <Route path="/places/new" exact>
                        <NewPlace />
                    </Route>
                    <Route path="/places/:placeId">
                        <UpdatePlace />
                    </Route>
                    <Route path="/auth">
                        <Auth />
                    </Route>
                    <Redirect to="/" />
                    {/* Redirect to the root path if the user tries to access any other path */}
                </Switch>
            </main>
        </Router>
    );
};

export default App;

// The Switch component is a wrapper component that will wrap all of our routes. It will make sure that only one route is rendered at a time. It will not redirect to next route if it find one possible route working.
