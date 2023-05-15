import React, { useReducer } from 'react';

import './Input.css';

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE': // Wait for change action
            return {
                ...state, //copy the old state
                value: action.val,
                isValid: true
            };
        default:
            return state;
    }
};

const Input = props => {
    const [inputState, dispatch] = useReducer(inputReducer, { value: '', isValid: false });

    const changeHandler = event => {
        dispatch({ type: 'CHANGE', val: event.target.value });
    };

    const element =
        props.element === 'input' ? (
            <input id={props.id} type={props.type} placeholder={props.placeholder} onChange={changeHandler} value={inputState.value} />
        ) : (
            <textarea id={props.id} rows={props.rows || 3} onChange={changeHandler} value={inputState.value} /> // 3 is the default value if rows is not passed.
        );

    return (
        <div className={`form-control ${!inputState.isValid && 'form-control--invalid'}`}>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
            {!inputState.isValid && <p>{props.errorText}</p>}
        </div>
    );
};
export default Input;

// useReducer() is a hook that is similar to useState() but is used for more complex state management. For example, if you have a state that is an object or an array, then you should use useReducer() instead of useState(). useReducer is a function that takes two arguments: a reducer function and an initial state. It returns an array with exactly two elements: the current state and a dispatch function. The dispatch function is used to dispatch actions to the reducer function.
