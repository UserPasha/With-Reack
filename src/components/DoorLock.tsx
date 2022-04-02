import React, {useState} from 'react';
import c from './DoorLock.module.css'
import {Answers} from "./Answers";

type DoorLockType = {
    answers: Array<string>
}
export const DoorLock = (props: DoorLockType) => {
    const [lock, setLock] = useState<boolean>(true)
    const onClickHandler = () => {
        setLock(!lock)
    }
    return (lock ? (<div className={c.door}>
                    ANSWER
                    <button onClick={onClickHandler}> show the answer</button>
                </div>
            )
            :
            (<div className={c.door}>
                <button onClick={onClickHandler}> close the answer</button>
                ANSWER:
                <div className={c.answers}>
                    <Answers answers={props.answers}/>
                </div>
            </div>)

    );
};

