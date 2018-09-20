import React from 'react';
import {Line, Circle} from 'rc-progress';
import {Icon} from 'antd';

const Skills = () => {
  return (
      <div className="test">

      <h1 className='title'>Skills</h1>
      <div
        style={{
        margin: 10,
        width: 100,
        alignContent: 'center'
      }}>

        <img src = "https://www.materialui.co/materialIcons/action/android_black_54x54.png"/>

        <Circle percent="75" strokeWidth="4" strokeColor="rgba(0, 0, 0, 0.65)"></Circle>
      </div>
    </div>
  )

}

export default Skills;