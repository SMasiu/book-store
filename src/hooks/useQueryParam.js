import { useLocation } from "react-router-dom";

const useQueryParam = () => {
    const { search } = useLocation()
    
    if(!search) {
        return null;
    }

    return search.substring(search.search('=') + 1, search.length);
}

export default useQueryParam;