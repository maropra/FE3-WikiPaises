import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [paises, setPaises] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setPaises(data);
            setIsLoading(true);
            console.log(isLoading)
        }
        fetchData()
    }, [])

    return { paises, isLoading }
}
