import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Users />
                </Route>
                <Route path="/places/new" exact>
                    <NewPlace />
                </Route>
                <Redirect to="/" />
                {/* Redirect to the root path if the user tries to access any other path */}
            </Switch>
        </Router>
    );
};

export default App;

// The Switch component is a wrapper component that will wrap all of our routes. It will make sure that only one route is rendered at a time. It will not redirect to next route if it find one possible route working.
