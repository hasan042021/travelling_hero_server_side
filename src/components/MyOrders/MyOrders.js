import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Header from '../Home/Header/Header';

const MyOrders = () => {
    const { user } = useAuth()
    const { email } = user
    const [orders, setOrders] = useState([]);
    console.log(orders)
    useEffect(() => {
        const url = `http://localhost:5000/orders/${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <Header></Header>
            <div className="mt-5">
                <h2>orders</h2>
            </div>
        </div>
    );
};

export default MyOrders;