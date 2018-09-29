import React from 'react';
import { Icon } from 'antd';

export default (props) => {
  return (
    <a href={props.link} target='blank'>
        <Icon type={props.type} theme="outlined" style={{
        fontSize: 24,
        color: 'rgb(5, 5, 5)',
        marginLeft: '10px',
        marginRight:'10px'
      }} />
      </a>
  )
}
