import Card from "./Card"
import { useGlobalContext } from "../contexts/GlobalContext"

const ResultSection = () => {

    const { films, tvSeries } = useGlobalContext();

    return (
        <section>
            {films.length > 0 && <h2>Films</h2>}
            <div className="container card-wrapper">
                {films.map(item => (
                    <Card key={films.id} films={item} />
                ))}
            </div>
            {tvSeries.length > 0 && <h2>Tv Series</h2>}
            <div className="container card-wrapper">
                {tvSeries.map(item => (
                    <Card key={films.id} films={item} />
                ))}
            </div>
        </section>

    )
}

export default ResultSection