import React, { useState } from "react";
import Modal from "react-modal";
import { AiFillWarning } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "350px",
    borderRadius: "20px",
  },
};

Modal.setAppElement("#root");

const MySingleItem = ({ vehicle, reload, setReload }) => {
  const navigate = useNavigate();
  const { image, name, price, quantity, sold, supplierName, _id } = vehicle;

  const [modalIsOpen, setIsOpen] = useState(false);
  const [conDelete, setCondelete] = useState("");
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const confirmDelete = (id) => {
    fetch(`https://stark-springs-77558.herokuapp.com/vehicleDlete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setCondelete("");
        closeModal();
        setReload(!reload);
      });
  };

  const handleCondelete = (e) => {
    setCondelete(e.target.value);
  };
  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl w-full max-w-[500px] h-[260px] relative">
        <div className="w-[40%]">
          <img src={image} alt={`${name}`} className="w-full h-full" />
        </div>
        <div className=" w-[58%] ml-3">
          <h2 className="card-title underline text-2xl font-bold text-blue-700">
            {name}
          </h2>
          <div className="mt-2">
            <p>
              <span className="font-semibold text-red-800 text-lg">
                Supplier:
              </span>
              {supplierName}
            </p>
            <p className="mt-2">
              <span className="font-semibold text-red-800 text-lg">
                Quantity:
              </span>
              {quantity}
            </p>
            <p className="mt-2">
              <span className="font-semibold text-red-800 text-lg">Price:</span>
              {price}
            </p>
            <p className="mt-2">
              <span className="font-semibold text-red-800 text-lg">Sold:</span>
              {sold}
            </p>
          </div>
          <div className="absolute top-[75%] flex left-[52%]">
            <button
              className="btn btn-primary mr-2"
              onClick={() => navigate(`/inventory/${_id}`)}
            >
              UPDATE
            </button>
            <button
              onClick={openModal}
              className="btn bg-red-600 hover:bg-red-700 border-0"
            >
              DELETE
            </button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <div>
            <div className="">
              <p className="text-6xl w-[80px] mx-auto">
                <AiFillWarning className="ml-2 mt-[2px] text-red-700"></AiFillWarning>
              </p>
            </div>
            <h1 className="text-4xl font-semibold text-center mt-4">
              Are you sure?
            </h1>
          </div>

          <div className="mt-4">
            <p className="text-center font-semibold">
              Write 'CONFIRM' to delete the vehicle
            </p>
            <input
              className="border-[1px] pl-2 h-9 block mx-auto mt-2 border-slate-500"
              type="text"
              onChange={handleCondelete}
            />
          </div>
          <div className="text-center mt-4">
            <button
              className={`px-4 py-2 text-lg font-semibold text-white rounded-md ${
                conDelete === "CONFIRM"
                  ? "bg-red-700"
                  : "bg-red-700 bg-opacity-40"
              }`}
              onClick={() => confirmDelete(_id)}
              disabled={conDelete === "CONFIRM" ? false : true}
            >
              DELETE
            </button>
            <button
              onClick={closeModal}
              className="ml-2 text-white font-semibold px-4 py-2 text-lg bg-green-700 rounded-md"
            >
              CANCEL
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default MySingleItem;
