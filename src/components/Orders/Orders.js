import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import ShowOrder from '../ShowOrder/ShowOrder';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(() => {
        fetch('https://rocky-savannah-54019.herokuapp.com/showOrders?email='+loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-10 offset-1 col-12 mt-5">
                    <h3>Total Orders</h3>
                    <table className='table text-center'>
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Product Price</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order => <ShowOrder order={order}></ShowOrder>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Orders;