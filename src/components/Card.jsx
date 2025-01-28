
const Card = (props) => {

    const { films } = props;

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

        </>
    )
}

export default Card