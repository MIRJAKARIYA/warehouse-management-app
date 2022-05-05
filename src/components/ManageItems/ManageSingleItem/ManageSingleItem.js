import React from 'react';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { MdSystemUpdateAlt } from 'react-icons/md';

const ManageSingleItem = ({vehicle}) => {
    const {name, image, price, quantity, sold, supplierName, category, _id} = vehicle;
    return (
        <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image} alt="" />
              </div>
            </div>
          </div>
        </td>
        <td>{name}</td>
        <td>{category}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>{sold}</td>
        <td>{supplierName}</td>
        <td>
            <div className='flex items-center justify-around ml-[-40px]'>
                <button title='UPDATE STOCK' className='text-4xl text-blue-700'>
                    <MdSystemUpdateAlt />
                </button>
                <button title='REMOVE FROM INVENTORY' className='text-4xl text-red-700'>
                    <RiDeleteBin2Fill />
                </button>
            </div>
        </td>
      </tr>
    );
};

export default ManageSingleItem;