import React, { useReducer } from 'react';
import Context from './context';
import globalStateReducer from './reducer';
import { v4 } from 'uuid';

const GlobalStateProvider = ({ children }) => {

    let data = localStorage.getItem('state');
    let init = data ? JSON.parse(data) : {
        products: [
            { id: v4(), name: 'Some book name', price: 20 },
            { id: v4(), name: 'Other book name', price: 25 },
        ],
        cart: []
    }

    const [ state, dispatch ] = useReducer(globalStateReducer, init);

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}


export default GlobalStateProvider;