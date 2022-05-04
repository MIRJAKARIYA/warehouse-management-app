import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import "./Home.css";
import SingleItem from "../SingleItem/SingleItem";
import axios from "axios";
const Home = () => {
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/allvehicles").then((res) => {
      setVehicles(res.data.slice(0,6));
    });
  }, []);
  return (
    <div className="hompage-style min-h-screen flow-root">
      <Banner></Banner>
      <div className="w-full mt-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-[1300px] mx-auto justify-items-center gap-y-10">
          {vehicles.map((vehicle) => (
            <SingleItem vehicle={vehicle} key={vehicle._id}></SingleItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
