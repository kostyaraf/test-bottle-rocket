import React, { useState } from 'react'

export default props => {
  const { data, actions, store } = props
  // console.log('data', data)

  return (
    <div
      className='restaurant-card'
      onClick={() => {
        store.dispatch(actions.detailsActivate(true))
        store.dispatch(actions.setCurrentRestaurant(data))
        setTimeout(() => {
          console.log(store.getState())
        }, 1500)
      }}
    >
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
