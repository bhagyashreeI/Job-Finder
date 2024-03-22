import {useEffect,useState} from 'react'
const useFetch = () => {
    const [jobData,setJobData] = useState([])
    useEffect(()=>{
        fetchData()
    })

    const fetchData = async() => {
    }
}

export default useFetch;