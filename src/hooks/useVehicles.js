import axios from "axios";
import { useEffect, useState } from "react";

const useVehicles = (reload) =>{
    const [vehicles, setVehicles] = useState([]);
    useEffect(() => {
      axios.get("http://localhost:5000/allvehicles").then((res) => {
        setVehicles(res.data);
      });
    }, [reload]);

    return [vehicles, setVehicles];
}

export default useVehicles;