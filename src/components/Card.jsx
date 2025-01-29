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
        if (i < Math.round(films.vote_average / 2)) {
            voteStars.push(<MdOutlineStar />)
        } else {
            voteStars.push(<MdOutlineStarBorder />)
        }
    }

    return (

        <div className="card">
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
    )
}

export default Card