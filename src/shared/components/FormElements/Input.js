import React, { useReducer } from 'react';

import { validate } from '../../util/validators';
import './Input.css';

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE': // Wait for change action
            return {
                ...state, //copy the old state
                value: action.val,
                isValid: validate(action.val, action.validators)
            };
        case 'TOUCH': {
            return {
                ...state,
                isTouched: true // set isTouched to true when its is blurred (desfocado).
            };
        }
        default:
            return state;
    }
};

const Input = newPlace => {
    const [inputState, dispatch] = useReducer(inputReducer, { value: '', isTouched: false, isValid: false });

    const changeHandler = event => {
        dispatch({ type: 'CHANGE', val: event.target.value, validators: newPlace.validators });
    };

    const touchHandler = () => {
        dispatch({
            type: 'TOUCH'
        });
    };

    const element =
        newPlace.element === 'input' ? (
            <input
                id={newPlace.id}
                type={newPlace.type}
                placeholder={newPlace.placeholder}
                onChange={changeHandler}
                onBlur={touchHandler}
                value={inputState.value}
            />
        ) : (
            <textarea id={newPlace.id} rows={newPlace.rows || 3} onChange={changeHandler} value={inputState.value} onBlur={touchHandler} /> // 3 is the default value if rows is not passed.
        );

    return (
        <div className={`form-control ${!inputState.isValid && inputState.isTouched && 'form-control--invalid'}`}>
            <label htmlFor={newPlace.id}>{newPlace.label}</label>
            {element}
            {!inputState.isValid && inputState.isTouched && <p>{newPlace.errorText}</p>}
        </div>
    );
};
export default Input;

// useReducer() is a hook that is similar to useState() but is used for more complex state management. For example, if you have a state that is an object or an array, then you should use useReducer() instead of useState(). useReducer is a function that takes two arguments: a reducer function and an initial state. It returns an array with exactly two elements: the current state and a dispatch function. The dispatch function is used to dispatch actions to the reducer function.
