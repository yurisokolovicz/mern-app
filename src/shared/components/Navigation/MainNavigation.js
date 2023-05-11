import React from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import './MainNavigation.css';

const MainNavigation = props => {
    return (
        <React.Fragment>
            <SideDrawer className="main-navigation__drawer-nav">
                <nav>
                    <NavLinks />
                </nav>
            </SideDrawer>
            <MainHeader>
                <button className="main-navigation__menu-btn">
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className="main-navigation__title">
                    <Link to="/">YourPlaces</Link>
                </h1>
                <nav className="main-navigation__header-nav">
                    <NavLinks />
                </nav>
            </MainHeader>
        </React.Fragment>
    );
};

export default MainNavigation;

// Link is a React component that allows you to create links in your app. It allows you to create links that are handled by the router and which don't reload the page but instead update the URL and render the component(s) you configured for that route.

// No componente MainNavigation, o componente MainHeader é renderizado como um elemento filho. A propriedade passada para MainHeader é um conjunto de elementos JSX button, h1 e nav. Esses elementos são passados para MainHeader como uma propriedade especial chamada children.
