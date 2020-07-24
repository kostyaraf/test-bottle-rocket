import React from 'react'

export default props => {
  const { data, actions, index } = props

  return (
    <div
      className='restaurant-card'
      onClick={() => {
        actions.getDetails(true)
        actions.setCurrentIndex(index)
        actions.switchBodyScrollY()
      }}
    >
      <div
        className='restaurant-card__background'
        style={{ backgroundImage: `url("${data.backgroundImageURL}"` }}
      />

      <div className='restaurant-card__shadow'></div>
      <div className='restaurant-card__typography'>
        <h3 className='restaurant-card__title'>{data.name}</h3>
        <p className='restaurant-card__category'>{data.category}</p>
      </div>
    </div>
  )
}
