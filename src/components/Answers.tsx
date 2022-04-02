import React from 'react';
import c from './Answers.module.css'


type AnswersType = {
    answers: Array<string>
}

export const Answers = (props: AnswersType) => {
    const mappedAnswer = props.answers.map(m=>(<div className={c.item}>{m}</div>))
    return (
        <div>
            {mappedAnswer}
        </div>
    );
};

