import React, { useState, useEffect } from 'react'
// import { Counter } from './features/counter/Counter';
// import './App.css';
import MainContainer from './components/MainContainer'
import RestaurantsList from './containers/RestaurantsList'
import MainHeader from './components/MainHeader'
import Details from './components/Details'
import { getRestaurants } from './services/query'
import {
  setCurrentRestaurant,
  setRestaurantsList,
  detailsActivate,
} from './store/actions.js'
import store from './store/store'
import restaurants from './restaurants'

function App() {
  // const [state] = useState({
  //   restaurants: getRestaurants(),
  // })

  // getRestaurants()
  //   .then(r => r.json())
  //   .then(r => store.dispatch(setRestaurantsList(r.restaurants)))

  // console.log(store.getState())
  // let state = store.getState()

  // useEffect(() => {
  //   console.log('state', state)
  // }, [state])

  // const store = store.getState()
  restaurants.getRestaurants()

  return (
    <div
      className='App'
      onClick={() => {
        console.log(store.getState())
      }}
    >
      <MainContainer>
        <MainHeader>Lunch Time</MainHeader>
        <RestaurantsList restaurants={restaurants.restaurantsList} />
        {/* {state.currentRestaurant.lenght === 0 &&
        <Details items={store.getState().currentRestaurant}/>
        } */}
        
      </MainContainer>
    </div>
  )
}

export default App
