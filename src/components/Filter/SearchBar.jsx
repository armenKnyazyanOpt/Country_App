import './SearchBar.scss';

function SearchBar ({value, onChange}) {
    return (
            <input
                type="text"
                placeholder="Search for countires..."
                value={value}
                onChange={onChange}
            />
    )
}

export default SearchBar;