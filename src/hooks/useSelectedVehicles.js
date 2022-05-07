import axios from "axios";
import { useEffect, useState } from "react"

const useSelectedVehicles = (query,reload) =>{
    const [vehicles, setVehicles] = useState([]);
    useEffect(()=>{
        const getVehicles = async () =>{
            const url = `http://localhost:5000/getVehicles?${query}`;
        
        try{
            const { data } = await axios.get(url);
            setVehicles(data);           
        }
        catch(error){
            console.log(error)
        }
        }
        getVehicles();
    },[query,reload])
    return [vehicles, setVehicles];
}

export default useSelectedVehicles;