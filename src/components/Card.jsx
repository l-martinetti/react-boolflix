
const Card = (props) => {

    const { films } = props.films;

    return (
        <>
            {films.map(film => (
                <div key={film.id} className="card">
                    <div>
                        <h4>{film.title}</h4>
                        <p>{film.original_title}</p>
                        <p>{film.original_language}</p>
                        <p>{Math.round(film.vote_average)}</p>
                    </div>
                </div>
            ))}

        </>
    )
}

export default Card