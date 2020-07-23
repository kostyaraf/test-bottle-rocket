import React, { useState } from 'react';
// import { Counter } from './features/counter/Counter';
// import './App.css';
import MainContainer from './elements/MainContainer'
import RestaurantsList from './components/RestaurantsList'
import { getRestaurants } from './services/query'

function App() {
  const [ state ] = useState({
    restaurants: getRestaurants()
  });

  return (
    <div className="App">
      <MainContainer>
        123456789
      </MainContainer>
      <RestaurantsList
        restaurants={state.restaurants}
      />
      <div>999</div>
    </div>
  );
}

export default App;
