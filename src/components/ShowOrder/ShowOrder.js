import React from 'react';

const ShowOrder = (props) => {
    const { email, name, price, quantity, orderTime } = props.order;
    return (
        <tr>
            <td>{email}</td>
            <td>{name}</td>            
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{(new Date(orderTime).toDateString('dd/MM/yyy'))}</td>
        </tr>
    );
};

export default ShowOrder;