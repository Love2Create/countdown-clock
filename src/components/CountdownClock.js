import NumberPair from "./NumberPair";
import './CountdownClock.css';
import { useState } from "react";

const CountdownClock = () => {

    
    const [dayData, setDayData] = useState(0);
    const [hourData, setHourData] = useState(0);
    const [minuteData, setMinuteData] = useState(0);
    const [secondData, setSecondData] = useState(0);
    const [nextDayData, setNextDayData] = useState(0);
    const [nextHourData, setNextHourData] = useState(0);
    const [nextMinuteData, setNextMinuteData] = useState(0);
    const [nextSecondData, setNextSecondData] = useState(0);

    const groupNames = ['days', 'hours', 'minutes', 'seconds'];

    const endDatString = new Date('08-03-2022 08:03:00').toUTCString();
    const endDate = new Date(endDatString).getTime();


    const getDateStats = (end) => {

        const date = new Date();
        const startDateString = date.toUTCString();

        const currentDateData = new Date(startDateString).getTime();
        // get total seconds between the times
        let delta = (end - currentDateData) / 1000;

        // calculate (and subtract) whole days
        const days = Math.round(Math.floor(delta / 86400));
        delta -= days * 86400;

        // calculate (and subtract) whole hours
        const hours = Math.round(Math.floor(delta / 3600) % 24);
        delta -= hours * 3600;

        // calculate (and subtract) whole minutes
        const minutes = Math.round(Math.floor(delta / 60) % 60);
        delta -= minutes * 60;

        const seconds = Math.round(delta % 60);
        return {
            days,
            hours: hours === 24 ? 0 : hours,
            minutes: minutes === 60 ? 0 : minutes,
            seconds: seconds === 60 ? 0 : seconds
        };
    }

    // update useState
    const getDateData = async() => {
        const dateStats = getDateStats(endDate);
        const valueModifier = dateStats.days < 0 ? 0 : 1;

        console.log(dateStats);



        setNextSecondData(dateStats.seconds * valueModifier);
        setNextMinuteData(dateStats.minutes * valueModifier);
        setNextHourData(dateStats.hours * valueModifier);
        setNextDayData(dateStats.days * valueModifier);

        await new Promise(resolve => setTimeout(resolve, 490));
        setSecondData(dateStats.seconds * valueModifier);
        setMinuteData(dateStats.minutes * valueModifier);
        setHourData(dateStats.hours * valueModifier);
        setDayData(dateStats.days * valueModifier);


    }

    setInterval( ()=> {
        getDateData();
    }, 1000);

    return(
        <div>
            <div className="clock--wrapper__main">
                <NumberPair currentNumber={dayData} nextNumber={nextDayData} groupName={groupNames[0]}></NumberPair>
                <div className="day--spacer"></div>
                <NumberPair currentNumber={hourData} nextNumber={nextHourData} groupName={groupNames[1]}></NumberPair>
                <div className="time--spacer">
                    <p>:</p>
                </div>
                <NumberPair currentNumber={minuteData} nextNumber={nextMinuteData} groupName={groupNames[2]}></NumberPair>
                <div className="time--spacer">
                    <p>:</p>
                </div>
                <NumberPair currentNumber={secondData} nextNumber={nextSecondData} groupName={groupNames[3]}></NumberPair>
            </div>
        </div>
    );
}

export default CountdownClock;