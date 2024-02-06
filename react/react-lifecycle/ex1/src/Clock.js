import React, { useEffect, useState } from 'react'

const MAX_HOUR_RANGE = 24;
const MAX_MINUTE_RANGE = 60;
const MAX_SECOND_RANGE = 60;

export default function Clock() {
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);

    const incrementHour = () => {
        setHour((hour + 1) % MAX_HOUR_RANGE);
    }

    const incrementMinute = () => {
        if(minute === 59) {
            incrementHour();
        }
        setMinute((minute + 1) % MAX_MINUTE_RANGE);
    }

    const incrementSecond = () => {
        if(second === 59) {
            incrementMinute();
        }
        setSecond((second + 1) % MAX_SECOND_RANGE);
    }

    useEffect(() => {
        const timeNow = new Date();
        setHour(timeNow.getHours());
        setMinute(timeNow.getMinutes());
        setSecond(timeNow.getSeconds());
    }, [])

    useEffect(() => {
        setTimeout(() => {
            incrementSecond();
        }, 1000);
    }, [second]);

    const getDoubleDigit = (number) => {
        if(number < 10) {
            return "0" + number;
        }
        return "" + number;
    }

    return (
        <h1>{getDoubleDigit(hour)}:{getDoubleDigit(minute)}:{getDoubleDigit(second)}</h1>
    )
}
