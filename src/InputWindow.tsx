import {stateType} from "./Redux/redux";
import React, {ChangeEvent} from "react";

type InputWindowType = {
    userSet: stateType
    onChangeMax: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeStart: (e: ChangeEvent<HTMLInputElement>) => void
    // styleError:boolean
}

export function InputWindow(props: InputWindowType) {
    let MaxInputStyle = props.userSet.maxValue < 0 || props.userSet.maxValue <= props.userSet.value ?
        'error' : '';
    // let MaxInputStyle = props.styleError?
    //     'error' : '';
    let StartInputStyle = props.userSet.value < 0 || props.userSet.maxValue <= props.userSet.value ?
        'error' : '';
    return <div><span>max count:</span><
        input type={"number"}
              className=
                  {MaxInputStyle}
              value={props.userSet.maxValue}
              onChange={props.onChangeMax}
    />
        <div>
            <span>start value:</span>
            <input type="number"
                   className=
                       {StartInputStyle}
                   value={props.userSet.value}
                   onChange={props.onChangeStart}
            /></div>

    </div>
}