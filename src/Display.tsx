import React from "react";

import './Display.css'

type DisplayType = {
    count: number
    maxValue: number
}
export const Display = (props: DisplayType) => {
    return <div
        className=
            {props.count === props.maxValue ? 'maxButtons' : 'Window'}>{props.count}</div>
}