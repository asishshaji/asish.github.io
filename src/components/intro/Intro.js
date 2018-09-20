import React from 'react'
import './intro.css';
import {Avatar} from 'antd';


const Intro = () => {
  return (

    <header>
      <div className='container'>

        <Avatar
          className='avatar'
          size={124}
          src='https://lh3.googleusercontent.com/-pxLi-1mpJis/WrcxcfaplSI/AAAAAAAAAAs/d1QrqrLq3ZoEyuMLnqGKJQRlzd1q9qJsACEwYBhgL/w140-h140-p/me.jpeg'/>
        
        <h1 className='intro-name'>Asish Shaji Thomas</h1>
       
        <p className='about-me'>Pythonista
          <p>ML,Blockchain enthusiast</p>
        </p>
          <p className="about">
            Voluptate cupidatat quis elit voluptate. Laboris aliquip laborum fugiat laborum est commodo aute incididunt nulla. Minim in cillum laborum culpa cupidatat veniam aute anim velit commodo commodo adipisicing tempor. Proident veniam eu cupidatat irure id eiusmod in mollit esse cillum amet laborum non ipsum.
          </p>
          <p className='expl'>That sure explains a lot!</p>
      </div>

    </header>

  )
}
export default Intro;
