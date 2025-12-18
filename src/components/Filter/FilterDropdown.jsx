function FilterDropdown({options, value, onChange}) {
    return (
        <div className="dropdown-container">
            <select className="dropdown-select" value={JSON.stringify(value)} onChange={onChange} title="Filter by region">
                {options.map((opt) => (
                    <option key={opt.id} value={JSON.stringify(opt)}>
                        {opt.value}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default FilterDropdown;