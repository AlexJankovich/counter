import React from "react";
import './Button.css'

type ButtonsType = {
    count: number
    maxCount:number
    Upp: () => void
    Reset: () => void
}
export const Buttons = (props: ButtonsType) => {
    return <div className='buttons'>
        <button type='button'
                disabled={props.count >= props.maxCount ? true : false}
                onClick={props.Upp}>inc
        </button>
        <button type='button'
                onClick={props.Reset}>reset
        </button>
    </div>
}