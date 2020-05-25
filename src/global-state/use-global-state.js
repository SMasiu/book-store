import { useContext } from 'react';
import Context from './context';

const useGlobalState = () => {
    const [state, dispatch] = useContext(Context);

    return {
        state,
        dispatch
    }
}

export default useGlobalState;