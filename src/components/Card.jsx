import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";

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
    let voteStars = [];

    for (let i = 0; i < 5; i++) {
        if (i < Math.ceil(films.vote_average / 2)) {
            voteStars.push(<MdOutlineStar key={i} />)
        } else {
            voteStars.push(<MdOutlineStarBorder key={i} />)
        }
    }

    return (
        <>
            <div className="card">
                <div className="poster">
                    <img src={films.poster_path
                        ? `https://image.tmdb.org/t/p/w342${films.poster_path}`
                        : "/placeholder.webp"}
                        alt={films.title || films.name} />
                </div>
                <div className="card-content">
                    <div>
                        <h4>{films.title || films.name}</h4>
                        <p>{films.original_title || films.original_name}</p>
                        <img
                            src={`https://flagsapi.com/${countryCode}/flat/64.png`}
                            alt={films.original_language}
                        />
                        <p>Voto: {voteStars}</p>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Card