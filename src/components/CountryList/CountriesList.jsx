import CountryItemCard from "./CountryItem.jsx";
import './CountryList.scss';

export function CountriesList ({items}) {
    return (
        <div className="country-list-grid">
            {
                !!items.length &&
                items.map((country) => (
                    <CountryItemCard countryData={country} key={country.numericCode}/>
                ))
            }
            {
                !items.length &&
                <div>
                    Empty Content Placeholder
                </div>
            }
        </div>
    )
}