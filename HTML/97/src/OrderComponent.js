import React from 'react';
import ItemComponent from './ItemComponent';

export default function OrderComponent(props) {
    const { customer, address, items } = props.order;
    
    return (
        <>
            <hr></hr>
            <h3>"Customer: " {customer}</h3>
            <h3>"Address: "{address}</h3>
            <hr></hr>

            <h3>"Items:"</h3>
            <ItemComponent order="order1" items={items} />
            {/* <h3>"Item: "</h3><ItemComponent name="items" items={items.quantity} />
            <h3>"Price: "</h3><ItemComponent name="itemsPrice" itemsPrice={items.price} /> */}

            <hr></hr>


        </>

    );
}

