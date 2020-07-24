import React from 'react'
import MainContainer from './components/MainContainer'
import RestaurantsList from './containers/RestaurantsList'
import MainHeader from './components/MainHeader'
import Details from './components/Details'
import restaurants from './store/restaurants'
import { switchBodyScrollY } from './services/body'
import { view } from 'react-easy-state'

export default view(() => {
  return (
    <div className='App'>
      <MainContainer>
        <MainHeader
          isBackButtonActive={restaurants.isDetailsActive}
          backButtonAction={() => {
            restaurants.getDetails(false)
            switchBodyScrollY()
          }}
        >
          Lunch Time
        </MainHeader>
        <RestaurantsList />
        <Details
          item={restaurants.restaurantsList[restaurants.currentIndex]}
          closeDetails={() => {
            restaurants.getDetails(false)
            switchBodyScrollY()
          }}
          isActive={restaurants.isDetailsActive}
          style={restaurants.isDetailsVisible ? {} : { display: 'none' }}
        />
      </MainContainer>
    </div>
  )
})
