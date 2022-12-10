import { useEffect, useState } from "react"
import axios from "axios"

const useFretch = (url) => {
    const [inadata, setInadata] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect (() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await axios.post(url)
            } catch (error) {
                setError(error);
            }
            setLoading(false)
        };
        fetchData();
    }, [url]);

    const reFetch = async () => {
        setLoading(true);
    
        try {
            const res = await axios.post(url);
            setInadata(res.data)
        } catch (error) {
            setError(error)
            
        }
            setLoading(false)
    }
    return {inadata, loading, error, reFetch}
}

