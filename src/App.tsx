import React, {useState} from 'react';
import './App.css';
import {Display} from "./Display";
import {Buttons} from "./Buttons";

export type stateType = {
    value: number
    maxValue: number
}

function App() {
    // let [status, setStatus] = useState<stateType>({
    //         value: 0,
    //         maxValue: 5,
    //     }
    // )
    let [count, setCount] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(5)
    debugger
    let Upp = () => {
        setCount(count+1)
        console.log(count)
    }
    let Reset = ()=> {
        console.log("isReset")
        setCount(count=0)
    }

    return (
        <div className='App'>
            <Display count={count} maxValue={maxValue}/>
            <Buttons maxCount={maxValue} count={count} Upp={Upp} Reset={Reset}/>
        </div>
    );
}

export default App;



// let Upp = () => {
//     status.value=status.value+1
//     setStatus({...status})
//     console.log(status.value)
// }
// let Reset = ()=> {
//     status.value=status.value+1
//     console.log("isReset")
//     setStatus({...status})
// }