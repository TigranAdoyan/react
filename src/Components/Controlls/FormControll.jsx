import React from 'react';
import style from './FormControll.module.css';



export const TextArea = ({input, meta, ...props}) => {
     const hasError = meta.error && meta.touched;
     return (
          <div className={style.formControll + " " +  style.error}>
              <textarea {...input} {...props} /><br/>
              {hasError && <span>{meta.error}</span> }
          </div>
     )
};

export const Input = ({input, meta, ...props}) => {
     const hasError = meta.error && meta.touched;
     return (
          <div className={style.formControll + " " +  style.error}>
              <input {...input} {...props} /><br/>
              {hasError && <span>{meta.error}</span> }
          </div>
     )
};