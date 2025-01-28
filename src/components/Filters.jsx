import { useGlobalContext } from "../contexts/GlobalContext"

const SearchBar = () => {

    const { handleSearchSubmit, inputSearch, setInputSearch } = useGlobalContext();

    return (
        <div>
            <form action='#' onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    placeholder="Cerca il tuo film"
                    value={inputSearch}
                    onChange={(e) => setInputSearch(e.target.value)}
                />
                <button type="submit">Cerca</button>
            </form>
        </div>
    )
}

export { SearchBar }