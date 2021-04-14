import React from 'react';
import { useHistory } from 'react-router';

const ManageAllProducts = (props) => {
    const {_id, name, price, quantity} = props.pd;

    const history = useHistory();

    const deleteProduct = () =>{
        fetch(`http://localhost:4000/deleteProduct/${_id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            alert("Product Deleted Successfully");
            history.replace('/');            
        })
    }
    return (
        <tr>
            <td>{name}</td>            
            <td>{quantity}</td>
            <td>${price}</td>
            <button onClick={deleteProduct} className="btn btn-danger">Delete</button>
        </tr>
    );
};

export default ManageAllProducts;