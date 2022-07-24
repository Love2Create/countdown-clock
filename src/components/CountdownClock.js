import NumberPair from "./NumberPair";
import './CountdownClock.css';
import { useState } from "react";

const CountdownClock = () => {

    const [dayData, setDayData] = useState(0);
    const [hourData, setHourData] = useState(0);
    const [minuteData, setMinuteData] = useState(0);
    const [secondData, setSecondyData] = useState(0);
    const [nextDayData, setNextDayData] = useState(0);
    const [nextHourData, setNextHourData] = useState(0);
    const [nextMinuteData, setNextMinuteData] = useState(0);
    const [nextSecondData, setNextSecondyData] = useState(0);

    const testHandler = async () => {
        const nextVal = dayData+1;
        setNextDayData(nextVal);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setDayData(nextVal);
    }

    return(
        <div>
            <div className="clock--wrapper__main">
                <NumberPair currentNumber={dayData} nextNumber={nextDayData}></NumberPair>
                <div className="day--spacer"></div>
                <NumberPair currentNumber={hourData} nextNumber={nextHourData}></NumberPair>
                <div className="time--spacer">
                    <p>:</p>
                </div>
                <NumberPair currentNumber={minuteData} nextNumber={nextMinuteData}></NumberPair>
                <div className="time--spacer">
                    <p>:</p>
                </div>
                <NumberPair currentNumber={secondData} nextNumber={nextSecondData}></NumberPair>
            </div>
            <button onClick={testHandler}>Hit me</button>
        </div>
    );
}

export default CountdownClock;