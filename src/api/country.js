export async function fetchCountries(filterData) {
    const response = await fetch('data.json'
        ,{
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    )

    if (!response.ok) throw new Error("Failed to fetch users");
    const data = await response.json();
    // Local filtering
    return applyFilters(data, filterData.keyword, filterData.filter);
}

function applyFilters (data, keyword, selectedOption) {
    return data.filter((item) => {
        return (item.name.toLowerCase().includes(keyword) && item.region === selectedOption.value);
    })
}