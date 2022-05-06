import React from "react";
import Banner from "../Banner/Banner";
import "./Home.css";
import SingleItem from "../SingleItem/SingleItem";
import useVehicles from "../../hooks/useVehicles";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const Home = () => {
  const [vehicles, setVehicles] = useVehicles();
  const [user] = useAuthState(auth);
  console.log(user)
  return (
    <div className="hompage-style min-h-screen flow-root">
      <Banner></Banner>
      <div className="w-full mt-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-[1300px] mx-auto justify-items-center gap-y-10">
          {vehicles?.slice(0,6).map((vehicle) => (
            <SingleItem vehicle={vehicle} key={vehicle._id}></SingleItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
