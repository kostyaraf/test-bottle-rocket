import React from "react"
import { DetailsMap } from "./DetailsMap"
import { DetailsInfo } from "./DetailsInfo"

export default function Details({item}) {
  return (
    <>
      <DetailsMap {...item}/>
      <DetailsInfo {...item}/>
    </>
  )
}