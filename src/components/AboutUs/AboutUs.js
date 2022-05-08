import React, { useEffect, useState } from "react";
import useVehicles from "../../hooks/useVehicles";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const AboutUs = () => {
  const [vehicles] = useVehicles();
  const [vehicleQuantity, setVehicleQuantity] = useState([]);

  useEffect(() => {
    const quantity = [];
    if (vehicles.length !== 0) {
      vehicles.forEach((vehicle) => {
        const quntityData = {
          name: vehicle.name,
          quantity: vehicle.quantity,
          delivered: vehicle.sold,
        };
        quantity.push(quntityData);
      });
      setVehicleQuantity(quantity);
    }
  }, [vehicles]);
  console.log(vehicleQuantity);

  return (
    <div className="flow-root bg-slate-200 min-h-screen">
      <h1 className="text-5xl text-center font-bold mt-10 text-red-700">WELCOME TO MILITARY WAREHOUSE</h1>
      <h1 className="text-center text-4xl font-semibold mt-10 text-blue-700">The services we offer-</h1>
      <div className="main-container">
        <div className="">
          <h2 className="text-center text-3xl underline mt-5 text-yellow-800 font-semibold">Delivering Vehicles</h2>
          <p className="text-center text-xl w-[50%] mx-auto mt-5">
            We deliver any military vehicles to any part of the world.Customer
            must order any vehicle 1 year earlier before getting the behicle.
          </p>
        </div>
        <div className="">
          <h2 className="text-3xl text-center underline mt-5 text-yellow-800 font-semibold">Stocking Vehicles</h2>
          <p className="text-center text-xl w-[50%] mx-auto mt-5">
            We stock all types of military vehicles mainly tanks,ships,fighter
            jets,sam systems and uav drones.
          </p>
        </div>
      </div>
      <h1 className="text-center text-3xl underline mt-5 text-yellow-800 font-semibold">Delivering and Stocking analysis</h1>
      <div className="overflow-x-auto w-[80%] mx-auto flex justify-center mt-5">
      <AreaChart
          width={1000}
          height={400}
          data={vehicleQuantity}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="delivered" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="quantity" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
      </div>
    </div>
  );
};

export default AboutUs;
