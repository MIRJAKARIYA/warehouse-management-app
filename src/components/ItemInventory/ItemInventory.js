import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemInventory = () => {
  const { itemId } = useParams();
  const [vehicle, setVehicle] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:5000/vehicle/${itemId}`)
      .then((res) => setVehicle(res.data));
  }, [itemId]);
  console.log(vehicle);

  return (
    <div className="flex flex-col md:flex-row mx-auto mt-10 md:w-[80%] w-[95%] p-5 bg-[#363945] rounded-2xl">
      <div className="md:w-[40%] flex justify-center">
        <img
          src={vehicle.image}
          className="w-full h-[500px] rounded-2xl shadow-2xl object-cover"
          alt=""
        />
      </div>
      <div className="md:w-[60%] md:ml-8 text-white">
        <h1 className="text-4xl font-bold">{vehicle?.name}</h1>
        <p className="mt-4"><span className="text-yellow-500 font-semibold underline text-lg">Vehicle ID:</span> {vehicle?._id}</p>
        <p className="my-2 text-lg">
          {vehicle?.description}
        </p>
        <div>
          <div className="flex items-center ">
            <div>
              <p><span className="text-yellow-500 font-semibold underline text-lg">Supplier Name:</span> {vehicle?.supplierName}</p>
              <p><span className="text-yellow-500 font-semibold underline text-lg">Price:</span> {vehicle?.price}</p>
              <p><span className="text-yellow-500 font-semibold underline text-lg">Quantity:</span> {vehicle?.quantity}</p>
              <p><span className="text-yellow-500 font-semibold underline mb-4 text-lg">Sold:</span> {vehicle?.sold}</p>
            </div>
            <button className="ml-10 font-semibold border-2 text-lg px-[50px] py-[5px] block rounded-lg duration-200 hover:bg-yellow-600">delivered</button>
          </div>
          <form>
            <div className="mt-2">
              <h4 className="text-2xl font-semibold mb-2 underline">Restock Item:</h4>
              <input type="number" placeholder="Restock item" className="input input-bordered input-warning w-full text-black max-w-xs" min={0} />
            </div>
            <button type="submit" className="text-lg font-semibold px-[40px] py-[4px] bg-yellow-700 rounded-md ml-[100px] mt-3">restock</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ItemInventory;
