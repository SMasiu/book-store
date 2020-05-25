import { v4 } from "uuid";

const save = (state) => {
    localStorage.setItem('state', JSON.stringify(state))
}

const globalStateReducer = (state, { type, payload }) => {

    const addProductReducer = (state, payload) => {
        return {
            ...state,
            products: [...state.products, {...payload, id: v4()}]
        }
    }

    const upadteProductReducer = (state, payload) => {
        const { products } = state;
        const index = products.findIndex( p => p.id === payload.id );
        products[index] = {...payload};
        return { ...state, products }
    }

    const removeProductReducer = (state, payload) => {
        const { products, cart } = state;

        let index = products.findIndex( p => p.id === payload );
        if(index !== -1) {
            products.splice(index, 1);
        }

        index = cart.findIndex( c => c.product.id === payload );
        if(index !== -1) {
            cart.splice(index, 1);
        }

        return { ...state, products, cart };
    }

    const updateCartReducer = (state, payload) => {
        const { cart } = state;

        const index = cart.findIndex(c => c.product.id === payload.product.id);

        if(index === -1) {
            cart.push({ count: payload.count, product: payload.product });
        } else {
            if(!payload.count) {
                cart.splice(index, 1);
            } else {
                cart[index].count = payload.count;
            }
        }
        
        return { ...state, cart };

    }

    const reducers = {
        addProduct: addProductReducer,
        updateProduct: upadteProductReducer,
        removeProduct: removeProductReducer,
        updateCart: updateCartReducer
    }

    try {
        let res = reducers[type](state, payload);
        save(res);
        return res;
    } catch {
        return state;
    }

}

export default globalStateReducer;