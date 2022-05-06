import React, { useState } from "react";
import useVehicles from "../../hooks/useVehicles";
import Loading from "../Loading/Loading";
import ManageSingleItem from "./ManageSingleItem/ManageSingleItem";





const ManageItems = () => {
  const [reload, setReload] = useState(false);
  const [vehicles, setVehicles] = useVehicles(reload);
  
  return (
    <div className="overflow-x-auto w-full xl:w-[90%] mx-auto">
      {vehicles.length === 0 ? (
        <Loading></Loading>
      ) : (
        <>
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
          
          
        </>
      )}
    </div>
  );
};

export default ManageItems;
