import React, { useEffect } from 'react'
import RestaurantCard from '../components/RestaurantCard'
import restaurants from '../store/restaurants'
import { view } from 'react-easy-state'

export default view(() => {
  useEffect(() => {
    if (!restaurants.isListUpload) restaurants.getRestaurants()
  }, [])
  
  return (
    <div className='restaurant-list'>
      {restaurants.restaurantsList.map((e, index) => {
        return <RestaurantCard
          data={e}
          key={index}
          actions={{
            setDetailsActive: restaurants.setDetailsActive,
            setCurrentIndex: restaurants.setCurrentIndex,
          }}
          index={index}
        />
      })}
    </div>
  )
})
