import {stateType} from "./Redux/redux";
import React, {ChangeEvent} from "react";
import {MyInput} from "./common/MyInput";

type InputWindowType = {
    userSet: stateType
    onChangeMax: (value:number) => void
    onChangeStart: (value:number) => void
    styleError: boolean
}

export function InputWindow(props: InputWindowType) {
    let MaxInputStyle = props.userSet.maxValue < 0 || props.userSet.maxValue <= props.userSet.value
    let StartInputStyle = props.userSet.value < 0 || props.userSet.maxValue <= props.userSet.value
    return <div><span>max count:</span>
        <MyInput onChange={props.onChangeMax}
                 value={props.userSet.maxValue}
                 styleError={MaxInputStyle}/>
        {/*<input type={"number"}*/}
        {/*       className={MaxInputStyle}*/}
        {/*       value={props.userSet.maxValue}*/}
        {/*       onChange={props.onChangeMax}*/}
        {/*/>*/}
        <div>
            <span>start value:</span>
            <MyInput onChange={props.onChangeStart} value={props.userSet.value} styleError={StartInputStyle}/>
            {/*<input type="number"*/}
            {/*       className={StartInputStyle}*/}
            {/*       value={props.userSet.value}*/}
            {/*       onChange={props.onChangeStart}*/}
            {/*/>*/}
        </div>

    </div>
}