import React, { useState, useEffect } from 'react'
import { getRestaurants, Restaurants } from '../services/query'
import RestaurantCard from '../components/RestaurantCard'
import {
  setCurrentRestaurant,
  setRestaurantsList,
  detailsActivate,
} from '../store/actions'
import store from '../store/store'
import restaurants from '../restaurants'
import { view } from 'react-easy-state'


export default view(props => {
  useEffect(() => {
    if (!restaurants.isListUpload) restaurants.getRestaurants()
  }, [])
  
  return (
    <div className='restaurant-list'>
      {restaurants.restaurantsList.map(e => (
        <RestaurantCard
          data={e}
          actions={{
            setCurrentRestaurant,
            setRestaurantsList,
            detailsActivate,
          }}
          store={store}
        />
      ))}
    </div>
  )
})
