import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import "./Home.css";
import SingleItem from "../SingleItem/SingleItem";
import useVehicles from "../../hooks/useVehicles";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import QuantitySoldCount from "../QuantitySoldCount/QuantitySoldCount";
import OurTeam from "../OurTeam/OurTeam";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
const Home = () => {
  const [vehicles] = useVehicles();
  const [user] = useAuthState(auth);
  const [vehicleCount, setVehicleCount] = useState(0);
  const [vehicleDelivered, setVehicleDelivered] = useState(0);
  useEffect(() => {
    if (vehicles.length !== 0) {
      let productSold = 0;
      let productQuantity = 0;
      vehicles.forEach((vehicle) => {
        productSold += vehicle.sold;
        productQuantity += vehicle.quantity;
      });
      setVehicleDelivered(productSold);
      setVehicleCount(productQuantity);
    }
  }, [vehicles]);
  return (
    <div className="hompage-style min-h-screen flow-root">
      {vehicles.length === 0 ? (
        <Loading></Loading>
      ) : (
        <>
          <Banner></Banner>
          <h1 className="text-white text-center mt-10 text-3xl underline font-semibold">
            WAREHOUSE STATES
          </h1>
          <QuantitySoldCount
            vehiclTypes={vehicles?.length}
            vehicleDelivered={vehicleDelivered}
            vehicleCount={vehicleCount}
          ></QuantitySoldCount>
          <h1 className="text-white text-center mt-10 text-3xl underline font-semibold">
            WAREHOUSE ITEMS
          </h1>

          <div className="w-full mt-5 mb-3">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-[1300px] mx-auto justify-items-center gap-y-10">
              {vehicles?.slice(0, 6).map((vehicle) => (
                <SingleItem vehicle={vehicle} key={vehicle._id}></SingleItem>
              ))}
            </div>
          </div>

          <div className="text-center mb-10">
          <Link className="px-3 py-1 rounded-md hover:bg-blue-900 bg-blue-700 text-white text-lg font-semibold" to='/manageitems'>Manage Inventories</Link>
    </div>

          <div className="mb-10">
            <h1 className="text-white text-center text-3xl font-semibold underline mb-5">OUR TEAM MEMBERS</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-[1265px] mx-auto justify-items-center gap-y-10 our-team-style p-5">
              <OurTeam></OurTeam>
            </div>
          </div>

          <Footer></Footer>
        </>
      )}
    </div>
  );
};

export default Home;
