import {useState, useEffect} from "react"
import axios from "axios"

export default function useFetch(url) {

    const[data,setData] = useState([])
    const[error,setError] = useState(null)
    const[loading,setLoading] = useState(false)

    useEffect(()=> {
        setLoading(true);
        axios.get(url)
        .then((response) => {
            setData(response.data.results)
        })
        .catch((err) =>{
            setError(err)
        })
        .finally(() =>{
            setLoading(false)
        })
    },[url])

    const newDoc = () => {
        setLoading(true);
        axios.get(url)
        .then((response) => {
            setData(response.data.results)
        })
        .catch((err) =>{
            setError(err)
        })
        .finally(() =>{
            setLoading(false)
        }) 
    } 

    return{data, loading, error, newDoc}
} 