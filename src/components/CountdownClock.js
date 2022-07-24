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
    const endDate = new Date('08/03/2022');
    // const endDate = new Date('08/03/2022 11:00:00');
    const timeOffset = 0;

    const getDateData = async() => {
        const currentDateData = new Date(new Date().getTime()+timeOffset);
        const dateDifference = (endDate.getTime()+timeOffset)-(currentDateData.getTime());
        const newDateData = new Date(dateDifference);
        const totalDays = Math.ceil(dateDifference / (1000 * 3600 * 24));

        // console.log(newDateData);
        const nextSecond = newDateData.getSeconds();
        setNextSecondData(nextSecond);
        const nextMinute = newDateData.getMinutes();
        setNextMinuteData(nextMinute);
        const nextHour = newDateData.getHours();
        setNextHourData(nextHour);
        setNextDayData(totalDays);

        await new Promise(resolve => setTimeout(resolve, 500));

        setSecondData(nextSecond);
        setMinuteData(nextMinute);
        setHourData(nextHour);
        setDayData(totalDays);
    }

    setInterval( ()=> {
        getDateData();
    }, 1000);

    const testHandler = async () => {
        const nextVal = dayData+1;
        setNextDayData(nextVal);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setDayData(nextVal);
    }

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
            <button onClick={testHandler}>Hit me</button>
        </div>
    );
}

export default CountdownClock;