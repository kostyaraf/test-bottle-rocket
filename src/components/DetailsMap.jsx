import React from "react"
import GoogleMapReact from "google-map-react"
// import '../../../assets/styles/DetailsMap.scss'

export function DetailsMap({name, location}) {
  const MapMarker = ({name}) => <div className={'map-marker'}>
      </div>
  return (
    <div style={{ height: "50vh", width: "100%" }}>
      <GoogleMapReact
        // bootstrapURLKeys={{ key: "" }}
        defaultCenter={{ lat: location.lat, lng: location.lng }}
        defaultZoom={15}
      >
        <MapMarker lat={location.lat} lng={location.lng} name={name} />
      </GoogleMapReact>
    </div>
  )
}
