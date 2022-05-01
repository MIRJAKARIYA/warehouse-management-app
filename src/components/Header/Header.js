import React from 'react';
import './Header.css';
import 'flowbite';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header className='border-2 border-red-700 p-2'>
            <nav className='border-2 border-red-700 p-2 flex justify-between'>
                <div>
                    <h1 className='text-2xl'>BD ARMY INVENTORY</h1>
                </div>
                <div className='border-2 border-green-400'>
                    <Link to='/home'>Home</Link>
                    <Link to='/manageitems'>Manage Items</Link>
                    <Link to='/additem'>Add Item</Link>
                    <Link to='/myitems'>My Items</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;