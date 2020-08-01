import React from "react";
import './Button.css'
import {stateType} from "./Redux/redux";


type ButtonsType = {
   status: stateType
    callBack:()=>void
    isDisabled:boolean
    btnTitle:string
}

export const Button = (props: ButtonsType) => {
    return <div className='button'>
        <button type='button'
                disabled={props.isDisabled}
                onClick={props.callBack}>{props.btnTitle}
        </button>
    </div>
}