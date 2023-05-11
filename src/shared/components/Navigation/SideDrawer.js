import React from 'react';

import './SideDrawer.css';

const SideDrawer = props => {
    return <aside className="side-drawer">{props.children}</aside>;
};
export default SideDrawer;

// <aside> é um elemento HTML que representa uma seção de uma página que consiste em conteúdo que é tangencialmente relacionado ao conteúdo em torno dele, que poderia ser considerado separado dele. Essas seções são frequentemente representadas como barras laterais ou como inserções e contêm uma explicação lateral, como uma definição de glossário, elementos relacionados com o conteúdo principal como um formulário de inscrição ou elementos de navegação.
