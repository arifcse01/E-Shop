import React from 'react';
import { Link } from 'react-router-dom';

const item = (props) => {
    const {name , img, price, _id} = props.item;

    const image ={
        height: "200px"            
    }

    return (        
        <div className="col-md-4 mt-3">
            <div className="shadow rounded m-3 p-3 text-center">
                <img style={image} className="img-fluid" src={img} alt=""/>
                <h3 className="mt-2 pb-3">{name}</h3>
                <div className="d-flex justify-content-between">
                    <p>${price}</p>
                    <Link to={`checkOut/${_id}`}><button className="btn btn-success">Buy Now</button></Link>
                </div>
            </div>            
        </div>
    );
};

export default item;