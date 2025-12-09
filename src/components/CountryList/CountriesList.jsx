import CountryItemCard from "./CountryItem.jsx";
import './CountryList.scss';
import {useCountries} from "../../hooks/useCountries.js";

export function CountriesList ({keyword, filter}) {
    const { data, loading } = useCountries({keyword, filter});

    return (
        <div className="country-list-grid">
            {
                (!!data && !loading) &&
                data.map((country) => (
                    <CountryItemCard countryData={country} key={country.numericCode}/>
                ))
            }
            {
                (!data && loading) &&
                <div>
                    Loading...
                </div>
            }
            {
                (!!data && data?.length === 0) &&
                <div>
                    Empty Content Placeholder
                </div>
            }
        </div>
    )
}