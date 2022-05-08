import React from "react";
import "./AddItem.css";
import { AiOutlinePlus } from "react-icons/ai";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
const AddItem = () => {
  const [user] = useAuthState(auth);

  const handleAddItem = (e) => {
    e.preventDefault();
    const itemName = e.target.itemName.value;
    const quantity = e.target.quantity.value;
    const price = "$" + e.target.price.value;
    const sold = e.target.sold.value;
    const category = e.target.category.value;
    const supplierName = e.target.supplierName.value;
    const image = e.target.image.value;
    const description = e.target.description.value;

    const vehicle = {
      name: itemName,
      user: user.email,
      category: category,
      description: description,
      image: image,
      price: price,
      quantity: Number(quantity),
      sold: Number(sold),
      supplierName: supplierName,
    };
    fetch("https://stark-springs-77558.herokuapp.com/addVehicle", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(vehicle),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged) {
          toast("item added successfully 😊");
        } else {
          toast("Something wrong happend 😕");
        }
      });
    e.target.reset();
  };
  return (
    <>
      <div className="flow-root additem-container min-h-screen">
        <form onSubmit={handleAddItem}>
          <div className="flex flex-col md:flex-row justify-between md:w-[50%] mx-auto p-10 w-[95%] mt-20 rounded-xl">
            <div className="md:w-1/2">
              <div>
                <label htmlFor="itemName" className="block mb-1">
                  Item Name:
                </label>
                <input
                  type="text"
                  placeholder="Enter item name"
                  className="input input-bordered input-warning w-full"
                  name="itemName"
                  required
                />
              </div>
              <div className="mt-2">
                <label htmlFor="quantity" className="block mb-1">
                  Quantity:
                </label>
                <input
                  type="number"
                  min={0}
                  placeholder="Enter quantity"
                  className="input input-bordered input-warning w-full"
                  name="quantity"
                  required
                />
              </div>
              <div className="mt-2">
                <label htmlFor="price" className="block mb-1">
                  Price:
                </label>
                <input
                  type="number"
                  min={0}
                  placeholder="Enter price"
                  className="input input-bordered input-warning w-full"
                  name="price"
                  required
                />
              </div>
              <div className="mt-2">
                <label htmlFor="sold" className="block mb-1">
                  Sold:
                </label>
                <input
                  type="number"
                  min={0}
                  placeholder="Enter sold quantity"
                  className="input input-bordered input-warning w-full"
                  name="sold"
                  required
                />
              </div>
            </div>
            <div className="md:w-1/2 md:ml-5">
              <div>
                <label htmlFor="category" className="block mb-1">
                  Category:
                </label>
                <select
                  className="input select-category input-bordered input-warning w-full"
                  defaultValue={"BATTLE TANKS"}
                  name="category"
                  required
                >
                  <option>BATTLE TANKS</option>
                  <option>FIGHTER JETS</option>
                  <option>BATTLE SHIPS</option>
                  <option>UAV DRONES</option>
                  <option>SAM SYSTEMS</option>
                  <option>BATTLE SUBMARINES</option>
                </select>
              </div>
              <div className="mt-2">
                <label htmlFor="email" className="block mb-1">
                  Your Email:
                </label>
                <input
                  type="email"
                  placeholder="Emter your email"
                  className="input input-bordered input-warning w-full"
                  name="email"
                  value={user?.email || ""}
                  readOnly
                  required
                />
              </div>
              <div className="mt-2">
                <label htmlFor="supplierName" className="block mb-1">
                  Supplier Name:
                </label>
                <input
                  type="text"
                  placeholder="Enter supplier name"
                  className="input input-bordered input-warning w-full"
                  name="supplierName"
                  required
                />
              </div>
              <div className="mt-2">
                <label htmlFor="image" className="block mb-1">
                  Item Image:
                </label>
                <input
                  type="text"
                  placeholder="Enter the photo URL of the item"
                  className="input input-bordered input-warning w-full"
                  name="image"
                  required
                />
              </div>
            </div>
            <ToastContainer></ToastContainer>
          </div>
          <div className="mt-[-25px] md:w-[43.8%] w-[79%] mx-auto">
            <label htmlFor="description" className="block mb-1">
              Description:
            </label>
            <textarea
              className="textarea description-style textarea-warning w-full"
              placeholder="Enter description of the item"
              name="description"
              rows={5}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-outline btn-warning block mx-auto px-10 mt-5 "
          >
            <div className="flex">
              <AiOutlinePlus></AiOutlinePlus>
              <span className="ml-1">ADD ITEM</span>
            </div>
          </button>
        </form>
      </div>
    </>
  );
};

export default AddItem;
