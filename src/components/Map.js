import { useState } from 'react'
import ReactMapGL, {Marker} from 'react-map-gl'
import Locationinfo from './Locationinfo'


export default function Map({eventData}) {

    // const markers = eventData.map(ev => {
    //     if (ev.categories[0] === 12) {
    //         return <Marker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationinfo({
    //             id: ev.id,
    //             title: ev.title
    //         })}/>
                
    //     }
    //     return null
    // })

    const [viewport, setViewPort] = useState({
        longitude: -61.18,
        latitude: 13.33,
        width: 800,
        height: 500,
        zoom: 10
    })

    const [locationinfo, setLocationinfo] = useState(null)

    
    return (
        <div className="map">
        <ReactMapGL
         {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                onViewportChange={nextViewport => setViewPort(nextViewport)}
                mapStyle='mapbox://styles/vulkan/cknd4rpo521qk17r08p0lkiyv'
        >
          
            </ReactMapGL>
            {/* {locationinfo && <Locationinfo info={locationinfo} />} */}
            </div>
    )
}