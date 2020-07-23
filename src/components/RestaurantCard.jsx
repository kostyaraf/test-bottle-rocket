import React, { useState } from 'react'
import { getRestaurants, Restaurants } from '../services/query'
import RestaurantCard from './RestaurantCard'
// import styles from './MainContainer.module.css'
// import { useSelector, useDispatch } from 'react-redux';
// import styles from './Counter.module.css';

export default props => {
  const { data } = props
  console.log('data', data)

  return (
    <div className='restaurant-card'>
      <div
        className='restaurant-card__background'
        style={{ backgroundImage: `url("${data.backgroundImageURL}"` }}
      ></div>

      <div className='restaurant-card__shadow'></div>
      <div className='restaurant-card__typography'>
        <h3 className='restaurant-card__title'>{data.name}</h3>
        <p className='restaurant-card__category'>{data.category}</p>
      </div>
    </div>
  )
}
