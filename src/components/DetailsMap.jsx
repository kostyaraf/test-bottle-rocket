import React from 'react'
import GoogleMapReact from 'google-map-react'

export function DetailsMap(props) {
  const name = props.name || ''
  const location = props.location || {}
  const MapMarker = ({ name }) => <div className={'map-marker'}></div>
  return (
    <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        defaultCenter={{ lat: location.lat, lng: location.lng }}
        defaultZoom={15}
      >
        <MapMarker lat={location.lat} lng={location.lng} name={name} />
      </GoogleMapReact>
    </div>
  )
}
