import React from 'react';
import './Contact.css';
import Icons from './Icons';

export default () => {
  return (
    <div className='contact-container'>
        <Icons type='linkedin' link = 'https://www.linkedin.com/in/asish-shaji-thomas/'/>
        <Icons type='github' link = 'https://github.com/mrkai1253'/>
        <Icons type='phone' link = 'tel:+917736516256' />
        <Icons type='twitter' link = 'https://twitter.com/AsishShajiThom1'/>
    </div>
  )
}

