import React, { useState } from 'react'

export default props => {
  return (
    <div className='main-header__wrapper'>
      <div className='main-header'>
        <div
          className='main-header__back'
          onClick={() => console.log('click')}
        ></div>
        <h1>{props.children.toString()}</h1>
        <img
          className='main-header__image'
          src={require('../assets/images/icon_map@2x.png')}
          alt='map icon'
        />
      </div>
      <div className='main-header__margin' />
    </div>
  )
}
