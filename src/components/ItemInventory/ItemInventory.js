import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useParams } from "react-router-dom";
import auth from "../../firebase.init";

const ItemInventory = () => {
  const { itemId } = useParams();
  const [vehicle, setVehicle] = useState({});
  const [isChanged, setIsChanged] = useState(false);
  const [user] = useAuthState(auth);
  useEffect(() => {
    fetch(`https://stark-springs-77558.herokuapp.com/vehicle/${itemId}`)
      .then((res) => res.json())
      .then((data) => setVehicle(data));
  }, [itemId, isChanged]);

  const handleRestock = (e) => {
    e.preventDefault();
    const itemCount = Number(e.target.restockCount.value);
    const vehicleCount = Number(vehicle.quantity) + itemCount;
    fetch(
      `https://stark-springs-77558.herokuapp.com/restockvehicle/${itemId}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: vehicle?.name,
          user: vehicle?.user,
          category: vehicle?.category,
          description: vehicle?.description,
          image: vehicle?.image,
          price: vehicle?.price,
          quantity: vehicleCount,
          sold: vehicle?.sold,
          supplierName: vehicle?.supplierName,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setIsChanged(!isChanged);
      });
    e.target.reset();
  };

  const handleDelivered = (e) => {
    if (vehicle?.quantity > 0) {
      const vehicleCount = Number(vehicle.quantity) - 1;
      const soldCount = Number(vehicle.sold) + 1;
      fetch(
        `https://stark-springs-77558.herokuapp.com/delivervehicle/${itemId}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            name: vehicle?.name,
            user: vehicle?.user,
            category: vehicle?.category,
            description: vehicle?.description,
            image: vehicle?.image,
            price: vehicle?.price,
            quantity: vehicleCount,
            sold: soldCount,
            supplierName: vehicle?.supplierName,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsChanged(!isChanged);
        });
    }
  };

  return (
    <>
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
          <p className="mt-4">
            <span className="text-yellow-500 font-semibold underline text-lg">
              Vehicle ID:
            </span>{" "}
            {vehicle?._id}
          </p>
          <p className="my-2 text-lg">{vehicle?.description}</p>
          <div>
            <div className="flex items-center ">
              <div>
                <p>
                  <span className="text-yellow-500 font-semibold underline text-lg">
                    Supplier Name:
                  </span>{" "}
                  {vehicle?.supplierName}
                </p>
                <p>
                  <span className="text-yellow-500 font-semibold underline text-lg">
                    Price:
                  </span>{" "}
                  {vehicle?.price}
                </p>
                <p>
                  <span className="text-yellow-500 font-semibold underline text-lg">
                    Quantity:
                  </span>{" "}
                  {vehicle?.quantity}
                </p>
                <p>
                  <span className="text-yellow-500 font-semibold underline mb-4 text-lg">
                    Sold:
                  </span>{" "}
                  {vehicle?.sold}
                </p>
              </div>
              <button
                onClick={handleDelivered}
                className="ml-10 font-semibold border-2 text-lg px-[50px] py-[5px] block rounded-lg duration-200 hover:bg-yellow-600"
              >
                delivered
              </button>
            </div>
            <form onSubmit={handleRestock}>
              <div className="mt-2">
                <h4 className="text-2xl font-semibold mb-2 underline">
                  Restock Item:
                </h4>
                <input
                  type="number"
                  placeholder="Restock item"
                  className="input input-bordered input-warning w-full text-black max-w-xs"
                  min={0}
                  name="restockCount"
                />
              </div>
              <button
                type="submit"
                className="text-lg font-semibold px-[40px] py-[4px] bg-yellow-700 rounded-md ml-[100px] mt-3"
              >
                restock
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="text-center my-5">
        <Link
          className="px-3 py-1 rounded-md hover:bg-blue-900 bg-blue-700 text-white text-lg font-semibold"
          to="/manageitems"
        >
          Manage Inventories
        </Link>
      </div>
    </>
  );
};

export default ItemInventory;
