import React from 'react'
import "./Message.css";

export default function Message({message, sender}) {
  return (
    <div>
        <p className="message"><span>{sender}</span>: {message.text}</p>
    </div>
  )
}
