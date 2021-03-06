import React, { useState } from "react";
import useSelectedVehicles from "../../hooks/useSelectedVehicles";
import ManageSingleItem from "./ManageSingleItem/ManageSingleItem";
import { BsPlusCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ManageItems = () => {
  const [reload, setReload] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const [vehicles] = useSelectedVehicles(query, reload);

  const handleCategory = (e) => {
    const category = e.target.value;
    if (category === "") {
      setQuery(category);
    } else {
      setQuery(`category=${category}`);
    }
  };

  return (
    <>
      <div className="flex md:w-[90%] items-center justify-center md:flex-row flex-col md:justify-between w-full mx-auto my-10">
        <h1 className="text-3xl font-semibold mb-5">Manage Inventory Items</h1>
        <div className="flex">
          <div className="md:w-[250px]">
            <select
              defaultValue=""
              onChange={handleCategory}
              className="select select-primary w-full max-w-xs"
            >
              <option value="">ALL</option>
              <option value="BATTLE TANKS">BATTLE TANKS</option>
              <option value="FIGHTER JETS">FIGHTER JETS</option>
              <option value="BATTLE SHIPS">BATTLE SHIPS</option>
              <option value="UAV DRONES">UAV DRONES</option>
              <option value="SAM SYSTEMS">SAM SYSTEMS</option>
              <option value="BATTLE SUBMARINES">BATTLE SUBMARINES</option>
            </select>
          </div>
          <button onClick={()=>navigate('/additem')} className="px-5 rounded-lg flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold ml-4">
            <span className="mr-2">
              <BsPlusCircleFill></BsPlusCircleFill>
            </span>{" "}
            Add Item
          </button>
        </div>
      </div>
      <div className="overflow-x-auto w-full xl:w-[90%] mx-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="text-[15px]">Thumb</th>
              <th className="text-[15px]">Name</th>
              <th className="text-[15px]">Category</th>
              <th className="text-[15px]">Price</th>
              <th className="text-[15px]">Quantity</th>
              <th className="text-[15px]">Sold</th>
              <th className="text-[15px]">Supplier</th>
              <th className="text-[15px]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle) => (
              <ManageSingleItem
                key={vehicle._id}
                vehicle={vehicle}
                setReload={setReload}
                reload={reload}
              ></ManageSingleItem>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageItems;
