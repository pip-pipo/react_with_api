import React , {useState,useEffect} from 'react'
import axios from 'axios'

const useResources = (resourceName)=>{
    const [resources , setResource] = useState([]);

    const fetchResources = async ()=>{
        const response =  await axios.get(`https://jsonplaceholder.typicode.com/${resourceName}`);
            setResource(response.data);
    }


    useEffect(()=>{
        fetchResources(resourceName);
    },[resourceName]);
    return resources
}

export default useResources