import React, { useState, useEffect } from 'react'
// import { Counter } from './features/counter/Counter';
// import './App.css';
import MainContainer from './elements/MainContainer'
import RestaurantsList from './components/RestaurantsList'
import MainHeader from './components/MainHeader'
import { getRestaurants } from './services/query'

function App() {
  const [state] = useState({
    restaurants: getRestaurants(),
  })

  return (
    <div className='App'>
      <MainContainer>
        <MainHeader>
          Lunch Time
        </MainHeader>
        <RestaurantsList restaurants={state.restaurants} />
      </MainContainer>
    </div>
  )
}

export default App
