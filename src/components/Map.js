import { useState} from 'react'
import ReactMapGL, {Marker, Popup} from 'react-map-gl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFire} from '@fortawesome/free-solid-svg-icons'


export default function Map({eventData}) {
        

    const [viewport, setViewPort] = useState({
        longitude: -61.18,
        latitude: 13.33,
        width: 800,
        height: 500,
        zoom: 0
    })

    const [locationInfo, setLocationInfo] = useState(null)

    
    return (
        <div className="map">
        <ReactMapGL
         {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                onViewportChange={nextViewport => setViewPort(nextViewport)}
                mapStyle='mapbox://styles/vulkan/cknd4mwej05a517nylw8hff4f'
            >
                {
                    eventData.map(ev => {
                        {/* Dukono volcano is an anomaly in the data set so i excluded it */}
                        if (ev.categories[0].id === 12 && ev.title !== "Dukono Volcano, Indonesia") {
                            return <Marker key={ev.id} latitude={ev.geometries[0].coordinates[1]} longitude={ev.geometries[0].coordinates[0]}>
                                <button
                                    style={{ background: "none", outline: "none", border: "none", cursor: "pointer" }}
                                    onClick={e => {
                                        e.preventDefault();
                                        setLocationInfo(ev)}
                                    }>
                                    <FontAwesomeIcon icon={faFire} size="sm" style={{ color:"orange" }}/>
                                </button>
                            </Marker>
                        }
                        return null
                    })
                }
                {locationInfo ? (
                    <Popup
                        latitude={locationInfo.geometries[0].coordinates[1]}
                        longitude={locationInfo.geometries[0].coordinates[0]}
                        onClose={() => {
                            setLocationInfo(null)
                        }}
                    >
                        <div>
                            <h2 styles={{fontSize: "1rem"}}>{locationInfo.title}</h2>
                        </div>               
                    </Popup>
                ) : null}
            </ReactMapGL>
            </div>
    )
}