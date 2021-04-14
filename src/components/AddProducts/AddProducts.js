import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import Sidebar from '../Sidebar/Sidebar';

const AddProducts = () => {
    const [product, setProduct] = useState({});

    const history = useHistory();
    const location = useLocation();    


    const handleOnBlur = (e) =>{
        const newProduct = product;
        newProduct[e.target.name] = [e.target.value];
        setProduct(newProduct);
    }

    const handleAddProduct = (e) =>{
        e.preventDefault();
        fetch('http://localhost:4000/addProduct', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            alert("Product Added Successfully")
            history.replace('/');
        })
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div>
                            <Sidebar></Sidebar>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <h2>Add Products</h2>
                        <form onSubmit={handleAddProduct}>
                            <div>
                                <label htmlFor="name">Product Name</label>
                                <input onBlur={handleOnBlur} className="form-control" name="name" type="text" placeholder='Product Name' id="name" />
                            </div>
                            <div>
                                <label htmlFor="price">Product Price</label>
                                <input onBlur={handleOnBlur} className="form-control" name="price" type="text" placeholder='Product Name' id="price" />
                            </div>
                            <div>
                                <label htmlFor="quantity">Product Quantity</label>
                                <input onBlur={handleOnBlur} className="form-control" name="quantity" type="number" placeholder='Quantity' id="quantity" />
                            </div>
                            <div>
                                <label htmlFor="img">Product Image</label>
                                <input onBlur={handleOnBlur} className="form-control" name="img" placeholder="Image" type="text"  id="img" />
                            </div>
                            <br/>
                            <div>
                                <input className="btn btn-info" type="submit" value="Add Product"/>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AddProducts;