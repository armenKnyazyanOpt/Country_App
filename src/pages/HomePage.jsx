import Header from "../components/Header.jsx";
import {useTheme} from "../context/ThemeContext.jsx";
import SearchBar from "../components/Filter/SearchBar.jsx";
import FilterDropdown from "../components/Filter/FilterDropdown.jsx";
import {useEffect, useState} from "react";
import {CountriesList} from "../components/CountryList/CountriesList.jsx";
import './HomePage.scss';

export function HomePage () {
    const { toggleTheme, darkMode } = useTheme();

    const [keyword, setKeyword] = useState("");
    const [filter, setFilter] = useState({id: 1, value: 'Africa'});
    const [countryItems, setCountryItems] = useState([]);

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

    const getData = async ()=> {
        await fetch('data.json'
            ,{
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function(response){
                return response.json();
            })
            .then(function(parsedData) {
                const filteredCountryData = applyFilters(parsedData);
                setCountryItems(filteredCountryData)
            });
    }

    function applyFilters (data) {
        return data.filter((item) => {
            return (item.name.toLowerCase().includes(keyword) && item.region === filter.value);
        })
    }

    useEffect(()=>{
        getData()
    },[keyword, filter])

    return (
        <div className="homepage-container">
            <Header darkMode={darkMode} switchMode={toggleTheme}/>
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
                    <CountriesList items={countryItems}/>
                </div>
            </div>
        </div>
    )
}