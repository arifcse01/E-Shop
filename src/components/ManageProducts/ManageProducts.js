import React, { useEffect, useState } from 'react';
import ManageAllProducts from '../ManageAllProducts/ManageAllProducts';
import Sidebar from '../Sidebar/Sidebar';

const ManageProducts = () => {
    const [product, setProduct] = useState([])
    useEffect(() =>{
        fetch('http://localhost:4000/products')
        .then(res => res.json())
        .then(data => setProduct(data));
    }, [])
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8 mt-3">
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Product Quantity</th>
                                <th>Product Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                product.map(pd => <ManageAllProducts pd = {pd}></ManageAllProducts>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>            
        </div>
    );
};

export default ManageProducts;