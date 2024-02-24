import React from 'react'

import { observer } from 'mobx-react'

export default observer(function Item({item, store}) {
  const editItem = () => {
    const newLocation = prompt("New Location: ");
    store.editItemLocation(item.name, newLocation);
  }
  const deleteItem = () => {
    store.deleteItem(item.name);
  }
  return (
    <div className={item.completed ? "crossed": null}>
      {/*   your code here
          each item should be in an input checkbox
          it should display the item name and location
          it should have both an edit button and a delete button
    */}
      <label> Location: {item.location} | </label>
      <label> Item: {item.name} </label>
      <input onClick={() => store.checkItem(item.name)} value={item.completed} type='checkbox'/>
      <button onClick={editItem}>Change Location</button>
      <button onClick={deleteItem}>Delete</button>
    </div>
  )
})
