import React from 'react';
import c from './Answers.module.css'
import {Answer} from "./Answer";

export const Answers = () => {
    return (
        <div className={c.item}>
            <Answer/>
            <Answer/>
            <Answer/>
        </div>
    );
};

