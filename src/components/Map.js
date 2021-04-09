import { useState } from 'react'
import ReactMapGL from 'react-map-gl'
import Marker from './Markers'
import Locationinfo from './Locationinfo'


export default function Map({eventData}) {

    const markers = eventData.map(ev => {
        if (ev.categories[0] === 12) {
            return <Marker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationinfo = {
                id: ev.id,
                title: ev.title
            }/>
        }
        return null
    })

    const [viewport, setViewPort] = useState({
        longitude: 155.196,
        latitude: -6.137,
        width: 400,
        height: 400,
        zoom: 10
    })

    const [locationinfo, setLocationinfo] = useState(null)

    
    return (
        <div className="map">
        <ReactMapGL
         {...viewport}
        onViewportChange={(viewport) => setViewPort({viewport})}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        >
            {markers}
            </ReactMapGL>
            {locationinfo && <Locationinfo info={locationinfo} />}
            </div>
    )
}