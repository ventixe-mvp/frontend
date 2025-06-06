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
        <div className="event-details-card">
          <div className='event-image-container'></div>
          <div className='event-details-text'>
            <div class='title'>{event.title}</div>
            <Link to={`/events/booking/${id}`} className='link'>Book Event</Link>
            <div className='card-location'><i class="fa-regular fa-location-dot"></i> {event.location}</div>
            <div className='divider'></div>
            <div className='about'>
              <div className='about-header'>About Event</div>
              <div className='description'>{event.description}</div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>

  )
}

export default EventDetails
