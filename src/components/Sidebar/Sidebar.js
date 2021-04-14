import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="mt-5 h-100 bg-pink">
            <Link to="/addProduct"><h4 className="bg-green">Add Product</h4></Link>
            <Link to="/manageProducts"><h4>Manage Product</h4></Link>
        </div>
    );
};

export default Sidebar;