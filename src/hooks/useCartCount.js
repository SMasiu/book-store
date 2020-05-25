import useGlobalState from '../global-state/use-global-state';

const useCartCount = () => {

    const { state: { cart } } = useGlobalState();

    return cart.length ? cart.reduce((p, c) => p + c.count, 0) : 0;;

}

export default useCartCount;