import React from 'react';
import { v1 } from 'uuid';
import './App.css';
import {InfoBoard} from "./components/InfoBoard";

function App() {
    type decidedTasksType = {
        id: string
        title: string
        answers: Array<string>
    }
    type decidedTasksArratType=Array<decidedTasksType>

    const decidedTasks =[
        {
            id: v1(),
            title: 'Deodorant Evaporator',
            description: 'This program tests the life of an evaporator containing a gas.\n' +
                '\n' +
                'We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.\n' +
                '\n' +
                'The program reports the nth day (as an integer) on which the evaporator will be out of use.\n' +
                '\n' +
                'Example:\n' +
                'evaporator(10, 10, 5) -> 29',
            answers:['function evaporator(content, evap_per_day, threshold){ let i= 0;let x=threshold*content/100 while( x<content){' +
            'content=content-content*evap_per_day/100; i++}return i}'
                ,'function evaporator(content, evap_per_day, threshold){threshold = threshold / 100;evap_per_day = evap_per_day / 100;' +
                'return Math.ceil(Math.log(threshold) / Math.log(1-evap_per_day))}'
                ,'with (Math) evaporator = (唐,ev,t) => ceil( log(t/100) / log(1-ev/100) )'
            ],
            difficult: ' 8 kyu      ',
            rating: '    3 star'

        },
        {
            id: v1(),
            title: 'Test',
            description: 'test test tes tes test This program tests the life of an evaporator containing a gas.\n' +
                '\n' +
                'We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.\n' +

                'Example:\n' +
                'evaporator(10, 10, 5) -> 29',
            answers:[ `evap_per_dafunction evaporator(content, evap_per_day,  evap_per_dathreshold){\n`+
             `let i= 0;
             let x=threshold*content/100 while( x<content){
             content=content-content*evap_per_day/100; i++}return i}`
                ,`function evapora evap_per_dator(content, evap_per_day, threshold){
                threshold = threshold / 100;
                evap_per_day = evap_per_day / 100;
                return Math  evap_per_daevap_per_da.ceil
                (Math.log(threshold) / Math.log(1-evap_per_day))}`
                ,`with (Math)  evap_per_daevaporator = (唐,ev,t) => ceil( log(t/ evap_per_da100) / log(1-ev/100) )`
            ],
            difficult: ' 7 kyu      ',
            rating: '    4 star'

        }]
    const mappedWrappers = decidedTasks.map(m=>  <InfoBoard title={m.title}
                                                             description={m.description}
                                                             answers={m.answers}
                                                             key={m.id}
                                                            difficult={m.difficult}
                                                            rating={m.rating}
     />)


    return (
    <div className="wrapper">
    {/*Hello! Im a your helper! can i help?*/}
    {/*  <InfoBoard title={decidedTasks.title}*/}
    {/*             description={decidedTasks.description}*/}
    {/*             answers={decidedTasks.answers}*/}
    {/*  />*/}
        {mappedWrappers}
    </div>
  );
}

export default App;
