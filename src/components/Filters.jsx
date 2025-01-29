import { useGlobalContext } from "../contexts/GlobalContext"

const Filters = () => {

    const { handleSearchSubmit, inputSearch, setInputSearch } = useGlobalContext();

    return (
        <div>
            <form onSubmit={handleSearchSubmit}>
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

export default Filters