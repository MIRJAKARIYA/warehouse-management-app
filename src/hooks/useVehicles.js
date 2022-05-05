import axios from "axios";
import { useEffect, useState } from "react";

const useVehicles = () =>{
    const [vehicles, setVehicles] = useState([]);
    useEffect(() => {
      axios.get("http://localhost:5000/allvehicles").then((res) => {
        setVehicles(res.data);
      });
    }, []);

    return [vehicles, setVehicles];
}

export default useVehicles;