import React from 'react';
import ReactDOM from 'react-dom';

import './SideDrawer.css';

const SideDrawer = props => {
    const content = <aside className="side-drawer">{props.children}</aside>;

    return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};
export default SideDrawer;

// Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
