import React from 'react'
import { DetailsMap } from './DetailsMap'
import { DetailsInfo } from './DetailsInfo'

export default function Details(props) {
  const item = props.item || {}
  const { closeDetails, isActive } = props
  const wrapperClassName = 'details__wrapper'

  return (
    <div
      className={`
        ${wrapperClassName} ${isActive ? '' : wrapperClassName + '_disable'}
      `}
      onClick={e => {
        if (e.target.className.includes(wrapperClassName)) closeDetails()
      }}
    >
      <div className='details'>
        {item.location ? <DetailsMap {...item} /> : ''}
        <DetailsInfo {...item} />
      </div>
    </div>
  )
}
