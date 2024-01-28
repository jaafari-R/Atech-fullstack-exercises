import React from 'react'

export default function Contact({contact, displayContact}) {
  return (
    <p onClick={() => displayContact(contact)} >{contact}</p>
  )
}
