import Card from "./Card"
import { useGlobalContext } from "../contexts/GlobalContext"

const ResultSection = () => {

    const { films } = useGlobalContext();

    return (
        <div className="container card-wrapper">
            <Card films={films} />
        </div>
    )
}

export default ResultSection