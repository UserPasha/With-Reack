import React from 'react';
import c from './Answers.module.css'


type AnswersType = {
    answers: Array<string>
}

export const Answers = (props: AnswersType) => {
    const mappedAnswer = props.answers.map(m => (<div className={c.item}> <pre>{m}  </pre>
    </div>))

    return (

        <div className={c.x}>
            {mappedAnswer}
        </div>

    );
};

