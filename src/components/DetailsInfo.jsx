import React from 'react'

export function DetailsInfo(props) {
  const { name, category } = props
  const contact = props.contact || {}
  const location = props.location || {}
  return (
    <div className={'details__info'}>
      <div className={'details__header'}>
        {name && <p className={'details__name'}>{name}</p>}
        {category && <p className={'details__category'}>{category}</p>}
      </div>
      <div className={'details__info'}>
        {location.formattedAddress && (
          <p className={'details__address'}>{location.formattedAddress}</p>
        )}
        {contact.formattedPhone && (
          <p className={'details__phone'}>{contact.formattedPhone}</p>
        )}
        {contact.twitter && (
          <a
            className={'details__twitter'}
            href={`https://twitter.com/${contact.twitter}`}
            rel='noopener noreferrer'
            target='_blank'
          >
            {`@${contact.twitter}`}
          </a>
        )}
      </div>
    </div>
  )
}
