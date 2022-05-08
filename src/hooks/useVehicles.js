import axios from "axios";
import { useEffect, useState } from "react";

const useVehicles = (reload) => {
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    axios
      .get("https://stark-springs-77558.herokuapp.com/allvehicles")
      .then((res) => {
        setVehicles(res.data);
      });
  }, [reload]);

  return [vehicles, setVehicles];
};

export default useVehicles;
