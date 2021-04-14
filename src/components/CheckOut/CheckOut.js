import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CheckOut = () => {
    const {id} = useParams();
    const[product, setProduct] = useState({});
    useEffect(()=>{
        fetch(`http://localhost:4000/product/${id}`)
        .then(res => res.json())
        .then(data => {
            setProduct(data)
        })
    }, [id])
    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col-md-8 offset-md-2">
                <h2>Check Out</h2>
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            <tr>
                                <td>{product.name}</td>
                                <td>{product.quantity}</td>
                                <td>${product.price}</td>
                            </tr>
                        }
                    </tbody>                    
                </table>
                <br/>
                <br/>
                <button className="btn btn-success ms-0">Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;