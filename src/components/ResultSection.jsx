import Card from "./Card"
import { useGlobalContext } from "../contexts/GlobalContext"

const ResultSection = () => {

    const { films, tvSeries } = useGlobalContext();

    return (
        <>
            <div>
                <Card films={films} tvSeries={tvSeries} />
            </div>
        </>

    )
}

export default ResultSection