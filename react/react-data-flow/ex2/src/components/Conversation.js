import React from 'react'
import Message from './Message'

export default function Conversation({conversation, back}) {
    return (
        <div>
            <button onClick={back}>Back</button>
            <h2>{conversation.with}</h2>
            {conversation.convo
                .map(conv => 
                    <Message 
                        sender={conv.sender === "self" ? "Me" : conversation.with}
                        message={conv} />
                    )}
        </div>
    )
}
