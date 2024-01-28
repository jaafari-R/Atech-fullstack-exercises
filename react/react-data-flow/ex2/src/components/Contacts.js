import React from 'react'
import Contact from './Contact'

export default function Contacts({contacts, displayContact}) {
    return (
        <div className='contacts'>
            <h2>Contacts</h2>
            {contacts.map(contact => 
                <Contact displayContact={displayContact} contact={contact}/>
            )}
        </div>
    )
}
