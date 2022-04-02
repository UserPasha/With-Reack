import React, {useState} from 'react';
import c from './DoorLock.module.css'
import {Answers} from "./Answers";

export const DoorLock = () => {
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
                    <Answers/>
                </div>
            </div>)

    );
};

