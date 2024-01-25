import React from 'react'

function Landing({user, hottestItem}) {
  return (
    <div>
        <h4>Welcome, {user},</h4>
        <p>The hottest item is {hottestItem}</p>
    </div>
  )
}

export default Landing