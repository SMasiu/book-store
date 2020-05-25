import useGlobalState from "../global-state/use-global-state"

const useProductCount = (id) => {

    const { state } = useGlobalState();

    let prod = state.cart.find( c => c.product.id === id );

    return prod ? prod.count : 0;

}

export default useProductCount;