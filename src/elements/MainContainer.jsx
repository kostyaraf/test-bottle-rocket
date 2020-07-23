import React, { useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux';
// import styles from './Counter.module.css';

export default (props) => {
  return (
    <div className='main-container'>
      {props.children}
    </div>
  )
}
