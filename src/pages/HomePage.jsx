import Header from "../components/Header.jsx";
import {useThemeContext} from "../context/ThemeContext.jsx";
import SearchBar from "../components/Filter/SearchBar.jsx";
import FilterDropdown from "../components/Filter/FilterDropdown.jsx";
import {useState} from "react";
import {CountriesList} from "../components/CountryList/CountriesList.jsx";

export function HomePage () {
    const { theme, toggleTheme } = useThemeContext();
    const [keyword, setKeyword] = useState("");
    const [filter, setFilter] = useState({id: 1, value: 'Africa'});

    const filterOptions = [
        {id: 1, value: 'Africa'},
        {id: 2, value: 'Americas'},
        {id: 3, value: 'Asia'},
        {id: 4, value: 'Europe'},
        {id: 5, value: 'Oceania'},
    ];

    const handleSelectChange = (e) => {
        const selectedItem = JSON.parse(e.target.value);
        setFilter(selectedItem);
    };

    return (
        <div className="homepage-container">
            <Header darkMode={theme} switchMode={toggleTheme}/>
            <div className="main-content">
                <div className="search-bar-container">
                    <SearchBar
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)} />
                    <FilterDropdown
                        options={filterOptions}
                        value={filter}
                        onChange={(e) => { handleSelectChange(e)}}
                    />
                </div>
                <div className="list-container">
                    <CountriesList keyword={keyword} filter={filter} />
                </div>
            </div>
        </div>
    )
}