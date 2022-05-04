import React from 'react';
import { useParams } from 'react-router-dom';

const ItemInventory = () => {
    const {itemId} = useParams();
    console.log(itemId)
    return (
        <div>
            <h1>This is item inventory {itemId}</h1>
        </div>
    );
};

export default ItemInventory;