import React from "react";
import useVehicles from "../../hooks/useVehicles";
import ManageSingleItem from "./ManageSingleItem/ManageSingleItem";

const ManageItems = () => {
    const [vehicles, setVehicles] = useVehicles()
    console.log(vehicles)
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Thumb</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Sold</th>
            <th>Supplier</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {
                vehicles.map(vehicle => <ManageSingleItem key={vehicle._id} vehicle={vehicle}></ManageSingleItem>)
            }
        </tbody>
      </table>
    </div>
  );
};

export default ManageItems;
