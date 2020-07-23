import React from "react"
// import "../../../assets/styles/DetailsInfo.scss"

export function DetailsInfo({ name, category, contact, location }) {
  return (
    <div className={"details-info"}>
      <div className={"header"}>
        <p className={"name"}>{name}</p>
        <p className={"category"}>{category}</p>
      </div>
      <div className={"info"}>
        <p className={"address"}>{location.formattedAddress}</p>
        <p className={"phone"}>{contact.formattedPhone}</p>
        {/* <p>{`@${contact.twitter}`}</p> */}
        <a
          className={"twitter"}
          href={`https://twitter.com/${contact.twitter}`}
          target="_blank"
        >{`@${contact.twitter}`}</a>
      </div>
    </div>
  )
}
