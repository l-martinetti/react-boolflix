import { createContext, useContext, useState } from "react";
import axios from "axios";

const GlobalContext = createContext();


const GlobalProvider = ({ children }) => {

    const [films, setFilms] = useState([]);
    const [tvSeries, setTvSeries] = useState([])
    const [inputSearch, setInputSearch] = useState('');

    const queryUrlMovie = `${import.meta.env.VITE_BASE_API_MOVIE_URL}&query=${inputSearch}`;

    const queryUrlTvSeries = `${import.meta.env.VITE_BASE_API_TV_SERIES_URL}&query=${inputSearch}`

    const handleSearchSubmit = (e) => {
        e.preventDefault()

        axios.get(queryUrlMovie)
            .then(res => {
                setFilms(res.data.results);

            })
            .catch(error => {
                console.error('Error: ', error);
            })

        axios.get(queryUrlTvSeries)
            .then(res => {
                setTvSeries(res.data.results);

            })
            .catch(error => {
                console.error('Error: ', error);
            })
    }

    const value = {
        handleSearchSubmit,
        films,
        inputSearch,
        setInputSearch,
        tvSeries
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