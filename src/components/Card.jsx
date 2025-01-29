
const Card = ({ films }) => {

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

    const countryCode = languageToCountry[films.original_language.toLowerCase()] || "GB";

    return (

        <div className="card">
            <div>
                <h4>{films.title || films.name}</h4>
                <p>{films.original_title || films.original_name}</p>
                <img
                    src={`https://flagsapi.com/${countryCode}/flat/64.png`}
                    alt={films.original_language}
                />
                <p>Voto: {Math.round(films.vote_average)}</p>
            </div>
        </div>
    )
}

export default Card