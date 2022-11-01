const InputDisplay = (props) => {

    const tipValues = props.tipValues;

    const generateTipButtons = tipValues.map(
        (tipButton, index) => {
            return (
                <button
                    onClick={
                        (event) => {
                            event.preventDefault();
                            props.handleTip(index);
                        }
                    }
                    key={index}
                    className={tipValues[index].clicked ? 'tip-button-clicked' : 'tip-button'}
                    name="tip">{tipButton.input}
                </button>
            );
        }
    );

    return (
        <form className="input">
            <div className="bill">
                <label htmlFor="billTotal">Bill</label>
                <input
                    value={props.billState === 0 ? '' : props.billState}
                    type="text"
                    id="billTotal"
                    name="billTotal"
                    onChange={props.handleBillChange}
                />
            </div>
            <div className="tip">
                <label htmlFor="tip" className="tipTitle">Select tip</label>
                <div className="tip-buttons">
                    {generateTipButtons}
                    <input
                        type="number"
                        id="tipCustom"
                        name="tip"
                        onChange={props.handleCustomTip}
                    />
                </div>
            </div>
            <div className="people">
                <label htmlFor="peopleNum">Number of people</label>
                <input
                    value={props.peopleState  === 0 ? '' : props.peopleState}
                    type="text"
                    id="peopleTotal"
                    name="peopleTotal"
                    onChange={props.handlePeopleChange}/>
            </div>
        </form>
    );
}

export default InputDisplay;
