import React from 'react';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { MdSystemUpdateAlt } from 'react-icons/md';

const ManageSingleItem = ({vehicle,handleDelete}) => {
    const {name, image, price, quantity, sold, supplierName, category, _id} = vehicle;
    return (
        <tr className='hover'>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image} alt="" />
              </div>
            </div>
          </div>
        </td>
        <td className='text-sm'>{name}</td>
        <td className='text-sm'>{category}</td>
        <td className='text-sm'>{price}</td>
        <td className='text-sm'>{quantity}</td>
        <td className='text-sm'>{sold}</td>
        <td className='text-sm'>{supplierName}</td>
        <td>
            <div className='flex items-center justify-around ml-[-40px]'>
                <button title='UPDATE STOCK' className='text-4xl text-blue-700'>
                    <MdSystemUpdateAlt />
                </button>
                <button onClick={()=>handleDelete(_id)} title='REMOVE FROM INVENTORY' className='text-4xl text-red-700'>
                    <RiDeleteBin2Fill />
                </button>
            </div>
        </td>
      </tr>
    );
};

export default ManageSingleItem;