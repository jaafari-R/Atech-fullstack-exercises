import { useState, useEffect } from "react";
import './App.css';

import Contacts from "./components/Contacts";
import Conversation from "./components/Conversation";

const initData = {
    displayConversation: null,
    conversations: [
        {
            with: "Laura", convo: [
                { text: "Hi", sender: "self" },
                { text: "You there?", sender: "self" },
                { text: "Yeah, hi, what's up?", sender: "other" }
            ]
        },
        {
            with: "Dad", convo: [
                { text: "Have you finished your school work yet?", sender: "other" },
                { text: "Yes.", sender: "self" },
                { text: "What do you mean, yes?", sender: "other" },
                { text: "??", sender: "self" }
            ]
        },
        {
            with: "Shoobert", convo: [
                { text: "Shoobert!!!", sender: "self" },
                { text: "Dude!!!!!!!!", sender: "other" },
                { text: "Shooooooooo BERT!", sender: "self" },
                { text: "You're my best friend", sender: "other" },
                { text: "No, *you're* my best friend", sender: "self" },
            ]
        }
    ]
}

function App() {
    const [displayConversation, setDisplayConversation] = useState(initData.displayConversation);
    const [contacts, setContacts] = useState([]);
    const [conversations, setConversations] = useState(initData.conversations);

    const updateContacts = () => {
        const newContacts = initData.conversations
            .map(conv => conv.with);
        setContacts(newContacts);
    }

    useEffect(() => {
        updateContacts();
    }, [conversations]);

    const displayContact = (contact) => {
        setDisplayConversation(contact);
    }

    const getConversation = (contact) => {
        return conversations.find(conv => conv.with === contact);
    }

    return (
        <div className="App">
            {
                displayConversation === null ?
                    <Contacts
                        contacts={contacts} 
                        displayContact={displayContact}/>
                :
                    <Conversation 
                        conversation={getConversation(displayConversation)} 
                        back={() => displayContact(null)}/>
            }
        </div>
    );
}

export default App;
