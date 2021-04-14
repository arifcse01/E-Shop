import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Home = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/products')
        .then(res => res.json())
        .then(data => setItems(data))
    }, [])

    return (
        <div className="container">            
            <div className="row">                
                {
                    items.map(item => <Item item = {item} key = {item._id}></Item>)
                }
            </div>            
        </div>
    );
};

export default Home;