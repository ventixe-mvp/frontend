import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'

const EventDetails = () => {
  const { id } = useParams()

    const [event, setEvent] = useState({})
  
    const getEvents = async () => {
      const res = await fetch(`https://eventventixe-eza6ffcgf3bah6ep.swedencentral-01.azurewebsites.net/api/events/${id}`)
  
      if (res.ok) {
        const response = await res.json()
        setEvent(response.result)
      }
    }
  
    useEffect(() => {
      getEvents()
    }, [])

  return (        
    
    <div className="portal-wrapper">
      <Nav />
      <Header />
      <main>
        <div className="event-details">
         <h1>{event.title}</h1>
         <Link to={`/events/booking/${id}`}>Book Event</Link>
        </div>
      </main>
      <Footer />
    </div>

  )
}

export default EventDetails
