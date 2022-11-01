import TotalDisplay from "./TotalDisplay";
import InputDisplay from "./InputDisplay";
import {useEffect, useState} from "react";
import "./calculator.css"

// Array used to populate the tip buttons --> need to change to be reflective of new state
const tipValues =
        [
            {
                input: '5%',
                value: 1.05,
                clicked: false,
            },
            {
                input: '10%',
                value: 1.10,
                clicked: false,
            },
            {
                input: '15%',
                value: 1.15,
                clicked: false,
            },
            {
                input: '25%',
                value: 1.25,
                clicked: false,
            },
            {
                input: '50%',
                value: 1.50,
                clicked: false,
            },
        ]

const Calculator = () => {
    // Define all state needed to be used in the run time of the app
    const [totalState, setTotalState] = useState(0);
    const [billState, setBillState] = useState(0);
    const [peopleState, setPeopleState] = useState(0);
    const [tipTotalState, setTipTotalState] = useState(0);
    const [tipMultiplierState, setTipMultiplierState] = useState(1);

    const handleBillChange = (event) => {
        setBillState(event.target.value);
        console.log(billState);
    }

    const handlePeopleChange = (event) => {
        setPeopleState(event.target.value);
    }

    const handleCustomTip = (event) => {
        setTipMultiplierState((event.target.value) / 100 + 1);
    }

    const handleTip = (index) => {
        if (tipMultiplierState == tipValues[index].value) {
            setTipMultiplierState(1);
        } else {
            setTipMultiplierState(tipValues[index].value);
        }
    }

    // Resets all state in the app
    const handleReset = (event) => {
        event.preventDefault();

        setTotalState(0);
        setTipTotalState(0);
        setBillState(0);
        setPeopleState(0);
        setTipMultiplierState(1);
    }

    useEffect(() => {
        setTipTotalState(totalState * tipMultiplierState);
    }, []);

    // When the state of either user input is changed the total state is reset and re-rendered
    useEffect(() => {
        if (billState && peopleState > 0) {
            setTotalState((billState / peopleState) * tipMultiplierState);
            if (tipMultiplierState > 1) {
                setTipTotalState((tipMultiplierState - 1) * billState / peopleState);
            } else {
                setTipTotalState(0);
            }
        } else {
            setTotalState(0);
        }
    }, [billState, peopleState, tipMultiplierState]);

    return (
        // Returns the two components of the calculator
        // Passes through all props needed for components
        <section className="calculator">
            <InputDisplay
                billState={billState}
                peopleState={peopleState}
                handleBillChange={handleBillChange}
                handlePeopleChange={handlePeopleChange}
                handleTip={handleTip}
                tipValues={tipValues}
                handleCustomTip={handleCustomTip}
                tipMultiplierState={tipMultiplierState}
            />
            <TotalDisplay
                totalState={totalState}
                tipTotalState={tipTotalState}
                handleReset={handleReset}
            />
        </section>
    );
}

export default Calculator;
