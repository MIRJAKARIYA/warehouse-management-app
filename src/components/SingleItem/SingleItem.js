import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SingleItem.css";
const SingleItem = ({ vehicle }) => {
  const { description, name, price, quantity, _id, supplierName, image } =
    vehicle;
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();
  return (
      <div>
        <div
        className="rounded-xl p-[4px] max-w-[400px] card-container-style"
        >
        <div>
          <img
            src={image}
            className="rounded-tl-xl w-full rounded-tr-xl h-[250px]"
            alt=""
          />
        </div>
        <div className="p-2 rounded-bl-xl rounded-br-xl" style={{ backgroundColor: "#383b39" }}>
          <h1 className="text-xl font-bold text-white text-center">{name}</h1>
          <p className="text-white">
            {showAll?description:description.slice(0, 130)+'...'}
            <br />
            <button onClick={()=>setShowAll(!showAll)} className="block ml-auto mr-4 text-red-400">{showAll?'show less':'show more'}</button>
          </p>
          <p className="text-white">Price: {price}</p>
          <p className="text-white">Quantity: {quantity}</p>
          <p className="text-white">Supplier name: {supplierName}</p>
          <button onClick={()=>navigate(`/inventory/${_id}`)} className="bg-yellow-600 px-4 py-2 w-2/3 font-bold block mx-auto my-4 text-white rounded-lg">
          UPDATE STOCK
        </button>
        </div>

      </div>
      </div>
  );
};

export default SingleItem;
