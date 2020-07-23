import React from 'react'

export default props => {
  const { isBackButtonActive, backButtonAction } = props
  return (
    <div className='main-header__wrapper'>
      <div className='main-header'>
        <div
          className='main-header__back-button-wrapper'
          onClick={() => {
            isBackButtonActive && backButtonAction()
          }}
        >
          <div
            className='main-header__back-button'
            style={isBackButtonActive ? {} : { opacity: '0', user: 'none' }}
          ></div>
        </div>
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
