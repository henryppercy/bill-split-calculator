const TotalDisplay = (props) => {
    return (
        <section className="display">
            <div>
                <div className="display-content">
                    <div>
                        <h3>Tip amount</h3>
                        <p>/person</p>
                    </div>
                    <div>
                        <h2>£{props.tipTotalState.toFixed(2)}</h2>
                    </div>
                </div>
                <div className="display-content">
                    <div>
                        <h3>Total</h3>
                        <p>/person</p>
                    </div>
                    <div>
                        <h2>£{props.totalState.toFixed(2)}</h2>
                    </div>
                </div>
            </div>
            <button className="reset" onClick={props.handleReset}>Reset</button>
        </section>
    );
}

export default TotalDisplay;
