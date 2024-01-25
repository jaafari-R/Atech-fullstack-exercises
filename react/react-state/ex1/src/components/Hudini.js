import React, { useState } from 'react'

function Hudini() {
  const [show, setShow] = useState(true);
  const magic = () => {
    setShow(!show);
  }

  return (
    <div>
      <button onClick={magic}>
        {show ? "Appear" : "Disappear"}
      </button>
      <h1>
        {show ? "Now you see me!" : "Now you don't!"}
      </h1>
    </div>
  )
}

export default Hudini