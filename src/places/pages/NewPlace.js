import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook'; // Custom hook with reducer logic
import './PlaceForm.css';

// useCallback is used to avoid infinite loop. The useCallback will only be recreated if the dependencies change. If the function is reused (id, value, isValid), the function will not be recreated.

///////////////////////////////////////////////////////////////////////////////
// The reducer logic was moved to separated component, adapted in a custom hook, because we will use it in other places.

// import { useCallback, useReducer } from 'react';
// const formReducer = (state, action) => {
//     switch (action.type) {
//         case 'INPUT_CHANGE':
//             let formIsValid = true;
//             for (const inputId in state.inputs) {
//                 if (inputId === action.inputId) {
//                     formIsValid = formIsValid && action.isValid;
//                 } else {
//                     formIsValid = formIsValid && state.inputs[inputId].isValid;
//                 }
//             }
//             return {
//                 ...state,
//                 inputs: {
//                     ...state.inputs,
//                     [action.inputId]: { value: action.value, isValid: action.isValid }
//                 },
//                 isValid: formIsValid
//             };
//         default:
//             return state;
//     }
// };

// const NewPlace = () => {
//     // Initial state
//     const [formState, dispatch] = useReducer(formReducer, {
//         inputs: { // this is passed to useForm (here) - lines below
//             title: {
//                 value: '',
//                 isValid: false
//             },
//             description: {
//                 value: '',
//                 isValid: false
//             },
//             address: {
//                 value: '',
//                 isValid: false
//             }
//         },
//         isValid: false
//     });

const NewPlace = () => {
    const [formState, inputHandler] = useForm(
        // getting information (formState and inputHandler) from useForm (in form-hook.js)
        {
            // initialInputs - first argument of useForm (in form-hook.js)
            title: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            },
            address: {
                value: '',
                isValid: false
            }
        },
        // initialFormValidity - second argument of useForm (in form-hook.js)
        false
    );

    ///////// transfered to form-hook.js
    // const inputHandler = useCallback((id, value, isValid) => {
    //     dispatch({ type: 'INPUT_CHANGE', value: value, isValid: isValid, inputId: id });
    // }, []);

    const placeSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs); // send this to the backend!
    };

    return (
        <form className="place-form" onSubmit={placeSubmitHandler}>
            <Input
                id="title"
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]} // just to do not be empty
                errorText="Please enter a valid title"
                onInput={inputHandler}
            />
            <Input
                id="description"
                element="textarea"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid description (at least 5 characters)"
                onInput={inputHandler}
            />
            <Input
                id="address"
                element="input"
                label="Address"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid address" // We will check if the address exist in the map in the backend.
                onInput={inputHandler}
            />
            <Button type="submit" disabled={!formState.isValid}>
                ADD PLACE
            </Button>
        </form>
    );
};

export default NewPlace;
