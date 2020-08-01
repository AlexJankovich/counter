import React from "react";

import './Display.css'
import {stateType} from "./Redux/redux";



type DisplayType = {
    status: stateType
    mess:any
    styleError:boolean
    // errorMessage:string
}
export const Display = (props: DisplayType) => {
    let DisplayStyle = props.styleError?
        'Window maxButtons': 'Window';
    return <div
        className=
            {DisplayStyle}>
        {props.mess}
    </div>
}