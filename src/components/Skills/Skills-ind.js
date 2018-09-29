import React from 'react';
import {Circle} from 'rc-progress';
import './Skillsind.css';


const indiv = (props) => {
    return (

        <div
            style={{
                margin: 10,
                width: 100,
                alignContent: 'center'
            }}
        >

            <p className='frame-name'>{props.frame_name}</p>
            <Circle percent={props.perc} strokeWidth="4" strokeColor="rgba(0, 0, 0, 0.65)"
                    style={{margin: '10px'}}></Circle>
        </div>
    );
};
export default indiv;