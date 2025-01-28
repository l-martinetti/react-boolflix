import { createContext, useContext, useState } from "react";
import axios from "axios";

const GlobalContext = createContext();


const GlobalProvider = ({ children }) => {

    const [films, setFilms] = useState([]);
    const [inputSearch, setInputSearch] = useState('');

    const queryUrl = `${import.meta.env.VITE_BASE_API_MOVIE_URL}&query=${inputSearch}`;

    const handleSearchSubmit = (e) => {
        e.preventDefault()

        axios.get(queryUrl)
            .then(res => {
                setFilms(res.data.results);
            })
            .catch(error => {
                console.error('Error: ', err);
            })
    }

    const value = {
        handleSearchSubmit,
        films,
        inputSearch,
        setInputSearch
    }
    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
};

const useGlobalContext = () => {
    return useContext(GlobalContext)
};

export { useGlobalContext, GlobalProvider }