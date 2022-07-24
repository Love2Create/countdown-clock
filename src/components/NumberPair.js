
import Numbers from "./Numbers";
import './NumberPair.css';

const NumberPair = (props) => {

    const processNumber = (n) => {
        const numberString = n.toString();
        return numberString.length>1 ? numberString.split("") : ["0",numberString];
    }

    const currentDigits = processNumber(props.currentNumber);
    const nextDigits = processNumber(props.nextNumber);

    return(
        <div className="numberPair--wrapper__main">
            <Numbers currentNumber={currentDigits[0]} nextNumber={nextDigits[0]}></Numbers>
            <div className="digit--spacer"></div>
            <Numbers currentNumber={currentDigits[1]} nextNumber={nextDigits[1]}></Numbers>
        </div>
    );
}

export default NumberPair;