import React from 'react';
import PreloaderGif from '../../Files/Images/preloader.gif'
import './Preloader.css';

export default function Preloader ()  {
    return (
      <div className="bodyP" >
              <div className="preloaderImg" >
              <img  src={PreloaderGif} alt=""/>              
              </div>
      </div>
    )
}