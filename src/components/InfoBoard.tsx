import React from 'react';
import c from "./InfoBoard.module.css"
import {DoorLock} from "./DoorLock";


export const InfoBoard = () => {
    return (
        <div className={c.wrapper}>how
            <div className={c.title}><h2>Deodorant Evaporator</h2></div>
            <div className={c.body}><div className={c.text}>
                This program tests the life of an evaporator containing a gas.

                We know the content of the evaporator (content in ml), the percentage of foam or gas lost every
                day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no
                longer useful. All numbers are strictly positive.
                This program tests the life of an evaporator containing a gas.

                We know the content of the evaporator (content in ml), the percentage of foam or gas lost every
                day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no
                longer useful. All numbers are strictly positive.
            </div>
                <div className={c.doorLock}>
                  <DoorLock/>
                </div>
            </div>

        </div>
    );
};


