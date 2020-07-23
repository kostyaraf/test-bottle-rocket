import React, { useState } from 'react'
import styles from './MainContainer.module.css'
// import { useSelector, useDispatch } from 'react-redux';
// import styles from './Counter.module.css';

export default (props) => {
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  )
}
