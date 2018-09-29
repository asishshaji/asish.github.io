import React from 'react';

import './Skills.css';
import SkillsInd from './Skills-ind';

const Skills = () => {
    return (
        <div className='skills'>
            <h1 className='title'>Skills</h1>
            <div className="grid">
                <SkillsInd perc='60' frame_name='React'/>
                <SkillsInd perc='80' frame_name='Android'/>
                <SkillsInd perc='90' frame_name='Python'/>
                <SkillsInd perc='80' frame_name='Django'/>
                <SkillsInd perc='50' frame_name='Nodejs'/>
                <SkillsInd perc='40' frame_name='Solidity'/>
            </div>
        </div>
    )

}

export default Skills;