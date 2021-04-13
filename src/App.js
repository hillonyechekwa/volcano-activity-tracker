import './App.css';
import Map from './components/Map'
import { useState, useEffect } from 'react'


function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchEvents()

    async function fetchEvents() {
      setLoading(true)
      const res = await fetch(
        `https://eonet.sci.gsfc.nasa.gov/api/v2.1/events`
      )
      const { events } = await res.json()
      
      setEventData(events)
      setLoading(false)

    }
  },[])

  return (
    <div className="app">
      {!loading ? <Map eventData={eventData}/> : <h1>Loading</h1>}
   </div>
  );
}

export default App;


// TODO add text details to the frontend and also find out how to add d3 visuals or visualize the data. 
