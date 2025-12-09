import { useEffect, useState } from "react";
import { fetchCountries } from "../api/country.js";

export function useCountries(filter) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCountries(filter).then(countries => {
            setData(countries);
            setLoading(false);
        });
    }, [filter.keyword, filter.filter]);

    return { data, loading };
}
