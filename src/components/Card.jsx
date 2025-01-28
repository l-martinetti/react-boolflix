
const Card = (props) => {

    const { films, tvSeries } = props;

    const languageToCountry = {
        en: "GB",
        it: "IT",
        fr: "FR",
        ja: "JP",
        es: "ES",
        de: "DE",
        zh: "CN",
        ko: "KR",
        ru: "RU"
    };

    return (
        <>
            <h2>Films</h2>
            <div className="container card-wrapper">
                {films.map(film => {

                    const countryCode = languageToCountry[film.original_language.toLowerCase()] || "GB";

                    return (
                        <div key={film.id} className="card">
                            <div>
                                <h4>{film.title}</h4>
                                <p>{film.original_title}</p>
                                <img
                                    src={`https://flagsapi.com/${countryCode}/flat/64.png`}
                                    alt={film.original_language}
                                />
                                <p>{Math.round(film.vote_average)}</p>
                            </div>
                        </div>
                    )

                }
                )}
            </div>


            <h2>Tv series</h2>
            <div className="container card-wrapper">
                {tvSeries.map(serie => {

                    const countryCode = languageToCountry[serie.original_language.toLowerCase()] || "GB";

                    return (
                        <div key={serie.id} className="card">
                            <div>
                                <h4>{serie.title}</h4>
                                <p>{serie.original_title}</p>
                                <img
                                    src={`https://flagsapi.com/${countryCode}/flat/64.png`}
                                    alt={serie.original_language}
                                />
                                <p>{Math.round(serie.vote_average)}</p>
                            </div>
                        </div>
                    )

                }
                )}
            </div>

        </>
    )
}

export default Card