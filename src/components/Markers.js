import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHandSpock} from '@fortawesome/free-solid-svg-icons'


export default function (lat, lng, onClick) {
    return (
        <div className="location-marker">
            <FontAwesomeIcon Icon={faHandSpock} className="location-icon" onclick={onclick}/>
        </div>
    )
}