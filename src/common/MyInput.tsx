import React, {ChangeEvent} from "react";
import s from './MyInput.module.css'

type MyInputType = {
    onChange: (value: number) => void
    value: number
    styleError: boolean
}

export const MyInput = (props: MyInputType) => {
    let style = props.styleError ? s.red : ''
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(+e.currentTarget.value)
    }
    return <div className={s.wrapper}>
        <input
            type='number'
            onChange={onChangeHandler}
            value={props.value}
            className={style}
        />
    </div>
}