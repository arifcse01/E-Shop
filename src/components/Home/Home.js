import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Home = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://rocky-savannah-54019.herokuapp.com/products')
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