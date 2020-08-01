import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Display} from "./Display";
import {Button} from "./Buttons";
import {stateType} from "./Redux/redux";
import {InputWindow} from "./InputWindow";


type AppStoreType = {
    store: stateType
}

const App: React.FC<AppStoreType> = (props) => {


    // localStorage.setItem('value', JSON.stringify(userSet))
    // let x:any = localStorage.getItem('value')
    // let getS:any = JSON.parse(x)
    // userSet=getS

    let x:any = localStorage.getItem('value')
    let getS:any = JSON.parse(x)

    let [userSet, setUserSet] = useState<stateType>(getS||props.store)
    let inputValueMax = (e: ChangeEvent<HTMLInputElement>) => {
        userSet.maxValue = +e.currentTarget.value
        setUserSet({...userSet})
        // console.log('want change')
    }
    let inputValueStart = (e: ChangeEvent<HTMLInputElement>) => {
        userSet.value = +e.currentTarget.value
        setUserSet({...userSet})
    }
    let setBtn = () => {
        props.store.maxValue = userSet.maxValue
        props.store.value = userSet.value
        localStorage.setItem('value', JSON.stringify(userSet))
        setUserSet({...userSet})
        status = userSet
        setStatus({...status})
        // console.log(status)
        console.log(userSet)
    }


    let newStatus1 = props.store

    let [status, setStatus] = useState<stateType>(newStatus1);

    let Upp = () => {
        status.value = +status.value + 1
        setStatus({...status})
        console.log(status.value)
    };
    let Reset = () => {
        status.value = props.store.value
        console.log("isReset")
        setStatus({...status})
    };

    let message: string|number
    let userSetDisabled:boolean
    let countDisabled:boolean
    let styleError:boolean
    if (userSet.value < 0 || userSet.maxValue < 0 || userSet.maxValue <= userSet.value) {
        message = 'incorrect value!'
        styleError = true
        userSetDisabled = true
        countDisabled=true
    } else if (userSet.value !== props.store.value) {
        message = 'input value and press set'
        styleError=false
        userSetDisabled = false
        countDisabled=true
    } else if (userSet.maxValue !== props.store.maxValue) {
        message = 'input value and press set'
        styleError = false
        userSetDisabled = false
        countDisabled=true
    } else if (status.value===status.maxValue){
        countDisabled=true
        userSetDisabled = false
        message = status.value
        styleError=true
    }
    else {
        message = status.value
        styleError=false
        countDisabled=false
        userSetDisabled = false
    }

    return (
        <div className='wrapper'>
            <div className='App'>
                <div className='inputWindow'>
                    <InputWindow userSet={userSet}
                                 onChangeMax={inputValueMax}
                                 onChangeStart={inputValueStart}
                                 // styleError={styleError}
                    />
                </div>
                <div className='buttons'>
                    <Button status={status}
                            callBack={setBtn}
                            isDisabled={userSetDisabled}
                            btnTitle={'set'}
                    />
                </div>
            </div>
            <div className='App'>
                <Display status={status}
                         mess={message}
                         styleError={styleError}/>
                <div className='buttons'>
                    <Button status={status}
                            callBack={Upp}
                            isDisabled={countDisabled}
                            btnTitle={"inc"}/>
                    <Button status={status}
                            callBack={Reset}
                            isDisabled={status.isDisabled}
                            btnTitle={"reset"}/>
                </div>
            </div>
        </div>
    );
}


export default App;

