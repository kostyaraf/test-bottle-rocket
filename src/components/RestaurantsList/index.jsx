import React, { useState } from 'react'
// import styles from './MainContainer.module.css'
// import { useSelector, useDispatch } from 'react-redux';
// import styles from './Counter.module.css';

export default (props) => {
  console.log('props.restaurants', props.restaurants)
  return (
    <div>
      {props.restaurants}
    </div>
  )
}
