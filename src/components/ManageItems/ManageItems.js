import React, { useState } from "react";
import useVehicles from "../../hooks/useVehicles";
import Loading from "../Loading/Loading";
import ManageSingleItem from "./ManageSingleItem/ManageSingleItem";
import { ToastContainer, toast } from 'react-toastify';

const ManageItems = () => {
  const [reload, setReload] = useState(false)
  const [vehicles, setVehicles] = useVehicles(reload);
  
  const handleDelete = (id) =>{
    console.log(id)
    fetch(`http://localhost:5000/vehicleDlete/${id}`,{
      method: 'DELETE'
    })
    .then(res => res.json)
    .then(data => {
      setReload(!reload);
      toast('Vehicle removed successfully');
    })
  }
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
                  handleDelete={handleDelete}
                ></ManageSingleItem>
              ))}
            </tbody>
          </table>
          <ToastContainer></ToastContainer>
        </>
      )}
    </div>
  );
};

export default ManageItems;
