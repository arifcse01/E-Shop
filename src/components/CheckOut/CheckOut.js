import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';

const CheckOut = () => {
    const [loggedInUser, setLoggedInUser] =useContext(UserContext)
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`https://rocky-savannah-54019.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [id])

    const history = useHistory();

    const handleCheckout = () => {
        const order = {...loggedInUser, ...product, orderTime: new Date()};  
        fetch('https://rocky-savannah-54019.herokuapp.com/addOrder',{
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(order)
        })   
        .then(res => res.json())
        .then(data =>{
            if(data){
                alert("Order Successfully Completed");
                history.replace('/');
            }
        })
    }
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
                    <br />
                    <br />
                    <button onClick={handleCheckout} className="btn btn-success">Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;