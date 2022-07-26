
import './Numbers.css';

const Numbers = (props) => {
    return (
        <div className="number-wrapper__individual_digit_main">
            <div className={props.currentNumber !== props.nextNumber ? 'numbers--group__wrapper updating' : 'numbers--group__wrapper'}>
                <div className="numbers--bottom">
                    <p>{props.currentNumber}</p>
                </div>
                <div className="numbers--top" aria-hidden="true">
                    <p>{props.nextNumber}</p>
                </div>
                <div className="numbers--top" aria-hidden="true">
                    <p>{props.nextNumber}</p>
                </div>
                <div className="numbers--top flipper" aria-hidden="true">
                    <p>{props.currentNumber}</p>
                </div>
                <div className="numbers--top flipper nextValue" aria-hidden="true">
                    <p>{props.nextNumber}</p>
                </div>
            </div>
        </div>
    );
}

export default Numbers;