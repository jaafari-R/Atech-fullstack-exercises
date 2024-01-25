import React, { useState } from 'react'
import Item from './Item'

function Home({store, shouldDiscount}) {

    console.log(shouldDiscount)

    const discount = () => 
        store.map(item => {
            return {...item, price: item.price * (1 - item.discount)}
        })

    if(shouldDiscount) {
        store = discount(store);
    }

    return (
        <div>
            {
                store.map((item, i) => 
                    <Item key={i} name={item.item} price={item.price} />
                )
            }
        </div>
    )
}

export default Home