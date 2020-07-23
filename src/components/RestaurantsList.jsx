import React, { useState } from 'react'
import { getRestaurants, Restaurants } from '../services/query'
import RestaurantCard from './RestaurantCard'
// import styles from './MainContainer.module.css'
// import { useSelector, useDispatch } from 'react-redux';
// import styles from './Counter.module.css';

export default props => {
  let restaurants = Restaurants
  console.log('props.restaurants', Restaurants)

  return (
    <div className='restaurant-list'>
      {restaurants.map(e => (<RestaurantCard data={e} />))}
    </div>
  )
}
