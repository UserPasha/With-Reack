import React from 'react';
import c from "./InfoBoard.module.css"
import {DoorLock} from "./DoorLock";
import { answersNewType} from '../App';

type InfoBoardType = {
    title: string
    description: string
    answers: Array<string>
    difficult: string
    rating: string
}

export const InfoBoard = (props: InfoBoardType) => {

    return (
        <div className={c.wrapper}>
            <div className={c.tags}>
               <div>{props.difficult}</div>
               <div>{props.rating}</div>
            </div>
            <div className={c.title}><h2>{props.title}</h2></div>
            <div className={c.body}>
                <div className={c.text}>
                    {props.description}
                </div>
                <div className={c.doorLock}>
                    <DoorLock answers={props.answers}/>
                </div>
            </div>

        </div>
    );
};


