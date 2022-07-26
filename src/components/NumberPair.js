
import Numbers from "./Numbers";
import './NumberPair.css';

const NumberPair = (props) => {

    const processNumber = (n) => {
        const numberString = n.toString();
        return numberString.length>1 ? numberString.split("") : ["0",numberString];
    }

    const currentDigits = processNumber(props.currentNumber);
    const nextDigits = processNumber(props.nextNumber);

    // console.log(`${props.nextNumber} ${props.groupName}`);

    return(
        <div className="numberPair--container">
            <div className="numberPair--wrapper__main">
                <Numbers currentNumber={currentDigits[0]} nextNumber={nextDigits[0]}></Numbers>
                <div className="digit--spacer"></div>
                <Numbers currentNumber={currentDigits[1]} nextNumber={nextDigits[1]}></Numbers>
            </div>
            <div>
                <h2 className="pairName">{props.groupName}</h2>
            </div>
        </div>
    );
}

export default NumberPair;