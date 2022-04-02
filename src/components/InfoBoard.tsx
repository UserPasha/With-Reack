import React from 'react';
import c from "./InfoBoard.module.css"
import {DoorLock} from "./DoorLock";

type InfoBoardType ={
    title: string
    description: string
    answers: Array<string>
}

export const InfoBoard = (props: InfoBoardType) => {

    return (
        <div className={c.wrapper}>how
            <div className={c.title}><h2>{props.title}</h2></div>
            <div className={c.body}><div className={c.text}>
                {props.description}
            </div>
                <div className={c.doorLock}>
                  <DoorLock answers={props.answers}/>
                </div>
            </div>

        </div>
    );
};


