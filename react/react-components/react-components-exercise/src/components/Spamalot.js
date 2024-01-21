import Spam from "./Spam";
import React, { Component } from 'react';


const Spamalot =()=>{
    const SPAM_COUNT = 500;

    const generateSpam = () => {
        const spams = [];
        for(let i = 0; i < SPAM_COUNT; ++i) {
            spams.push(<Spam />);
        }
        return spams;
    }

    return (
        <div id="ex-2">
            {generateSpam()}
        </div>
    );
}

export default Spamalot

