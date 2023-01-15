import React from 'react';

export default function ItemComponent(props) {
    const { order, items } = props;
    const lineItems = items.map(i => <li>"item: "{i.item}</li>, <li>"quantity: "{i.quantity}</li>, <li>"price: "{i.total/i.quantity}</li>)
   

    return (
        <>
            <h4>{order}</h4>          
            <ul>{lineItems}</ul>
        </>
    )
}
