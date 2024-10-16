import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        // Fetch data from ExchangeRate-API for real-time currency values
        fetch(`https://open.er-api.com/v6/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => {
                // The data is stored in the 'rates' property of the API response
                setData(res.rates || {}); // Fallback to an empty object if 'rates' is not available
            })
            .catch((err) => {
                console.error("Error fetching currency data:", err);
                setData({});
            });
    }, [currency]);

    console.log(data); // Debugging purposes
    return data;
}

export default useCurrencyInfo;
