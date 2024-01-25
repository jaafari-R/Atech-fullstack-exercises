import React from 'react'

function Item({name, price}) {
    return (
        <div>
            {<p>{name}: ${price}</p>}
        </div>
    )
}

export default Item