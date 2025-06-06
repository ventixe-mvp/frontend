import React from 'react'
import { Link } from 'react-router-dom'

const EventItem = ({item}) => {
  return (
    <div className='event-card'>
      <div className='image-container'></div>
      <div className='card-text'>
        <Link to={`/events/${item.id}`} className='event-link'>
            <div>{item.title}</div>  
        </Link>
        <div className='card-location'><i class="fa-regular fa-location-dot"></i> {item.location}</div>
      </div>
    </div>

  )
}

export default EventItem
