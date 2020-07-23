import React from 'react'
import { DetailsMap } from './DetailsMap'
import { DetailsInfo } from './DetailsInfo'

export default function Details(props) {
  const { item, closeDetails } = props
  const wrapperClassName = 'details__wrapper'
  return (
    <div
      className={wrapperClassName}
      onClick={e => {
        if (e.target.className === wrapperClassName) closeDetails()
      }}
    >
      <div className='details'>
        <DetailsMap {...item} />
        <DetailsInfo {...item} />
      </div>
    </div>
  )
}
