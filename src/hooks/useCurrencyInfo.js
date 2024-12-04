import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://open.er-api.com/v6/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => {
                // The data is stored in the 'rates' property of the API response
                setData(res.rates || {}); 
            })
            .catch((err) => {
                console.error("Error fetching currency data:", err);
                setData({});
            });
    }, [currency]);
    return data;
}

export default useCurrencyInfo;
