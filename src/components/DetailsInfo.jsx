import React from 'react'
// import "../../../assets/styles/DetailsInfo.scss"

export function DetailsInfo({ name, category, contact, location }) {
  return (
    <div className={'details__info'}>
      <div className={'details__header'}>
        <p className={'details__name'}>{name}</p>
        <p className={'details__category'}>{category}</p>
      </div>
      <div className={'details__info'}>
        <p className={'details__address'}>{location.formattedAddress}</p>
        <p className={'details__phone'}>{contact.formattedPhone}</p>
        <a
          className={'details__twitter'}
          href={`https://twitter.com/${contact.twitter}`}
          target='_blank'
        >{`@${contact.twitter}`}</a>
      </div>
    </div>
  )
}
