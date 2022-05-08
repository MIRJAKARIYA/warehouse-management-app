import React, { useState } from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { MdSystemUpdateAlt } from "react-icons/md";
import { AiFillWarning } from "react-icons/ai";
import Modal from "react-modal";
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

const ManageSingleItem = ({ vehicle, reload, setReload }) => {
  const { name, image, price, quantity, sold, supplierName, category, _id } =
    vehicle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [conDelete, setCondelete] = useState("");
  const navigate = useNavigate();
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
      <tr className="hover">
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image} alt="" />
              </div>
            </div>
          </div>
        </td>
        <td className="text-sm">{name}</td>
        <td className="text-sm">{category}</td>
        <td className="text-sm">{price}</td>
        <td className="text-sm">{quantity}</td>
        <td className="text-sm">{sold}</td>
        <td className="text-sm">{supplierName}</td>
        <td>
          <div className="flex items-center justify-around ml-[-40px]">
            <button
              onClick={() => navigate(`/inventory/${_id}`)}
              title="UPDATE STOCK"
              className="text-4xl text-blue-700"
            >
              <MdSystemUpdateAlt />
            </button>
            <button
              onClick={openModal}
              title="REMOVE FROM INVENTORY"
              className="text-4xl text-red-700"
            >
              <RiDeleteBin2Fill />
            </button>
          </div>
        </td>
      </tr>

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

export default ManageSingleItem;
