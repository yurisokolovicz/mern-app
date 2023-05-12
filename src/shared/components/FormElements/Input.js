import React from 'react';

import './Input.css';

const Input = props => {
    const element =
        props.element === 'input' ? (
            <input id={props.id} type={props.type} placeholder={props.placeholder} />
        ) : (
            <textarea id={props.id} rows={props.rows || 3} /> // 3 is the default value if rows is not passed.
        );

    return (
        <div className={`form-control`}>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
        </div>
    );
};
export default Input;
