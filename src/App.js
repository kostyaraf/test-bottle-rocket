import React from 'react'
import MainContainer from './components/MainContainer'
import RestaurantsList from './containers/RestaurantsList'
import MainHeader from './components/MainHeader'
import Details from './components/Details'
import restaurants from './store/restaurants'
import { view } from 'react-easy-state'

export default view(() => {
  return (
    <div className='App'>
      <MainContainer>
        <MainHeader
          isBackButtonActive={restaurants.isDetailsActive}
          backButtonAction={() => {
            restaurants.setDetailsActive(false)
          }}
        >
          Lunch Time
        </MainHeader>
        <RestaurantsList />
        <Details
          item={restaurants.restaurantsList[restaurants.currentIndex]}
          closeDetails={() => {
            restaurants.setDetailsActive(false)
          }}
          isActive={restaurants.isDetailsActive}
        />
      </MainContainer>
    </div>
  )
})
